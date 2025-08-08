// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/my-app/src/components/CourseGoals/CourseGoalList/CourseGoalList.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 목록의 개별 항목을 렌더링하는 자식 컴포넌트를 가져옵니다.
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./CourseGoalList.css";

/**
 * CourseGoalList 컴포넌트: 목표(goal)들의 배열을 받아와서 목록 형태로 화면에 표시합니다.
 * 이 컴포넌트는 데이터를 표시하는 역할만 하는 '프레젠테이셔널(Presentational)' 컴포넌트입니다.
 * @param {object} props - 부모 컴포넌트(App.js)로부터 전달받는 속성들
 * @param {Array<object>} props.items - 표시할 목표 객체들이 담긴 배열
 * @param {function} props.onDeleteItem - 각 목표 항목을 삭제할 때 호출될 함수
 * @returns {JSX.Element} 목표 항목들이 나열된 <ul> (Unordered List)
 */
const CourseGoalList = (props) => {
  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 'goal-list' 클래스가 적용된 <ul> 태그를 렌더링합니다.
    <ul className="goal-list">
      {/* 
        props로 받은 items 배열을 map 함수를 사용해 순회합니다.
        배열의 각 'goal' 객체를 CourseGoalItem 컴포넌트로 변환하여 새로운 컴포넌트 배열을 생성합니다.
        이것이 React에서 동적으로 목록을 렌더링하는 핵심 패턴입니다.
      */}
      {props.items.map((goal) => (
        <CourseGoalItem
          // key: React가 배열의 각 항목을 효율적으로 식별하고 업데이트하기 위한 필수 prop입니다.
          // 반드시 형제 요소들 사이에서 고유하고 안정적인 값이어야 합니다.
          key={goal.id}
          // id: 삭제할 항목을 식별하기 위해 CourseGoalItem 컴포넌트에 전달합니다.
          id={goal.id}
          // onDelete: 부모로부터 받은 삭제 핸들러 함수를 그대로 자식에게 전달합니다. (Prop Drilling)
          onDelete={props.onDeleteItem}
        >
          {/* 
            <CourseGoalItem> 태그 사이에 있는 내용은 'children' prop으로 전달됩니다.
            여기서는 목표 텍스트(goal.text)가 전달됩니다.
          */}
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

// CourseGoalList 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default CourseGoalList;
