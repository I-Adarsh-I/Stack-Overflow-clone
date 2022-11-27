import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { Link } from "react-router-dom";

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p key={ans}>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answered on {ans.answeredOn}</p>
              <Link
                to={`/User/${question.userId}`}
                className="user-link "
                style={{ color: "#0086dB" }}
              >
                <Avatar backgroundColor="green" px="8px" py="13px" borderRadius="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
