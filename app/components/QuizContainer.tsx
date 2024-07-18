'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Answer, Question } from '@/app/types';
import { fetchQuestions } from '@/app/utils/api';
import QuizResults from './QuizResults';
import QuizInfo from './QuizInfo';
import QuestionBox from './ui/Question';
import AnswersBox from './ui/Answers';
import CardHeader from './ui/CardHeader';
import CardContainer from './ui/CardContainer';

import alertIcon from '../../public/images/icons/alert.svg';



export default function QuizContainer() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isAnswerable, setIsAnswerable] = useState<boolean>(false);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  useEffect(() => {
      fetchQuestions().then(r=>{
        setQuestions(r);
      })
  }, []);

  useEffect(() => {
    if (quizStarted && questions.length > 0 && currentQuestionIndex < questions.length) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === 1) {
            clearInterval(timer);
            nextQuestion();
            return 30;
          }
          if (prevTime === 20) {
            setIsAnswerable(true);
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex, questions, quizStarted]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(30);
  };

  const nextQuestion = (selectedAnswer: string | null = null, index:number | null=null) => {
    if (selectedAnswer) {
      setAnswers([...answers, { question: questions[currentQuestionIndex].question, answer: selectedAnswer, selectedAnswerItem:index  }]);
    } else {
      setAnswers([...answers, { question: questions[currentQuestionIndex].question, answer: 'No Answer', selectedAnswerItem:"-" }]);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
      setIsAnswerable(false);
    } else {
      setQuizEnded(true);
    }
  };

  const handleAnswer = (answer: string, index:number) => {
    console.log("seçilen cevap::",index);
    if (isAnswerable) {
      nextQuestion(answer, index);
    }
  };

  if (questions.length === 0) {
    return <div className='text-center py-4 px-6 rounded-xl bg-blue-50 border-[1px] border-blue-100'><p className='text-blue-800 text-base font-medium'>Quiz is being prepared...</p></div>;
  }

  if (!quizStarted) {
    return <QuizInfo onClick={startQuiz}/>
  }

  if (quizEnded) {
    return <QuizResults answers={answers} />;
  }

  return (
    <CardContainer>
      <CardHeader>
        <h2 className="text-2xl text-blue-900 font-semibold">Question {currentQuestionIndex + 1}</h2>
      </CardHeader>
      <QuestionBox question={questions[currentQuestionIndex].question}/>
      <AnswersBox 
        questions={questions[currentQuestionIndex].options} 
        onAnswerSelect={handleAnswer}
        isAnswerable={isAnswerable} 
      />
      <div className="mt-4 py-4 px-6 border-t-[1px] border-t-blue-100 flex flex-col-reverse gap-y-3 md:flex-row-reverse md:items-center md:justify-between">
        <p className="text-base">Time Left: <span className='font-bold text-blue-800'>{timeLeft}</span> seconds</p>
        {!isAnswerable 
            ?
                <p className='inline-flex items-center gap-x-2'>
                    <Image src={alertIcon} width={20} height={20} alt="alert icon"/> To answer:<span className='font-bold text-blue-800'>{10 - (30 - timeLeft)}</span> seconds left
                </p> 
            :
            <p>
                You can answer the questions
            </p> 
        }
      </div>
    </CardContainer>
  );
}
