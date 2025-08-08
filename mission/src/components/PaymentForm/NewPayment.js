// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/components/PaymentForm/NewPayment.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 실제 입력 폼 로직을 담고 있는 PaymentForm 컴포넌트를 가져옵니다.
import PaymentForm from "./PaymentForm";
// 이 컴포넌트의 최상위 div에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./NewPayment.css";

/**
 * NewPayment 컴포넌트: PaymentForm 컴포넌트를 감싸는 '래퍼(Wrapper)' 또는 '컨테이너' 컴포넌트입니다.
 * 주된 역할은 폼 주변에 일관된 스타일(배경, 여백, 그림자 등)을 적용하는 것입니다.
 * @param {object} props - 부모 컴포넌트(App.js)로부터 전달받는 속성들
 * @returns {JSX.Element} 스타일이 적용된 컨테이너 안에 PaymentForm이 렌더링된 결과
 */
const NewPayment = (props) => {
  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 'new-payment' 클래스가 적용된 div는 NewPayment.css 파일에 정의된 스타일을 갖습니다.
    <div className="new-payment">
      {/* 
        PaymentForm 컴포넌트를 렌더링합니다.
        🚨 문제점: 부모(App.js)에서 NewPayment로 전달된 props(예: getPaymentFormData)가
        자식인 PaymentForm으로 전달되지 않고 있습니다.
      */}
      <PaymentForm />
    </div>
  );
};

// NewPayment 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default NewPayment;
