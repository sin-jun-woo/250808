// /Users/shin-junwoo/슈퍼코딩/코드 설명/250808/mission/src/App.js

// 1. React에서 상태 관리를 위한 `useState` 훅을 가져옵니다.
import { useState } from "react";
// 2. 이 컴포넌트에 적용될 CSS 파일을 가져옵니다.
import "./App.css";
// 3. 새로운 지출 항목을 추가하는 폼을 감싸는 컨테이너 컴포넌트를 가져옵니다.
import NewPayment from "./components/PaymentForm/NewPayment";
// 4. 지출 목록을 표시하는 컴포넌트를 가져옵니다.
import Expenses from "./components/Payments/Expenses";

// App: 애플리케이션의 최상위(루트) 컴포넌트입니다.
function App() {
  // 5. `useState`를 사용하여 지출 목록(expenses)을 상태로 관리합니다.
  //    `expenses`는 현재 지출 목록 배열이고, `setExpenses`는 이 목록을 업데이트하는 함수입니다.
  //    컴포넌트가 처음 렌더링될 때 사용할 초기 지출 목록 데이터를 배열로 전달합니다.
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2022, 3, 14), // 월(month)은 0부터 시작합니다 (0: 1월, 3: 4월).
    },
    {
      id: "e2",
      title: "물티슈",
      amount: 23.11,
      date: new Date(2023, 8, 22),
    },
    {
      id: "e3",
      title: "모니터",
      amount: 33.33,
      date: new Date(2021, 10, 22),
    },
    {
      // 🚨 문제점 1: 아래 항목과 id가 'e4'로 중복됩니다.
      // React에서 목록을 렌더링할 때 key로 사용되는 id는 고유해야 합니다.
      id: "e4",
      title: "의자",
      amount: 63,
      date: new Date(2022, 1, 31),
    },
    {
      id: "e4",
      title: "의자",
      amount: 98,
      date: new Date(2021, 6, 1),
    },
  ]);

  // 6. `PaymentForm` 자식 컴포넌트로부터 새로운 지출 데이터를 받아 `expenses` 상태를 업데이트하는 함수입니다.
  //    이 함수는 자식 컴포넌트에 prop으로 전달됩니다 (상태 끌어올리기 패턴).
  const getPaymentFormData = (data) => {
    // 🚨 문제점 2: 기존 지출 목록을 덮어쓰고 새 항목 하나만 있는 배열로 교체합니다.
    // 기존 목록에 새 항목을 '추가'하려면 이전 상태를 기반으로 업데이트해야 합니다.
    setExpenses([
      {
        // 🚨 문제점 3: Math.random()은 고유성을 보장하지 않으므로 key로 사용하기에 부적합합니다.
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
      },
    ]);
  };

  // 7. 이 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // React.Fragment(<></>)를 사용하여 여러 컴포넌트를 감쌉니다.
    <>
      {/* 8. NewPayment 컴포넌트를 렌더링하고,
          새로운 지출 데이터를 부모(App)로 전달할 수 있도록 `getPaymentFormData` 함수를 prop으로 넘겨줍니다. */}
      <NewPayment getPaymentFormData={getPaymentFormData} />
      {/* 9. Expenses 컴포넌트를 렌더링하고,
          화면에 표시할 지출 목록 데이터(`expenses` 상태)를 `items`라는 prop으로 넘겨줍니다. */}
      <Expenses items={expenses} />
    </>
  );
}

// 10. App 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default App;
