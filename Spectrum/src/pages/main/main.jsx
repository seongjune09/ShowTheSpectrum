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
      

        <div className="Introduction1">

        </div>

      
     



        </section>

      </>
    );
}
