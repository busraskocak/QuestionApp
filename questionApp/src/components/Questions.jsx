import React, { useEffect, useState } from 'react';
import questions from '../../questions.js';
import Results from './Results.jsx';

function Questions() {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [options, setOptions] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswer , setUserAnswer] = useState ([]);
  const question = questions[index];

  useEffect(() => {
    setOptions(false);
    const countDown = timer > 0 && setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    if (timer <= 20) {
      setOptions(true);
    }

    if (timer === 0) {
      nextQuestion();
    }

    return () => clearInterval(countDown);
  }, [timer, index]);

  const handleAnswer = () => {
    const isCorrect = selectedOption === question.answer;
  
    setUserAnswer(prevUserAnswer => [
      ...prevUserAnswer,
      { questionId: question.id, answer: selectedOption, isCorrect }
    ]);
  
    if (isCorrect) {
      setCorrectAnswer(prev => prev + 1);
    } else {
      setWrongAnswer(prev => prev + 1);
    }
  
    setSelectedOption(null);
  };
  

  const nextQuestion = () => {
    handleAnswer();
    if (index < questions.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
      setTimer(30);
      setOptions(false);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return <Results correct= {correctAnswer} wrong = {wrongAnswer} userAnswer = {userAnswer} />;
  }

  return (
    <div>
      <div className='questions'>
        <p className='timer'>{timer}</p>
        <img src={`/img/${question.media}`} alt="" width= '300' />
        <h2>{index + 1}. {question.question}</h2>
        {options && (
          <div className='options'>
            {question.options.map((option, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedOption(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </div>
            ))}

            
          </div>
        )}
        <button onClick={nextQuestion}>Next</button>
       
      </div>
    </div>
  );
}

export default Questions;
