// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/my-app/src/components/CourseGoals/CourseInput/CourseInput.js

// React와 상태 관리를 위한 useState 훅을 가져옵니다.
import React, { useState } from "react";
// CSS-in-JS 라이브러리인 styled-components를 가져옵니다.
import { styled } from "styled-components";

// 재사용 가능한 공통 버튼 컴포넌트를 가져옵니다.
import Button from "../../UI/Button/Button";
// 이 컴포넌트에 적용될 (현재는 사용되지 않는) CSS 파일을 가져옵니다.
import "./CourseInput.css";

/**
 * CourseInput 컴포넌트: 사용자가 새로운 목표를 입력하고 추가할 수 있는 폼 UI를 제공합니다.
 * 입력 값의 유효성을 검사하여 유효하지 않을 경우 시각적 피드백을 줍니다.
 * @param {object} props - 부모 컴포넌트(App.js)로부터 전달받는 속성들
 * @param {function} props.onAddGoal - 입력된 목표 텍스트를 부모 컴포-넌트로 전달하기 위한 콜백 함수
 * @returns {JSX.Element} 목표 입력 폼
 */
const CourseInput = (props) => {
  // 입력 필드의 현재 값을 저장하기 위한 상태 변수입니다.
  const [enteredValue, setEnteredValue] = useState("");
  // 입력 값의 유효성(validity) 상태를 저장하기 위한 상태 변수입니다. true가 유효한 상태입니다.
  const [isValid, setIsValid] = useState(true);

  // 입력 필드의 값이 변경될 때마다 호출되는 핸들러 함수입니다.
  const goalInputChangeHandler = (event) => {
    // 입력 값의 앞뒤 공백을 제거한 길이가 0보다 크면, 유효성 상태를 true로 복원합니다.
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    // 입력 필드의 값을 상태에 업데이트합니다. (제어 컴포넌트)
    setEnteredValue(event.target.value);
  };

  // 폼이 제출될 때(버튼 클릭 시) 호출되는 핸들러 함수입니다.
  const formSubmitHandler = (event) => {
    // 폼 제출 시 발생하는 기본 동작(페이지 새로고침)을 막습니다.
    event.preventDefault();
    // 입력 값이 비어있는 경우,
    if (enteredValue.trim().length === 0) {
      // 유효성 상태를 false로 변경하여 사용자에게 시각적 피드백(빨간색 배경)을 줍니다.
      setIsValid(false);
      // 🚨 문제점 1: 입력 값이 유효하지 않을 때만 입력 필드를 비웁니다.
      // 성공적으로 제출했을 때도 비워주는 것이 사용자 경험에 좋습니다.
      setEnteredValue("");
      // 함수 실행을 여기서 중단합니다.
      return;
    }
    // 부모로부터 받은 onAddGoal 함수를 호출하여 입력된 값을 전달합니다. (상태 끌어올리기)
    props.onAddGoal(enteredValue);
  };

  // 🚨 문제점 2: 개발 중 디버깅 목적으로 사용된 console.log가 남아있습니다.
  // 프로덕션 코드에서는 제거하는 것이 좋습니다.
  console.log(isValid);

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    <form onSubmit={formSubmitHandler}>
      {/* 🚨 문제점 3: styled-component의 이름에 오타가 있습니다. (FormControll -> FormControl) */}
      <FormControl>
        <FormControllLabel>목표</FormControllLabel>
        {/* 주석 처리된 코드: styled-components 대신 일반 CSS 클래스를 사용한 조건부 스타일링 예시 */}
        {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}></div> */}
        <FormControllInput
          type="text"
          onChange={goalInputChangeHandler}
          // styled-component에 동적 스타일링을 위한 prop을 전달합니다.
          isvalid={isValid}
          // 주석 처리된 코드: styled-components 대신 인라인 스타일을 사용한 조건부 스타일링 예시
          // style={{
          //   backgroundColor: isValid ? "transparent" : "salmon",
          //   borderColor: isValid ? "#ccc" : "red",
          // }}
        />
      </FormControl>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;

// styled-components를 사용하여 div에 스타일을 적용한 FormControl 컴포넌트를 생성합니다.
const FormControl = styled.div`
  margin: 0.5rem 0;
`;

// label에 스타일을 적용한 FormControllLabel 컴포넌트를 생성합니다.
const FormControllLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

// input에 스타일을 적용한 FormControllInput 컴포넌트를 생성합니다.
const FormControllInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  /* 
    props로 전달된 isvalid 값에 따라 조건부로 CSS를 적용합니다.
    isvalid가 false일 경우, 배경색과 테두리 색을 변경하여 유효하지 않음을 표시합니다.
  */
  ${(props) =>
    !props.isvalid &&
    `
    background-color: salmon;
    border-color: red;
    `}
`;
