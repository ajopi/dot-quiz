import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import QuizPage from "../pages/QuizPage/QuizPage";

const DefaultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="quiz-page" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DefaultRouter;
