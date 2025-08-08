// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/components/UI/Card.js

// React 라이브러리를 가져옵니다. JSX를 사용하기 위해 필수적입니다.
import React from "react";

// 이 컴포넌트에 적용될 스타일이 정의된 CSS 파일을 가져옵니다.
import "./Card.css";

/**
 * Card 컴포넌트: 다른 컴포넌트나 JSX 요소를 감싸는 '래퍼(Wrapper)' 컴포넌트입니다.
 * 일관된 스타일(예: 그림자, 둥근 모서리, 배경색 등)을 적용하는 컨테이너 역할을 합니다.
 * @param {object} props - 부모 컴포넌트로부터 전달받는 속성들
 * @param {React.ReactNode} props.children - Card 컴포넌트 태그 사이에 있는 모든 자식 요소들
 * @param {string} props.className - 부모 컴포넌트에서 추가로 전달하는 CSS 클래스 이름
 * @returns {JSX.Element} 스타일이 적용된 div 요소
 */
const Card = (props) => {
  // 'card'라는 기본 CSS 클래스와 부모로부터 받은 추가 클래스(props.className)를 결합합니다.
  // 이렇게 하면 Card 컴포넌트를 사용하면서도 특정 상황에 맞는 추가 스타일을 쉽게 적용할 수 있습니다.
  // 예: <Card className="expenses-list"> -> 최종 클래스는 "card expenses-list"가 됩니다.
  const classes = "card " + props.className;

  // div 요소를 반환합니다.
  // className에는 위에서 조합한 클래스 문자열을 적용합니다.
  // {props.children}은 React의 특별한 prop으로, 이 컴포넌트를 사용할 때
  // <Card> 와 </Card> 태그 사이에 오는 모든 내용을 그대로 렌더링해줍니다.
  return <div className={classes}>{props.children}</div>;
};

// Card 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default Card;
