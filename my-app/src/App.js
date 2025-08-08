// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/my-app/src/App.js

// React와 상태 관리를 위한 useState 훅을 가져옵니다.
import React, { useState } from "react";

// 목표 목록을 표시하는 자식 컴포넌트를 가져옵니다.
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
// 새로운 목표를 입력받는 자식 컴포넌트를 가져옵니다.
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
// 이 컴포넌트에 적용될 CSS 파일을 가져옵니다.
import "./App.css";

/**
 * App 컴포넌트: 애플리케이션의 최상위 컴포넌트입니다.
 * 목표(goals) 목록 상태를 관리하고, 목표를 추가하고 삭제하는 함수들을 자식 컴포넌트에 제공합니다.
 */
const App = () => {
  // 'courseGoals'라는 상태 변수와 이를 업데이트하는 'setCourseGoals' 함수를 선언합니다.
  // useState를 사용하여 초기 목표 목록으로 상태를 초기화합니다.
  const [courseGoals, setCourseGoals] = useState([
    { text: "운동하기", id: "g1" },
    { text: "완강하기", id: "g2" },
  ]);

  /**
   * 새로운 목표를 목록에 추가하는 핸들러 함수입니다.
   * 이 함수는 CourseInput 자식 컴포넌트에 prop으로 전달됩니다.
   * @param {string} enteredText - CourseInput 컴포넌트에서 사용자가 입력한 텍스트
   */
  const addGoalHandler = (enteredText) => {
    // 상태 업데이트 시 이전 상태(prevGoals)를 기반으로 새 상태를 반환하는 것이 가장 안전한 방법입니다.
    setCourseGoals((prevGoals) => {
      // 불변성을 유지하기 위해 이전 목표 배열을 복사하여 새로운 배열을 만듭니다.
      const updatedGoals = [...prevGoals];
      // 새 목표 객체를 배열의 맨 앞에 추가(unshift)합니다.
      // 🚨 문제점: Math.random()은 고유성을 보장하지 않으므로 React 리스트의 key로 사용하기에 매우 부적합합니다.
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      // 업데이트된 새 배열을 반환하여 상태를 갱신합니다.
      return updatedGoals;
    });
  };

  /**
   * 특정 목표를 목록에서 삭제하는 핸들러 함수입니다.
   * 이 함수는 CourseGoalList 자식 컴포넌트에 prop으로 전달됩니다.
   * @param {string} goalId - 삭제할 목표의 id
   */
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      // filter 메서드를 사용하여 삭제할 id와 일치하지 않는 목표들만으로 새로운 배열을 만듭니다.
      // 이는 불변성을 지키면서 항목을 삭제하는 올바른 방법입니다.
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  // 조건부 렌더링을 위한 변수입니다.
  // 기본적으로 "목표 없음" 메시지를 담고 있습니다.
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  // 만약 목표 목록에 항목이 하나 이상 있다면,
  if (courseGoals.length > 0) {
    // content 변수의 내용을 CourseGoalList 컴포넌트로 덮어씁니다.
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    <div>
      {/* 목표 입력 폼을 렌더링하는 섹션 */}
      <section id="goal-form">
        {/* CourseInput 컴포넌트에 addGoalHandler 함수를 'onAddGoal' prop으로 전달합니다. */}
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      {/* 목표 목록을 렌더링하는 섹션 */}
      <section id="goals">
        {/* 위에서 조건에 따라 결정된 content 변수를 렌더링합니다. */}
        {content}
        {/* 주석 처리된 코드: 논리 AND(&&) 연산자를 사용한 다른 조건부 렌더링 방법입니다. */}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
