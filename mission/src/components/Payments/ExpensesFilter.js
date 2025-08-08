// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/mission/src/components/Payments/ExpensesFilter.js

// 1. React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 2. 이 컴포넌트에 적용될 CSS 파일을 가져옵니다.
import "./ExpensesFilter.css";

/**
 * ExpensesFilter 컴포넌트: 사용자에게 필터링 옵션을 제공하는 UI 컴포넌트입니다.
 * 이 컴포넌트는 '제어 컴포넌트(Controlled Component)' 패턴을 따릅니다.
 * 즉, 자신의 상태를 직접 관리하지 않고, 부모로부터 받은 props(값과 이벤트 핸들러)를 통해 제어됩니다.
 * @param {object} props - 부모 컴포넌트(Expenses.js)로부터 전달받는 속성들
 * @param {string} props.selected - 현재 필터에 선택된 값 (부모의 state)
 * @param {function} props.onChangeFilter - 필터 값이 변경될 때 부모의 state를 업데이트하기 위해 호출할 함수
 * @returns {JSX.Element} 필터 UI
 */
const ExpensesFilter = (props) => {
  // 3. input 요소의 값이 변경될 때마다 실행될 이벤트 핸들러 함수입니다.
  const changeHandler = (event) => {
    // 4. 이벤트가 발생한 요소(input)의 현재 값(event.target.value)을 가져옵니다.
    // 5. 부모 컴포넌트로부터 받은 `onChangeFilter` 함수를 호출하여, 변경된 값을 부모에게 전달합니다.
    //    이것을 '상태 끌어올리기(Lifting State Up)'라고 합니다.
    props.onChangeFilter(event.target.value);
  };

  // 6. 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* 🚨 문제점 1: 부모에서는 '연도'를 필터링하는데, 라벨은 '가격'으로 되어 있어 사용자에게 혼동을 줍니다. */}
        <label>Filter by Price (Max: ${props.selected})</label>
        {/* 
          🚨 문제점 2: 이 input은 '연도'를 다루기 위한 UI로 적합하지 않습니다.
          - type="range"는 연속적인 값에 적합하며, min/max가 1/100으로 고정되어 있습니다.
          - 부모에서 전달된 연도(예: "2023")는 이 범위(1~100)를 벗어나므로, 슬라이더가 제대로 표시되지 않을 수 있습니다.
          - 연도 선택에는 <select> 태그를 사용하는 것이 일반적입니다.
        */}
        <input
          type="range"
          min="1"
          max="100"
          // 7. input의 현재 값은 항상 부모로부터 받은 `props.selected`로 설정됩니다. (제어 컴포넌트)
          value={props.selected}
          // 8. 값이 변경되면 `changeHandler` 함수가 실행됩니다.
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

// 9. ExpensesFilter 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default ExpensesFilter;
