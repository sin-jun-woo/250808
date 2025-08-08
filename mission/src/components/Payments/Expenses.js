// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/mission/src/components/Payments/Expenses.js

// 1. React와 상태 관리를 위한 `useState` 훅을 가져옵니다.
import React, { useState } from "react";

// 2. 자식 컴포넌트들을 가져옵니다.
import ExpenseItem from "./ExpenseItem"; // 개별 지출 항목을 표시하는 컴포넌트
import Card from "../UI/Card"; // 공통 스타일을 적용하기 위한 래퍼(Wrapper) 컴포넌트
import ExpensesFilter from "./ExpensesFilter"; // 필터링 UI를 제공하는 컴포넌트

// 3. 이 컴포넌트에 적용될 CSS 파일을 가져옵니다.
import "./Expenses.css";

/**
 * Expenses 컴포넌트: 지출 목록 전체를 관리하고 표시하는 컨테이너 컴포넌트입니다.
 * 가격 필터링 기능을 포함하고 있으며, 필터링된 결과를 사용자에게 보여줍니다.
 * @param {object} props - 부모 컴포넌트(App.js)로부터 전달받는 속성들
 * @param {Array<object>} props.items - 모든 지출 항목이 담긴 배열
 * @returns {JSX.Element} 가격 필터와 지출 목록을 포함하는 카드 UI
 */
const Expenses = (props) => {
  // 4. `useState`를 사용하여 필터링할 최대 가격(filteredPrice)을 상태로 관리합니다.
  //    초기값으로 "100"을 설정합니다.
  const [filteredPrice, setFilteredPrice] = useState("100");

  // 5. `ExpensesFilter` 자식 컴포넌트에서 값이 변경되었을 때 호출될 핸들러 함수입니다.
  //    자식에게서 받은 `selectedPrice` 값으로 `filteredPrice` 상태를 업데이트합니다.
  //    이것을 '상태 끌어올리기(Lifting State Up)' 패턴이라고 합니다.
  const filterChangeHandler = (selectedPrice) => {
    setFilteredPrice(selectedPrice);
  };

  // 6. 부모(App.js)로부터 받은 전체 지출 목록(props.items)에서
  //    현재 선택된 최대 가격(filteredPrice)보다 작거나 같은 항목만 필터링하여 새로운 배열을 만듭니다.
  const filteredExpenses = props.items.filter((expense) => {
    // expense.amount(숫자)와 filteredPrice(문자열)를 비교하기 위해 Number()로 형 변환을 합니다.
    return expense.amount <= Number(filteredPrice);
  });

  // 7. 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 8. Card 컴포넌트로 전체를 감싸 일관된 스타일(그림자, 둥근 모서리 등)을 적용합니다.
    <Card className="expenses">
      {/* 9. ExpensesFilter 컴포넌트를 렌더링합니다. */}
      <ExpensesFilter
        // 현재 선택된 가격(상태)을 'selected' prop으로 자식에게 전달합니다.
        // 이를 통해 부모(Expenses)가 자식(ExpensesFilter)의 값을 제어하므로 '제어 컴포넌트'가 됩니다.
        selected={filteredPrice}
        // 가격이 변경될 때 호출될 함수를 'onChangeFilter' prop으로 전달합니다.
        onChangeFilter={filterChangeHandler}
      />
      {/* 
        10. 조건부 렌더링 (삼항 연산자 사용)
        - filteredExpenses 배열에 항목이 하나 이상 있으면(true), 목록을 렌더링합니다.
        - 배열이 비어 있으면(false), 대체 텍스트를 렌더링합니다.
      */}
      {filteredExpenses.length > 0 ? (
        // 11. 필터링된 배열을 map 함수로 순회하며 각 항목을 ExpenseItem 컴포넌트로 변환합니다.
        filteredExpenses.map((item) => (
          <ExpenseItem
            // 12. ✨ 중요: React가 목록을 효율적으로 업데이트하기 위해 각 항목을 식별할 수 있는 고유한 'key' prop을 전달해야 합니다.
            // item.id를 key로 사용합니다.
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        // 13. 필터링된 결과가 없을 때 사용자에게 보여줄 메시지입니다.
        <p>해당 가격 범위에 맞는 지출 내역이 없습니다.</p>
      )}
    </Card>
  );
};

// 14. Expenses 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default Expenses;
