// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/my-app/src/components/CourseGoals/CourseGoalItem/CourseGoalItem.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./CourseGoalItem.css";

/**
 * CourseGoalItem 컴포넌트: 목록에 표시될 개별 목표 항목 하나를 렌더링합니다.
 * 사용자가 이 항목을 클릭하면 삭제 이벤트가 발생합니다.
 * @param {object} props - 부모 컴포넌트(CourseGoalList.js)로부터 전달받는 속성들
 * @param {string} props.id - 삭제할 때 식별자로 사용될 고유 ID
 * @param {function} props.onDelete - 항목을 클릭했을 때 부모에게 삭제를 요청하기 위해 호출할 함수
 * @param {React.ReactNode} props.children - 항목에 표시될 내용 (여기서는 목표 텍스트)
 * @returns {JSX.Element} 클릭 가능한 목록 항목(li)
 */
const CourseGoalItem = (props) => {
  // 주석 처리된 코드: 아마도 삭제 시 텍스트를 '(Deleted!)'로 변경하려던 초기 아이디어로 보입니다.
  // 현재는 사용되지 않으므로, 최종 코드에서는 제거하는 것이 좋습니다.
  // const [deleteText, setDeleteText] = useState('');

  // 항목이 클릭되었을 때 실행되는 핸들러 함수입니다.
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    // 부모로부터 받은 onDelete 함수를 호출하고, 이 항목의 고유 ID(props.id)를 인자로 전달합니다.
    // 이를 통해 부모 컴포넌트(App.js)가 어떤 항목을 삭제해야 할지 알 수 있습니다.
    props.onDelete(props.id);
  };

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 'goal-item' 클래스가 적용된 <li> 태그를 렌더링합니다.
    // 사용자가 이 항목을 클릭하면 위에서 정의한 deleteHandler 함수가 실행됩니다.
    <li className="goal-item" onClick={deleteHandler}>
      {/* 
        props.children은 React의 특별한 prop으로, 부모 컴포넌트에서
        <CourseGoalItem>여기에 오는 모든 내용</CourseGoalItem>
        과 같이 태그 사이에 전달된 내용을 그대로 렌더링합니다.
        이 경우, 목표 텍스트가 여기에 표시됩니다.
      */}
      {props.children}
    </li>
  );
};

// CourseGoalItem 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default CourseGoalItem;
