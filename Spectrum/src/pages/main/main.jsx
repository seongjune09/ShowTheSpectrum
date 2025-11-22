import "./main.css";
import { useNavigate } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation";

export default function Home() {
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('https://spectrum.blleaf.page/api/login', {
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
        navigate('/dashboard');
    };

    return (
      <div>
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

      <section>
        <h1 className = "Introduction">수업시간에 자주 나오는 원소들의 스펙트럼을 한 번에 !</h1>
      </section>

      <section className="feature-section">

          <div className="feature-item">
            <div className="feature-icon">🔬</div>
            <h2 className="feature-title">주기율표 인터랙티브</h2>
            <p className="feature-description">
              주기율표에서 원소를 클릭하면 해당 원소의 고유한 스펙트럼을 즉시 확인할 수 있습니다.
              각 원소마다 다른 색상의 스펙트럼 선을 시각적으로 보여줍니다.
            </p>
          </div>
{/* 
          <div className="feature-item">
            <h2 className="feature-title">원자 구조 시각화</h2>
            <p className="feature-description">
              원자 껍질과 원자가 전자를 직관적으로 표현하여 원소의 전자 배치를
              쉽게 이해할 수 있습니다. 각 껍질별 전자 개수와 원자가 전자를 한눈에 파악하세요.
            </p>
          </div>

          <div className="feature-item">
            <h2 className="feature-title">스펙트럼 퀴즈</h2>
            <p className="feature-description">
              스펙트럼을 보고 원소를 맞추는 재미있는 퀴즈로 학습 효과를 높이세요.
              다양한 난이도의 문제로 실력을 테스트하고 향상시킬 수 있습니다.
            </p>
          </div>

          <div className="feature-item">
            <h2 className="feature-title">랭킹 시스템</h2>
            <p className="feature-description">
              퀴즈 점수를 기반으로 한 랭킹 시스템으로 다른 학습자들과 경쟁하세요.
              실시간 순위 확인과 함께 학습 동기를 부여받을 수 있습니다.
            </p>
          </div> */}
      </section>

      </div>
    );
}
