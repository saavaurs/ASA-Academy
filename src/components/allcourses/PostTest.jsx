import React, { useState } from "react";
import "./courses.css";

const PostTest = ({ questions = [], onClose }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[qIdx] = optIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
      else wrong++;
    });
    setScore({ correct, wrong });
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setScore({ correct: 0, wrong: 0 });
  };

  return (
    <div className="pretest-modal">
      <div className="pretest-content">
        <h2 className="pretest-title">Post Test</h2>
        <div className="pretest-scroll-area">
          {questions.map((q, idx) => (
            <div key={idx} className="pretest-question-block">
              <p className="pretest-label">PERTANYAAN {idx + 1}</p>
              <div className="pretest-question-text">{q.question}</div>
              <div className="pretest-options-grid">
                {q.options.map((opt, oidx) => {
                  const isSelected = answers[idx] === oidx;
                  const isCorrect = submitted && q.answer === oidx;
                  const isWrong = submitted && isSelected && oidx !== q.answer;
                  return (
                    <button
                      key={oidx}
                      className={`pretest-option-card${isSelected ? " selected" : ""}${isCorrect ? " correct" : ""}${isWrong ? " wrong" : ""}`}
                      onClick={() => handleSelect(idx, oidx)}
                      disabled={submitted}
                      tabIndex={0}
                      type="button"
                    >
                      <span className="pretest-option-letter">{String.fromCharCode(65 + oidx)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="pretest-actions sticky">
          {submitted && (
            <div className="pretest-score">
              <b>Skor:</b> {score.correct} benar, {score.wrong} salah
            </div>
          )}
          <button className="outline-btn pretest-btn" onClick={onClose} style={{marginRight:8}}>Tutup</button>
          <button className="outline-btn pretest-btn" onClick={handleReset} style={{marginRight:8}} disabled={!submitted && answers.every(a => a === null)}>
            Reset
          </button>
          <button
            className="outline-btn pretest-btn submit"
            onClick={handleSubmit}
            disabled={submitted || answers.includes(null)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTest;
