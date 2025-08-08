// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/src/App.js

// React에서 상태 관리를 위한 useState 훅을 가져옵니다.
import { useState } from "react";
// 이 컴포넌트에 적용될 CSS 파일을 가져옵니다.
import "./App.css";
// 지출 항목을 추가하는 폼 컴포넌트를 가져옵니다.
import PaymentForm from "./components/PaymentForm/PaymentForm";
// 지출 항목 목록을 표시하는 컴포넌트를 가져옵니다.
import Expenses from "./components/Payments/Expenses";

function App() {
  // 'expenses'라는 상태 변수와 이를 업데이트하는 'setExpenses' 함수를 선언합니다.
  // useState를 사용하여 초기 지출 목록 데이터로 상태를 초기화합니다.
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2022, 3, 14), // JavaScript에서 월은 0부터 시작합니다 (3은 4월).
    },
    {
      id: "e2",
      title: "물티슈",
      amount: 234.11,
      date: new Date(2023, 8, 22), // 8은 9월
    },
    {
      id: "e3",
      title: "모니터",
      amount: 3331.33,
      date: new Date(2021, 10, 22), // 10은 11월
    },
    // 🚨 문제점 1: 아래 두 항목은 id가 'e4'로 중복됩니다.
    // React에서 목록을 렌더링할 때 key로 사용되는 id는 고유해야 합니다.
    {
      id: "e4",
      title: "의자",
      amount: 298,
      date: new Date(2022, 1, 31), // 1은 2월
    },
    {
      id: "e4", // 🚨 중복된 id
      title: "의자",
      amount: 298,
      date: new Date(2021, 6, 1), // 6은 7월
    },
  ]);

  // PaymentForm 컴포넌트에서 새로운 지출 데이터를 받아 처리하는 함수입니다.
  // 이 함수는 자식 컴포넌트(PaymentForm)에서 부모 컴포넌트(App)로 데이터를 전달하기 위해 props로 넘겨집니다.
  const getPaymentFormData = (data) => {
    // 🚨 문제점 2: setExpenses가 새 항목 하나만 담긴 배열로 기존 배열을 완전히 교체합니다.
    // 이렇게 하면 폼을 제출할 때마다 이전 지출 내역이 모두 사라지는 버그가 발생합니다.
    setExpenses([
      {
        // 🚨 문제점 3: Math.random()은 고유성을 보장하지 않으므로 key로 사용하기에 부적합합니다.
        // 렌더링 시 예기치 않은 동작을 유발할 수 있습니다.
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
      },
    ]);
  };

  // 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // React Fragment(<>)를 사용하여 여러 요소를 그룹화합니다.
    <>
      {/* 지출 추가 폼 컴포넌트 */}
      {/* getPaymentFormData 함수를 props로 전달하여 자식 컴포넌트가 호출할 수 있도록 합니다. */}
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      {/* 지출 목록 표시 컴포넌트 */}
      {/* 현재 expenses 상태를 'items'라는 prop으로 전달합니다. */}
      <Expenses items={expenses} />
    </>
  );
}

// App 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
export default App;
