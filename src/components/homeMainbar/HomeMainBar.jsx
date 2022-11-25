import React from "react";
import "./homeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";

function HomeMainBar() {

  var questionsList = [
    {
      _id: 1,
      upVotes: 10,
      downVotes: 5,
      noOfAnswers: 5,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["React", "JavaScript", "HTML"],
      userPosted: "John Doe",
      userId: 1,
      askedOn: "Jan 1, 2022",
      answer: [{
        answerBody:"Answer",
        userAnswered:'Johnny sins',
        answeredOn:"jan 5",
        userId: 2,
      }]
    },
    {
      _id: 2,
      upVotes: 10,
      downVotes: 5,
      noOfAnswers: 5,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["React", "JavaScript", "HTML"],
      userPosted: "John Doe",
      userId: 1,
      askedOn: "Jan 1, 2022",
      answer: [{
        answerBody:"Answer",
        userAnswered:'Johnny sins',
        answeredOn:"jan 5",
        userId: 2,
      }]
    },
    {
      _id: 3,
      upVotes: 10,
      downVotes: 5,
      noOfAnswers: 5,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["React", "JavaScript", "HTML"],
      userPosted: "John Doe",
      userId: 1,
      askedOn: "Jan 1, 2022",
      answer: [{
        answerBody:"Answer",
        userAnswered:'Johnny sins',
        answeredOn:"jan 5",
        userId: 2,
      }]
    },
    {
      _id: 4,
      upVotes: 10,
      downVotes: 5,
      noOfAnswers: 5,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["React", "JavaScript", "HTML"],
      userPosted: "John Doe",
      userId: 1,
      askedOn: "Jan 1, 2022",
      answer: [{
        answerBody:"Answer",
        userAnswered:'Johnny sins',
        answeredOn:"jan 5",
        userId: 2,
      }]
    }
  ];

  const user = 1
  const navigate = useNavigate();
  
  const checkAuth =() => {
    if(user ===  null){
      alert("please logi or sign up first!")
      navigate('/Auth')
    }else{
      navigate('./AskQuestions')
    }
  }

  const location = useLocation();

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button onClick ={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} Questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
}

export default HomeMainBar;
