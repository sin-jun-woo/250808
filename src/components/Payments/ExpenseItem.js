// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/components/Payments/ExpenseItem.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 날짜를 표시하는 부분을 담당하는 자식 컴포넌트를 가져옵니다.
import ExpenseDate from "./ExpenseDate";
// 공통 카드 스타일을 적용하기 위한 래퍼(Wrapper) 컴포넌트를 가져옵니다.
import Card from "../UI/Card";
// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./ExpenseItem.css";

/**
 * ExpenseItem 컴포넌트: 하나의 지출 항목에 대한 정보를 표시하는 컴포넌트입니다.
 * 이 컴포넌트는 상태(state)를 가지지 않고, 부모로부터 받은 props를 화면에 그대로
 * 보여주는 역할을 하는 '프레젠테이셔널(Presentational)' 또는 '덤(Dumb)' 컴포넌트입니다.
 * @param {object} props - 부모 컴포넌트(Expenses.js)로부터 전달받는 속성들
 * @param {Date} props.date - 지출 날짜
 * @param {string} props.title - 지출 항목 이름
 * @param {number} props.amount - 지출 금액
 * @returns {JSX.Element} 스타일이 적용된 단일 지출 항목 UI
 */
const ExpenseItem = (props) => {
  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // Card 컴포넌트를 래퍼로 사용하여 일관된 카드 UI(그림자, 둥근 모서리 등)를 적용합니다.
    // 'expense-item' 클래스를 전달하여 이 컴포넌트만의 특정 스타일을 추가로 적용합니다.
    <Card className="expense-item">
      {/* 
        날짜 표시를 위해 ExpenseDate 컴포넌트를 사용합니다.
        부모로부터 받은 props.date를 그대로 자식 컴포넌트에 전달합니다.
      */}
      <ExpenseDate date={props.date} />
      {/* 지출 항목의 제목과 금액을 담는 컨테이너입니다. */}
      <div className="expense-item__description">
        {/* props.title을 <h2> 태그로 표시합니다. */}
        <h2>{props.title}</h2>
        {/* props.amount를 가격 스타일이 적용된 <div> 태그로 표시합니다. */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

// ExpenseItem 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default ExpenseItem;
