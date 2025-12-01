import "./main.css";
import "./section.css";
import "./intro.css";
import "./feature.css";
import "./end.css";
import { useNavigate } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation";
import { handleLogin } from "../../api/LoginApi/Login";

export default function Home() {
    const navigate = useNavigate();

    // 임시 로그인 테스트용 (API 연결 전까지)
    const handleTestLogin = () => {
        navigate('/PeriodicTable');
    };

    return (
      <>
        <BackgroundAnimation />
        <main className = "Main-div">
          <img src = "Main-Logo.svg" className = "Main-Logo"></img>
          <h1 className="Main-Title">
            <span>보</span>
            <span>여</span>
            <span>줄</span>
            <span>게 </span>
            <span>스펙트럼 </span>
            <span>!</span>
          </h1>
            <button className = "Login-Btn" onClick={handleLogin}>
            <span>B</span>
            <span>S</span>

            <span className="M">M </span>
              계정으로 로그인
            </button>
          
            <button className = "Login-Btn" onClick={handleTestLogin} style={{marginTop: '20px'}}>
            테스트 로그인 (임시)
            </button>
          </main>



      {/* 간단한 기능 소개 */}

      <div className="info-section">
          <h2 className="info-title">
            <span>보</span>
            <span>여</span>
            <span>줄</span>
            <span>게 </span>
            <span>스펙트럼 </span>
            <span>! </span>
            <span>이란?</span>
            </h2>
          <p className="info-text">
            보여줄게 스펙트럼!은 화학 수업에서 다루는 원소들의 스펙트럼을
            쉽고 빠르게 확인할 수 있는 교육용 플랫폼입니다.
          </p>
          <p className="info-text">
            각 원소가 방출하는 고유한 빛의 파장을 시각화하여,
            학생들의 이해를 돕고 학습 효율을 높입니다.
          </p>
          <p className="info-text">
            학습 후에는 스펙트럼 퀴즈를 풀면서 개념을 정리하고, 
            랭킹시스템으로 친구들과 실력을 겨루며 성취감을 느낄 수 있습니다 !
          </p>
        </div>




      <section className = "section">

        <h1 className = "Introduction">보여줄게 스펙트럼을 소개합니다 !</h1>

        <div className="intro-container">
          <div className="intro-card">
            <img className="Spectrum-icon" src="Main-Logo.svg"></img>
            <h2 className="intro-title">118개 원소 스펙트럼</h2>
  
          </div>

          <div className="intro-card">
            <img className = "Quiz-icon" src="Quiz.svg"></img>
            <h2 className="intro-title">스펙트럼 퀴즈</h2>
  
          </div>

          <div className="intro-card">
            <img className = "Ranking-icon" src = "Ranking.png"></img>
            <h2 className="intro-title">학생들과의 랭킹 시스템</h2>

          </div>
        </div>



          {/* 기능 상세 소개 */}
          <div className="feature-container">
              <div className="feature-card">
                  <div className="card-container">
                    <img className="Table" src="Table.png" alt="Spectrum Icon"></img>
                    <h2 className="feature-title">118개의 모든 원소 스펙트럼</h2>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-subtitle">만들기 편거로운</h3>
                    <h2 className="feature-title">1,000만 개 이상의 요소</h2>
                    <p className="feature-description">
                      디지인에 필요한 사진, 아이콘, 영상, 오디오 등 모든 요소가 있어요.<br/>
                      직접 만들 필요 없이, 원하는 요소를 고르기만 하면 전문가 수준의 결과물을 만들 수 있어요.
                    </p>
                  </div>
              </div>

              <div className="feature-card">
                  <div className="card-container">
                    <img className="Quiz-icon1" src="Quiz.svg" alt="Quiz Icon"></img>
                    <h2 className="feature-title">인터랙티브 주기율표</h2>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-subtitle">시선을 사로잡는</h3>
                    <h2 className="feature-title">애니메이션 효과</h2>
                    <p className="feature-description">
                      복잡한 작업 없이 애니메이션 효과를 손쉽게 적용할 수 있어요.<br/>
                      클릭 한 번만으로 텍스트와 요소에 생동감을 더해보세요.
                    </p>
                  </div>
              </div>

              <div className="feature-card">
                  <div className="card-container">
                    <img className="Ranking-icon1" src="Ranking.png" alt="Ranking Icon"></img>
                    <h2 className="feature-title">학습 최적화</h2>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-subtitle">시선을 사로잡는</h3>
                    <h2 className="feature-title">애니메이션 효과</h2>
                    <p className="feature-description">
                      복잡한 작업 없이 애니메이션 효과를 손쉽게 적용할 수 있어요.<br/>
                      클릭 한 번만으로 텍스트와 요소에 생동감을 더해보세요.
                    </p>
                  </div>
              </div>
          </div>




        {/* 마무리 소개 */}
        <div className="cta-section">
          <h2 className="cta-title">지금 바로 시작하세요!</h2>
          <p className="cta-description">
            BSM 계정으로 로그인하고 원소의 세계를 탐험해보세요
          </p>
        </div>
      

        <div className="Introduction1">

        </div>

      
     



        </section>

      </>
    );
}
