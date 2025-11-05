import "./main.css";
import BackgroundAnimation from "../../components/BackgroundAnimation"; 

export default function Home() {
    return (
      <main>
        <BackgroundAnimation />
        
        <div className = "Main-div">
          <img src = "Main-Logo.svg" className = "Main-Logo"></img>
          <h1 className="Main-Title">
            <span>보</span>
            <span>여</span>
            <span>줄</span>
            <span>게 </span>
            <span>스펙트럼 </span>
            <span>!</span>
          </h1>
          <button className = "Login-Btn">BSSM 계정으로 로그인</button>
        </div>
        
      </main>
    );
}