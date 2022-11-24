import React from "react";
import "./homeMainbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";

function HomeMainBar() {

  var questionsList = [
    {
      id: 1,
      votes: 10,
      noOfAnswers: 5,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["React", "JavaScript", "HTML"],
      userPosted: "John Doe",
      askedOn: "Jan 1, 2022",
    },
    {
      id: 2,
      votes: 10,
      noOfAnswers: 6,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["React", "CSS"],
      userPosted: "John Doe",
      askedOn: "Jan 1, 2022",
    },
    {
      id: 3,
      votes: 1,
      noOfAnswers: 3,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["JavaScript"],
      userPosted: "John Doe",
      askedOn: "Jan 1, 2022",
    },
    {
      id: 4,
      votes: 23,
      noOfAnswers: 7,
      questionTitle: "How to create a React app?",
      questionBody:
        "I am new to React and I want to create a React app. Can anyone help me?",
      questionTags: ["React"],
      userPosted: "John Doe",
      askedOn: "Jan 1, 2022",
    },
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

        <button onClick ={checkAuth}className="ask-btn">
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
