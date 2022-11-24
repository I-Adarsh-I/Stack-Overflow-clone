import React from 'react'
import "./askquestions.css";

const AskQuestions = () => {
  return (
    <div className='ask-questions'>
        <div className='ask-ques-container'>
            <h1>Ask a public Question</h1>
            <form>
                <div className="ask-form-container">
                    <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine your are asking question to another person</p>
                        <input type='text' name='questionTitle' id='ask-ques-title' placeholder='e.g. is there an R function for finding the index of an element in a vector?'/>
                    </label>
                    <label htmlFor='ask-ques-body'>
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your questions. </p>
                        <textarea id='ask-ques-body'/>
                    </label>
                    <label htmlFor='ask-ques-tags'>
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what your question is about.</p>
                        <input type='text' name='questionTags' id='ask-ques-tags' placeholder='e.g. (xml, typescript React)' />
                    </label>
                </div>
                <input type='submit' value='Review your question' className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestions
