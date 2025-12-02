import "./main.css";
import "./section.css";
import "./intro.css";
import "./feature.css";
import "./end.css";
import "./footer.css";
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
                    <h2 className="feature-title">카드형태의 편리한 이해</h2>
                  </div>
                  <div className="feature-content">
                    <h2 className="feature-title">118개 원소, 자세한 정보!</h2>
                    <p className="feature-description">
                      주기율표에서 알고싶은 원소를 클릭하여 해당 원소의 자세한 정보를 <br/>한 눈에 확인할 수 있습니다.<br/>
                      흡수 스펙트럼과, 방출 스펙트럼 둘 다 확인할 수 있으며 복잡한 정보를 카드 형태로 정리하여 쉽게 이해할 수 있습니다.
                    </p>
                  </div>
              </div>

              <div className="feature-card">
                  <div className="card-container">
                    <img className="Quiz-icon1" src="Quiz.svg" alt="Quiz Icon"></img>
                    <h2 className="feature-title">재미있게 복습하는 퀴즈</h2>
                  </div>
                  <div className="feature-content">
                    <h2 className="feature-title"></h2>
                    <p className="feature-description"> 다양한 원소들의 스펙트럼 퀴즈를 풀어보며 재미있게 복습할 수 있고<br/>
                    
                    
                    </p>
                  </div>
              </div>

              <div className="feature-card">
                  <div className="card-container">
                    <img className="Ranking-icon1" src="Ranking.png" alt="Ranking Icon"></img>
                    <h2 className="feature-title">수소 매달의 주인공은 누구?</h2>
                  </div>
                  <div className="feature-content">
                    <h2 className="feature-title">누가 1등? 친구들과 랭킹 대결!</h2>
                    <p className="feature-description">
                    스펙트럼 퀴즈를 풀고 친구들과 경쟁하여 수소 매달의 주인공이 되어보세요 !<br/>
                    수소매달의 주인에게는 소소한 상품이 있을지도.. <br/> - 자세한건 고객센터에 메세지로 문의남겨주세요! -
                      
                    </p>
                  </div>
              </div>
          </div>




        {/* 마무리 소개 */}
        <div className="end-section">
          <h2 className="end-title">지금 바로 시작하세요!</h2>
          <p className="end-description"> BSM 계정으로 간편하게 로그인하고 스펙트럼 퀴즈를 풀어봅시다 !</p>
          <button className = "Login-Btn1" onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => 1200);
          }}>
            <span>B</span>
            <span>S</span>
            <span className="M">M </span>로그인하러가기</button>
        </div>


      

        <div className="Introduction1">

        </div>

      
     



        </section>

        <footer className="footer">
          <div className ="title-container">
            <p className = "title">(주)소마</p>
            <p>대표 : 박성준 ㅣ 사업자등록번호 : 1004-12-12345 ㅣ 이메일 : 25_27@bssm.hs.kr</p>
            <p>주소 : 부산광역시 강서구 가락대로 1393 ㅣ 우편번호 : 46708 ㅣ 고객센터 : 010-  </p> 
            <a href ="https://studio.youtube.com/channel/UCYoJiW-eDl2jmbxhiKeInPg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" ><img className = "ytube-icon" src="ytube.svg" /></a>
            <a href = "https://github.com/seongjune09/show-the-Spectrum-" ><img className = "github-icon" src = "github.svg"/></a>
          </div>
        </footer>

      </>
    );
}
