// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/components/PaymentForm/PaymentForm.js

// React와 상태 관리를 위한 useState 훅을 가져옵니다.
import React, { useState } from "react";

// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./PaymentForm.css";

/**
 * PaymentForm 컴포넌트: 새로운 지출 항목을 입력받는 폼 UI를 제공합니다.
 * 사용자가 입력한 데이터를 상태로 관리하고, 폼이 제출되면 부모 컴포넌트로 데이터를 전달합니다.
 * @param {object} props - 부모 컴포넌트로부터 전달받는 속성들
 * @param {function} props.getPaymentFormData - 폼 데이터를 부모 컴포넌트로 전달하기 위한 콜백 함수
 * @returns {JSX.Element} 지출 항목 추가 폼
 */
const PaymentForm = ({ getPaymentFormData }) => {
  // 폼의 모든 입력 값(이름, 금액, 날짜)을 하나의 객체로 관리하기 위한 상태를 선언합니다.
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    // 🚨 문제점 1: new Date()는 Date 객체를 반환하지만, <input type="date">의 value는 'YYYY-MM-DD' 형식의 문자열을 기대합니다.
    // 이로 인해 초기 렌더링 시 날짜가 제대로 표시되지 않거나 콘솔에 경고가 발생할 수 있습니다.
    today: new Date(),
  });

  // '이름' 입력 필드의 값이 변경될 때마다 호출되는 핸들러입니다.
  const inputTextHandler = (event) => {
    // 이전 상태(prevState)를 기반으로 name 속성만 새로운 값으로 업데이트합니다.
    // ...prevState를 사용하여 다른 속성(price, today)은 그대로 유지합니다.
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  // '금액' 입력 필드의 값이 변경될 때마다 호출되는 핸들러입니다.
  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      // 🚨 문제점 2: event.target.value는 항상 문자열을 반환합니다.
      // 숫자 타입으로 관리하는 것이 더 안전합니다.
      price: event.target.value,
    }));
  };

  // '날짜' 입력 필드의 값이 변경될 때마다 호출되는 핸들러입니다.
  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  // 폼 제출 버튼을 클릭했을 때 실행되는 핸들러입니다.
  const buttonSubmitHander = (event) => {
    // 폼 제출 시 발생하는 기본 동작(페이지 새로고침)을 막습니다.
    event.preventDefault();

    // 부모 컴포넌트로부터 받은 getPaymentFormData 함수를 호출하여
    // 현재 폼의 상태(objectState)를 인자로 전달합니다. (상태 끌어올리기)
    getPaymentFormData(objectState);

    // 폼 제출 후, 입력 필드들을 초기 상태로 리셋합니다.
    setObjectState({
      name: "",
      price: 0,
      today: new Date(), // 여기도 마찬가지로 Date 객체 문제가 있습니다.
    });
  };

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            {/* 🚨 접근성 문제: label의 htmlFor와 input의 id를 연결해주는 것이 좋습니다. */}
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name} // 입력 값은 항상 React 상태와 연결됩니다 (제어 컴포넌트).
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today} // Date 객체가 값으로 전달되어 문제가 발생합니다.
            />
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
