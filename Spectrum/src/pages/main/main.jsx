import "./main.css";
import BackgroundAnimation from "../../components/BackgroundAnimation"; 

export default function Home() {
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
          <button className = "Login-Btn">
          <span>B</span>
          <span>S</span>
          <span className="M">M </span>
          계정으로 로그인
          </button>
        </main>

      <section>
        <h1 className = "Introduction">수업시간에 자주 나오는 원소들의 스펙트럼을 한 번에 !</h1>
      </section>

      </div>
    );
}
