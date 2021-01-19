import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function CreateFlashcard() {
  const [catagory, setCatagory] = useState('');
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleCatagoryChange = (e) => {
    setCatagory(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmission = () => {
    if (catagory.length < 3 || subject.length < 3 || question.length < 5 || answer.length < 10) {
      console.log('FLASHCARD COULD NOT POST BECAUSE A TEXT FIELD WAS TOO SHORT');
      return;
    }
    axios.post('http://localhost:3001/flashcards/list',
      {
        catagory,
        subject,
        question,
        answer,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flashcard-form-container" noValidate autoComplete="off">
      <form className="flashcard-form">
        <TextField
          className="flashcard-form-catagory"
          required
          id="catagory"
          label="catagory"
          value={catagory}
          onChange={handleCatagoryChange}
          multiline
          variant="outlined"
        />
        <TextField
          className="flashcard-form-subject"
          required
          id="subject"
          label="subject"
          value={subject}
          onChange={handleSubjectChange}
          multiline
          variant="outlined"
        />
        <Button
          className="flashcard-form-btn"
          onClick={handleSubmission}
          variant="contained"
        >
          Add flashcard
        </Button>
        <TextField
          className="flashcard-form-question"
          required
          fullWidth
          id="question"
          label="question"
          value={question}
          onChange={handleQuestionChange}
          multiline
          variant="outlined"
        />
        <TextField
          className="flashcard-form-answer"
          required
          fullWidth
          id="answer"
          label="answer"
          value={answer}
          onChange={handleAnswerChange}
          multiline
          variant="outlined"
        />
      </form>
    </div>
  );
}
