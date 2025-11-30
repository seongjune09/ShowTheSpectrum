import "./main.css";
import { useNavigate } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation";

export default function Home() {
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://121.146.223.228:8025/api/login', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('로그인 응답:', data);

            if (data.authURL) {
                window.location.href = data.authURL;
            } else if (data.message) {
                alert(data.message);
            } else {
                alert('로그인 URL을 받을 수 없습니다.');
            }
        } catch (error) {
            console.error('로그인 오류:', error);
            alert('로그인 중 오류가 발생했습니다: ' + error.message);
        }
    };

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

      <section className = "section">

        <h1 className = "Introduction">수업시간에 자주 나오는 원소들의 스펙트럼을 한 번에 !</h1>

        <div className="feature-container">
          <div className="feature-card">
            <img className="Spectrum-icon" src="Main-Logo.svg"></img>
            <h2 className="feature-title">103개 원소 스펙트럼</h2>
            <p className="feature-description">
              주기율표의 모든 원소들의 스펙트럼을 확인하고 학습할 수 있습니다.
              각 원소의 고유한 빛의 파장을 시각적으로 탐구하세요.
            </p>
          </div>

          <div className="feature-card">
            <img className = "Quiz-icon" src="Quiz.svg"></img>
            <h2 className="feature-title">인터랙티브 주기율표</h2>
            <p className="feature-description">
              클릭 한 번으로 원소의 상세 정보와 스펙트럼 데이터를 확인하세요.
              직관적인 UI로 쉽고 빠르게 원하는 정보를 찾을 수 있습니다.
            </p>
          </div>

          <div className="feature-card">
            <img className = "Ranking-icon" src = "Ranking.png"></img>
            <h2 className="feature-title">학습 최적화</h2>
            <p className="feature-description">
              수업시간에 자주 다루는 원소들을 중심으로 구성되어
              효율적인 학습이 가능합니다.
            </p>
          </div>
        </div>

        <div className="info-section">
          <h2 className="info-title">Spectrum이란?</h2>
          <p className="info-text">
            Spectrum은 화학 수업에서 다루는 원소들의 스펙트럼을
            쉽고 빠르게 확인할 수 있는 교육용 플랫폼입니다.
          </p>
          <p className="info-text">
            각 원소가 방출하는 고유한 빛의 파장을 시각화하여,
            학생들의 이해를 돕고 학습 효율을 높입니다.
          </p>
        </div>

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
