// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/components/Payments/ExpensesFilter.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./ExpensesFilter.css";

/**
 * ExpensesFilter 컴포넌트: 사용자가 연도를 선택하여 지출 내역을 필터링할 수 있는 UI를 제공합니다.
 * 이 컴포넌트는 스스로 상태를 관리하지 않고, 부모 컴포넌트로부터 상태(선택된 연도)와
 * 상태 변경 함수를 props로 받아 동작하는 '제어 컴포넌트(Controlled Component)'입니다.
 * @param {object} props - 부모 컴포넌트(Expenses.js)로부터 전달받는 속성들
 * @param {string} props.selected - 현재 필터링에 사용되고 있는 연도 값 (select 요소의 현재 값)
 * @param {function} props.onChangeFilter - 사용자가 새로운 연도를 선택했을 때 호출될 함수
 * @returns {JSX.Element} 연도 필터링 드롭다운 메뉴
 */
const ExpensesFilter = (props) => {
  // 드롭다운 메뉴의 값이 변경될 때마다 실행되는 이벤트 핸들러 함수입니다.
  const dropdownChangeHandler = (event) => {
    // event.target.value를 통해 사용자가 선택한 새로운 연도 값을 가져옵니다.
    // 그리고 부모 컴포넌트로부터 받은 props.onChangeFilter 함수를 호출하여
    // 선택된 연도 값을 부모에게 전달합니다.
    // 이 패턴을 "Lifting State Up" (상태 끌어올리기)이라고 합니다.
    props.onChangeFilter(event.target.value);
  };

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* 
          select 요소(드롭다운 메뉴)입니다.
          - value={props.selected}: 이 select의 현재 값은 부모로부터 받은 props.selected에 의해 결정됩니다.
            이렇게 React 상태로 값을 제어하는 것을 '제어 컴포넌트'라고 합니다.
          - onChange={dropdownChangeHandler}: 사용자가 다른 옵션을 선택하면 dropdownChangeHandler 함수가 실행됩니다.
        */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

// ExpensesFilter 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default ExpensesFilter;
