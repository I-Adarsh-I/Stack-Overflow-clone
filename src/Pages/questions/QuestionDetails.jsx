import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { Link, useParams } from "react-router-dom";
import Downicon from "../../resources/caret-down-solid.svg";
import Upicon from "../../resources/caret-up-solid.svg";
import "./questions.css";
import DisplayAnswer from "./DisplayAnswer";

const QuestionDetails = () => {
  const { id } = useParams();

  var questionsList = [
    {
      _id: "1",
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
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Johnny sins",
          answeredOn: "jan 5",
          userId: 2,
        },
      ],
    },
    {
      _id: "2",
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
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Johnny sins",
          answeredOn: "jan 5",
          userId: 2,
        },
      ],
    },
    {
      _id: "3",
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
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Johnny sins",
          answeredOn: "jan 5",
          userId: 2,
        },
      ],
    },
    {
      _id: "4",
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
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Johnny sins",
          answeredOn: "jan 5",
          userId: 2,
        },
      ],
    },
  ];
  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question votes">
                      <img src={Upicon} alt="upward-icon" width="18px" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={Downicon} alt="dowward-icon" width="18px" />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tags) => (
                          <p key={tags}>{tags}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button"> Share</button>
                          <button type="button"> Delete</button>
                        </div>
                        <div>
                          <p>asken on {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link "
                            style={{ color: "#0086dB" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {
                    question.noOfAnswers !==0 &&(
                        <section>
                            <h1>{question.noOfAnswers} Answers</h1>
                            <DisplayAnswer key={question._id} question={question}/>
                        </section>
                    )
                }
                <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form>
                        <textarea name="" cols="30" rows="10"></textarea><br/>
                        <input type='submit' className="post-ans-btn" value='Post Your Answer'/>
                    </form>
                    <p>Browse other question tagged</p>
                    {
                        question.questionTags.map((tag) =>(
                            <Link to ='/Tags' key = {tag} className='ans-tags'>{tag}</Link>
                        ))
                    } or
                    <Link to='/AskQuestions' style ={{textdecoration:'none', color:'#009dff' }}>ask your own question</Link>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
