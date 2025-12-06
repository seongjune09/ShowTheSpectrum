import { useState, useEffect } from 'react';
import './ranking.css';

export default function Ranking() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // TODO: 실제 API에서 랭킹 데이터를 가져오는 로직으로 교체
    // 현재는 목(mock) 데이터 사용
    const mockData = [
      { name: "김철수", score: 15 },
      { name: "이영희", score: 12 },
      { name: "박민수", score: 15 },
      { name: "정지훈", score: 10 },
      { name: "최유리", score: 12 },
      { name: "강민호", score: 8 },
      { name: "윤서연", score: 7 },
      { name: "임동현", score: 6 },
    ];

    // 정렬: 점수 내림차순 -> 같은 점수면 이름 가나다순
    const sorted = mockData.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.name.localeCompare(b.name, 'ko-KR');
    });

    setRankings(sorted);
  }, []);

  // 1-3등 (시상대)
  const topThree = rankings.slice(0, 3);

  return (
    <div className="ranking-container">
      <h1 className="ranking-title">랭킹</h1>

      {/* 시상대 (1-3등) */}
      {topThree.length > 0 && (
        <div className="podium-container">
          {/* 2등 */}
          {topThree[1] && (
            <div className="podium-item second">
              <div className="rank-badge silver">2</div>
              <div className="user-info">
                <div className="user-name">{topThree[1].name}</div>
                <div className="user-score">{topThree[1].score}점</div>
              </div>
              <div className="podium-base second-base">
                <img src="Second.png" alt="2등 이미지" className="First" />
                2nd
              </div>
            </div>
          )}

          {/* 1등 */}
          {topThree[0] && (
            <div className="podium-item first">
              <div className="crown">👑</div>
              <div className="rank-badge gold">1</div>
              <div className="user-info">
                <div className="user-name">{topThree[0].name}</div>
                <div className="user-score">{topThree[0].score}점</div>
              </div>
              <div className="podium-base first-base">
                <img src="First.png" alt="1등 이미지" className="Second" />
                1st
              </div>
            </div>
          )}

          {/* 3등 */}
          {topThree[2] && (
            <div className="podium-item third">
              <div className="rank-badge bronze">3</div>
              <div className="user-info">
                <div className="user-name">{topThree[2].name}</div>
                <div className="user-score">{topThree[2].score}점</div>
              </div>
              <div className="podium-base third-base">
                <img src="Third.png" alt="3등 이미지" className="Third" />
                3rd
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
