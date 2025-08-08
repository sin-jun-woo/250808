// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/components/Payments/Expenses.js

// React와 상태 관리를 위한 useState 훅을 가져옵니다.
import React, { useState } from "react";

// 개별 지출 항목을 렌더링하는 컴포넌트를 가져옵니다.
import ExpenseItem from "./ExpenseItem";
// 공통 스타일을 적용하기 위한 래퍼(Wrapper) 컴포넌트를 가져옵니다.
import Card from "../UI/Card";
// 이 컴포넌트에 적용될 CSS 파일을 가져옵니다.
import "./Expenses.css";
// 연도별 필터링 UI를 제공하는 컴포넌트를 가져옵니다.
import ExpensesFilter from "./ExpensesFilter";

/**
 * Expenses 컴포넌트: 지출 목록 전체를 관리하고 표시하는 컨테이너 컴포넌트입니다.
 * 연도 필터링 기능을 포함하고 있으며, 필터링된 결과를 사용자에게 보여줍니다.
 * @param {object} props - 부모 컴포넌트(App.js)로부터 전달받는 속성들
 * @param {Array<object>} props.items - 모든 지출 항목이 담긴 배열
 * @returns {JSX.Element} 연도 필터와 지출 목록을 포함하는 카드 UI
 */
const Expenses = (props) => {
  // 'filteredYear'라는 상태 변수와 이를 업데이트하는 'setFilteredYear' 함수를 선언합니다.
  // useState를 사용하여 필터의 초기 연도를 '2023'으로 설정합니다.
  const [filteredYear, setFilteredYear] = useState("2023");

  // ExpensesFilter 자식 컴포넌트에서 연도가 변경되었을 때 호출될 핸들러 함수입니다.
  // 자식에게서 받은 selectedYear 값으로 filteredYear 상태를 업데이트합니다. (상태 끌어올리기)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // props로 받은 전체 지출 목록(props.items)에서
  // 현재 선택된 연도(filteredYear)와 일치하는 항목만 필터링하여 새로운 배열을 만듭니다.
  const filteredExpenses = props.items.filter((expense) => {
    // 각 지출 항목의 날짜(expense.date)에서 연도를 추출하여 문자열로 변환한 뒤,
    // 상태 변수 filteredYear와 비교합니다.
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // 주석 처리된 코드: 조건부 렌더링을 위한 변수를 사용하는 다른 방법입니다.
  // let expensesContent = <p>값이 없습니다.</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((item) => (
  //     <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  //   ));
  // }

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // Card 컴포넌트로 전체를 감싸 일관된 스타일을 적용합니다.
    <Card className="expenses">
      {/* 연도 필터 컴포넌트 */}
      <ExpensesFilter
        // 현재 선택된 연도(상태)를 'selected' prop으로 전달합니다. (제어 컴포넌트)
        selected={filteredYear}
        // 연도가 변경될 때 호출될 함수를 'onChangeFilter' prop으로 전달합니다.
        onChangeFilter={filterChangeHandler}
      />
      {/* 
        조건부 렌더링: 삼항 연산자를 사용합니다.
        - filteredExpenses 배열에 항목이 하나 이상 있으면(true), 목록을 렌더링합니다.
        - 배열이 비어 있으면(false), "값이 없습니다."라는 메시지를 렌더링합니다.
      */}
      {filteredExpenses.length > 0 ? (
        // 필터링된 배열을 map 함수로 순회하며 각 항목을 ExpenseItem 컴포넌트로 변환합니다.
        // 🚨 문제점: map 함수 내에서 렌더링되는 각 컴포넌트는 고유한 'key' prop을 가져야 합니다.
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <p>값이 없습니다.</p>
      )}
      {/* 주석 처리된 코드: 논리 AND(&&) 연산자를 사용한 다른 조건부 렌더링 방법입니다. */}
      {/* {filteredExpenses.length === 0 && <p>값이 없습니다.</p>} */}
    </Card>
  );
};

// Expenses 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default Expenses;
