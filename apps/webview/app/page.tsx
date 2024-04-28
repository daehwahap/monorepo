"use client";

import React from "react";

const MainPage = () => {
  return (
    <div>
      <div style={{ height: 100 }} />
      MainPage
      <button
        style={{ padding: 32 }}
        onClick={() => {
          console.log("aa");
        }}
      >
        버튼 브릿지 테스트용
      </button>
      <div style={{ height: 100, background: "red" }} />
    </div>
  );
};

export default MainPage;
