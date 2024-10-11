import React, { useEffect, useState } from "react";

const QuizPage = () => {
  // Initial time in seconds (1 hour)
  const initialTime: number = Math.round(42.426 * 42.426);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log("Countdown complete!");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  return (
    <div className="quiz-page">
      <div className="quiz-page__timer">
        <p>{`${hours}h ${minutes}m ${seconds}s`}</p>
      </div>
      <div className="quiz-page__container-list-question">
        <div className="quiz-page__list-quiz">
          <ol type="1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ol>
        </div>

        <div className="quiz-page__question">ini question section</div>
      </div>
    </div>
  );
};

export default QuizPage;
