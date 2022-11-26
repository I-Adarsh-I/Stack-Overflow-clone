import React from 'react'
import QuestionDetails from './QuestionDetails'

const DisplayAnswer = ({question}) => {
  return (
    <div>
        {
            question.answer.map((ans) => (
                <p key={ans}>{ans.answerBody}</p>
            ))
        }
    </div>
  )
}

export default DisplayAnswer
