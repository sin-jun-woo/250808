// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/my-app/src/components/UI/Button/Button.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./Button.css";

/**
 * Button 컴포넌트: 재사용 가능한 공통 버튼 UI를 제공합니다.
 * 이 컴포넌트는 props를 통해 동적으로 타입, 클릭 이벤트, 내용을 전달받아
 * 일관된 스타일의 버튼을 생성하는 역할을 합니다.
 * @param {object} props - 부모 컴포넌트로부터 전달받는 속성들
 * @param {string} props.type - 버튼의 타입 ('button', 'submit', 'reset'). 기본값은 'button'입니다.
 * @param {function} props.onClick - 버튼이 클릭되었을 때 실행될 함수
 * @param {React.ReactNode} props.children - 버튼 내부에 표시될 내용 (텍스트, 아이콘 등)
 * @returns {JSX.Element} 스타일이 적용된 button 요소
 */
const Button = (props) => {
  // HTML <button> 요소를 반환합니다.
  return (
    <button
      // props로 전달받은 type을 버튼의 type 속성으로 설정합니다.
      // 폼 내부에서 사용될 때 'submit'으로 지정할 수 있습니다.
      type={props.type || "button"} // props.type이 없으면 'button'을 기본값으로 사용
      // 'button'이라는 기본 CSS 클래스를 적용합니다.
      className="button"
      // props로 전달받은 onClick 함수를 버튼의 클릭 이벤트 핸들러로 설정합니다.
      onClick={props.onClick}
    >
      {/* 
        props.children은 React의 특별한 prop입니다.
        <Button>여기에 오는 모든 내용</Button>이 이 위치에 렌더링됩니다.
      */}
      {props.children}
    </button>
  );
};

// Button 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default Button;
