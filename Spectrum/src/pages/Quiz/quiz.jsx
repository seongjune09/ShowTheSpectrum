import { useState } from 'react';
import './quiz.css';

// 퀴즈 데이터
const quizData = {
  상: [
    {
      question: "수소(H)의 스펙트럼에서 가장 강한 빛을 내는 색은?",
      options: ["빨강", "보라", "파랑", "초록"],
      answer: 0
    },
    {
      question: "헬륨(He)의 스펙트럼 선의 특징은?",
      options: ["노란색 선만 있다", "여러 색의 선이 있다", "빨간색 선만 있다", "파란색 선만 있다"],
      answer: 1
    },
    {
      question: "나트륨(Na)의 특징적인 스펙트럼 색은?",
      options: ["빨강", "노랑", "파랑", "초록"],
      answer: 1
    },
    {
      question: "네온(Ne) 사인의 색은?",
      options: ["빨강-오렌지", "파랑", "초록", "노랑"],
      answer: 0
    },
    {
      question: "수소의 발머 계열에서 가장 긴 파장은?",
      options: ["H-α (빨강)", "H-β (청록)", "H-γ (보라)", "H-δ (보라)"],
      answer: 0
    }
  ],
  중: [
    {
      question: "수소 스펙트럼의 발머 계열은 어느 영역에 있나?",
      options: ["가시광선", "적외선", "자외선", "X선"],
      answer: 0
    },
    {
      question: "리튬(Li)의 스펙트럼에서 가장 강한 선의 색은?",
      options: ["빨강", "노랑", "파랑", "초록"],
      answer: 0
    },
    {
      question: "칼륨(K)의 특징적인 스펙트럼 색은?",
      options: ["빨강", "보라", "파랑", "초록"],
      answer: 1
    },
    {
      question: "구리(Cu)를 불꽃 반응시키면 나타나는 색은?",
      options: ["빨강", "청록", "노랑", "보라"],
      answer: 1
    },
    {
      question: "칼슘(Ca)의 불꽃 반응 색은?",
      options: ["주황-빨강", "노랑", "초록", "파랑"],
      answer: 0
    }
  ],
  하: [
    {
      question: "1. 스펙트럼이란 무엇을 의미하는가?",
      options: ["빛의 속도를 나타낸 표", "온도를 측정하는 장치", "전류의 흐름을 측정한 그래프", " 빛이 파장에 따라 나뉜 모습"],
      answer: 3
    },
    {
      question: "2. 빛을 프리즘에 통과시키면 나타나는 연속적인 무지개색 줄무늬를 무엇이라고 하는가?",
      options: ["연속 스펙트럼", "선 스펙트럼", "흡수스펙트럼", "음영스펙트럼"],
      answer: 0
    },
    {
      question: "3. 원소마다 고유하게 나타나는 빛의 색(파장) 줄무늬는?",
      options: ["백색광", "연속 스펙트럼", "선 스펙트럼", "광자 스펙트럼"],
      answer: 2
    },
    {
      question: "4. 흡수 스펙트럼에서 어둡게 나타나는 부분은 무엇을 의미하는가?",
      options: ["빛의 강도가 강해진 부분", "특정 파장의 빛이 흡수된 부분", "전자가 방출된 부분", "온도가 감소한 부분"],
      answer: 1
    },
    {
      question: "5. 다음 중 스펙트럼 분석과의 직접적인 연관성이 가장 낮다고 볼 수도 있는 것은?",
      options: ["별에서 방출되는 빛을 이용해 별의 표면 온도와 원소 조성을 추정하는 과정", "다양한 물질이 특정 파장의 빛을 흡수하는 특성을 이용해 혼합물의 성분을 분석하는 과정",
        "특정 파장의 전자기파가 물질에 전달하는 에너지 차이를 관찰해 열을 발생시키는 현상 연구", "LED나 레이저와 같은 빛 관련 장치의 출력 파장을 확인하여 품질을 평가하는 과정"],
      answer: 2
    }
  ]
};

export default function Quiz() {
  const [difficulty, setDifficulty] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // 난이도 선택
  const selectDifficulty = (level) => {
    setDifficulty(level);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizFinished(false);
  };

  // 답안 선택
  const selectAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setShowResult(true);

    if (index === quizData[difficulty][currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  // 다음 문제
  const nextQuestion = () => {
    if (currentQuestion < quizData[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  // 재시작
  const restart = () => {
    setDifficulty(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizFinished(false);
  };

  // 난이도 선택 화면
  if (!difficulty) {
    return (
      <div className="quiz-container">
        <div className="difficulty-selection">
          <h1 className="quiz-title">스펙트럼 퀴즈</h1>
          <h1 className="quiz-title"><br></br></h1>
          <div className="difficulty-buttons">
          <button
              className="difficulty-btn hard"
              onClick={() => selectDifficulty('상')}
            >
              <img src="First.png" alt="상" />
              <div className="btn-text">상</div>
              <div className="btn-desc">심화 학습</div>
            </button>

            <button
              className="difficulty-btn medium"
              onClick={() => selectDifficulty('중')}
            >
              <img src="Second.png" alt="중" />
              <div className="btn-text">중</div>
              <div className="btn-desc">원소별 특징</div>
            </button>
            <button
              className="difficulty-btn easy"
              onClick={() => selectDifficulty('하')}
            >
              <img src="Third.png" alt="하" />
              <div className="btn-text">하</div>
              <div className="btn-desc">기초 개념</div>
            </button>

          </div>
        </div>
      </div>
    );
  }

  // 퀴즈 완료 화면
  if (quizFinished) {
    const percentage = (score / quizData[difficulty].length) * 100;
    return (
      <div className="quiz-container">
        <div className="result-screen">
          <h1 className="result-title">퀴즈 완료!</h1>
          <div className="result-score">
            <div className={`score-circle ${difficulty}`}>
              <span className="score-number">{score}</span>
              <span className="score-total">/ {quizData[difficulty].length}</span>
            </div>
          </div>
          <p className={`result-percentage ${difficulty}`}>{percentage.toFixed(0)}% 정답</p>
          <p className="result-message">
            {percentage === 100 ? "스펙트럼의 개념을 마스터하셨습니다!" :
             percentage >= 80 ? "정말 잘하셨습니다!" :
             percentage >= 60 ? "문제를 조금 더 꼼꼼히!" :
             "아쉽습니당 ㅠ.ㅠ"}
          </p>
          <div className="result-buttons">
            <button className={`ranking-btn ${difficulty}`} onClick={() => selectDifficulty(difficulty)}>
              랭킹 확인하러가기
            </button>
            <button className={`home-btn ${difficulty}`} onClick={restart}>
              난이도 선택으로
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 퀴즈 진행 화면
  const currentQ = quizData[difficulty][currentQuestion];

  // Kahoot 스타일 아이콘 및 색상
  const kahootColors = ['red', 'blue', 'yellow', 'green'];
  const kahootShapes = ['♂', '♄', '☉', '☾'];

  return (
    <div className="quiz-container kahoot-style">
      <div className="kahoot-header">
        <div className="quiz-info-bar">
          <span className="question-number">{currentQuestion + 1} / {quizData[difficulty].length}</span>
          <span className="difficulty-badge">난이도: {difficulty}</span>
        </div>
      </div>

      <div className="kahoot-question-section">
        <h2 className="kahoot-question">{currentQ.question}</h2>
      </div>

      <div className="kahoot-answers-grid">
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            className={`kahoot-answer-btn ${kahootColors[index]} ${
              selectedAnswer === index
                ? index === currentQ.answer
                  ? 'correct-answer'
                  : 'wrong-answer'
                : showResult && index === currentQ.answer
                  ? 'correct-answer'
                  : ''
            }`}
            onClick={() => selectAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            <div className="answer-shape">{kahootShapes[index]}</div>
            <div className="answer-text">{option}</div>
            {showResult && index === currentQ.answer && (
              <div className="answer-result-icon">✓</div>
            )}
            {selectedAnswer === index && index !== currentQ.answer && (
              <div className="answer-result-icon">✗</div>
            )}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="kahoot-result-overlay">
          <div className={`kahoot-result-popup ${selectedAnswer === currentQ.answer ? 'correct' : 'incorrect'}`}>
            <div className="result-icon">
              {selectedAnswer === currentQ.answer ? '✓' : '✗'}
            </div>
            <p className="result-message">
              {selectedAnswer === currentQ.answer ? '정답입니다!' : '틀렸습니다!'}
            </p>
            <button className="kahoot-next-btn" onClick={nextQuestion}>
              {currentQuestion < quizData[difficulty].length - 1 ? '다음 문제' : '결과 보기'}
            </button>
          </div>
        </div>
      )}

      <button className="kahoot-quit-btn" onClick={restart}>
        나가기
      </button>
    </div>
  );
}
