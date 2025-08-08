// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/components/Payments/ExpenseDate.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./ExpenseDate.css";

/**
 * ExpenseDate 컴포넌트: 날짜 객체를 받아와서 특정 형식의 UI로 표시하는 역할을 합니다.
 * 이 컴포넌트는 오직 props를 받아 화면에 표시하는 '프레젠테이셔널(Presentational)' 컴포넌트입니다.
 * @param {object} props - 부모 컴포넌트(ExpenseItem.js)로부터 전달받는 속성들
 * @param {Date} props.date - 표시할 날짜 정보가 담긴 JavaScript Date 객체
 * @returns {JSX.Element} 월, 연도, 일이 표시되는 날짜 UI
 */
const ExpenseDate = (props) => {
  // props로 받은 Date 객체의 toLocaleString 메서드를 사용하여 월을 '긴' 형식(예: "1월", "2월")으로 변환합니다.
  // "ko-KR" 옵션은 한국어 형식에 맞추기 위함입니다.
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  // toLocaleString 메서드를 사용하여 일을 항상 '두 자리 숫자'(예: "01", "14")로 변환합니다.
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  // getFullYear 메서드를 사용하여 4자리 연도를 추출합니다.
  const year = props.date.getFullYear();

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 전체 날짜 영역을 감싸는 div입니다.
    <div className="expense-date">
      {/* 월을 표시하는 부분 */}
      <div className="expense-date__month">{month}</div>
      {/* 연도를 표시하는 부분 */}
      <div className="expense-date__year">{year}</div>
      {/* 일을 표시하는 부분 */}
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

// ExpenseDate 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default ExpenseDate;
