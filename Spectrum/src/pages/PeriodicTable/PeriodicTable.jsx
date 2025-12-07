import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PeriodicTable.css";
import "../main/footer.css";

export default function PeriodicTable() {
    const [selectedElement, setSelectedElement] = useState(null);
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // 테스트 모드인 경우 로그인 확인 건너뛰기
        const isTestMode = searchParams.get('test') === 'true';

        if (isTestMode) {
            console.log('테스트 모드: 로그인 확인 건너뛰기');
            setIsAuthenticated(true);
            setIsLoading(false);
            return;
        }

        // 페이지 로드 시 로그인 여부 확인
        const checkAuth = async () => {
            try {
                const response = await fetch('https://spectrum.blleaf.page/api/user', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('주기율표 페이지 세션 확인:', data);

                    if (data.id && data.name) {
                        // 로그인되어 있음
                        setIsAuthenticated(true);
                    } else {
                        // 로그인되지 않음 - 메인 페이지로 리다이렉트
                        console.log('로그인되지 않음, 메인 페이지로 이동');
                        navigate('/');
                    }
                } else {
                    // API 호출 실패 - 메인 페이지로 리다이렉트
                    console.log('인증 실패, 메인 페이지로 이동');
                    navigate('/');
                }
            } catch (error) {
                console.error('인증 확인 오류:', error);
                // 오류 발생 시 메인 페이지로 리다이렉트
                navigate('/');
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [navigate, searchParams]);

    const handleQuizClick = () => {
        navigate('/quiz')
    }

    const handleRankingClick = () => {
        navigate('/ranking')
    }

    const elements = [
        // Period 1
        { number: 1, symbol: 'H', name: 'Hydrogen', koreanName: '수소', category: 'nonmetal', row: 1, col: 1, spectrum: '/spectrum/1.svg' },
        { number: 2, symbol: 'He', name: 'Helium', koreanName: '헬륨', category: 'noble-gas', row: 1, col: 18, spectrum: 'spectrum/2.svg' },

        // Period 2
        { number: 3, symbol: 'Li', name: 'Lithium', koreanName: '리튬', category: 'alkali-metal', row: 2, col: 1, spectrum: 'spectrum/3.svg' },
        { number: 4, symbol: 'Be', name: 'Beryllium', koreanName: '베릴륨', category: 'alkaline-earth', row: 2, col: 2, spectrum: 'spectrum/4.svg' },
        { number: 5, symbol: 'B', name: 'Boron', koreanName: '붕소', category: 'metalloid', row: 2, col: 13, spectrum: 'spectrum/5.svg' },
        { number: 6, symbol: 'C', name: 'Carbon', koreanName: '탄소', category: 'nonmetal', row: 2, col: 14, spectrum: 'spectrum/6.svg' },
        { number: 7, symbol: 'N', name: 'Nitrogen', koreanName: '질소', category: 'nonmetal', row: 2, col: 15, spectrum: 'spectrum/7.svg' },
        { number: 8, symbol: 'O', name: 'Oxygen', koreanName: '산소', category: 'nonmetal', row: 2, col: 16, spectrum: 'spectrum/8.svg' },
        { number: 9, symbol: 'F', name: 'Fluorine', koreanName: '플루오린', category: 'halogen', row: 2, col: 17, spectrum: 'spectrum/9.svg' },
        { number: 10, symbol: 'Ne', name: 'Neon', koreanName: '네온', category: 'noble-gas', row: 2, col: 18, spectrum: 'spectrum/10.svg' },

        // Period 3
        { number: 11, symbol: 'Na', name: 'Sodium', koreanName: '나트륨', category: 'alkali-metal', row: 3, col: 1, spectrum: 'spectrum/11.svg' },
        { number: 12, symbol: 'Mg', name: 'Magnesium', koreanName: '마그네슘', category: 'alkaline-earth', row: 3, col: 2, spectrum: 'spectrum/12.svg' },
        { number: 13, symbol: 'Al', name: 'Aluminum', koreanName: '알루미늄', category: 'post-transition', row: 3, col: 13, spectrum: 'spectrum/13.svg' },
        { number: 14, symbol: 'Si', name: 'Silicon', koreanName: '규소', category: 'metalloid', row: 3, col: 14, spectrum: 'spectrum/14.svg' },
        { number: 15, symbol: 'P', name: 'Phosphorus', koreanName: '인', category: 'nonmetal', row: 3, col: 15, spectrum: 'spectrum/15.svg' },
        { number: 16, symbol: 'S', name: 'Sulfur', koreanName: '황', category: 'nonmetal', row: 3, col: 16, spectrum: 'spectrum/16.svg' },
        { number: 17, symbol: 'Cl', name: 'Chlorine', koreanName: '염소', category: 'halogen', row: 3, col: 17, spectrum: 'spectrum/17.svg' },
        { number: 18, symbol: 'Ar', name: 'Argon', koreanName: '아르곤', category: 'noble-gas', row: 3, col: 18, spectrum: 'spectrum/18.svg' },

        // Period 4
        { number: 19, symbol: 'K', name: 'Potassium', koreanName: '칼륨', category: 'alkali-metal', row: 4, col: 1, spectrum: 'spectrum/19.svg' },
        { number: 20, symbol: 'Ca', name: 'Calcium', koreanName: '칼슘', category: 'alkaline-earth', row: 4, col: 2, spectrum: 'spectrum/20.svg' },
        { number: 21, symbol: 'Sc', name: 'Scandium', koreanName: '스칸듐', category: 'transition-metal', row: 4, col: 3, spectrum: 'spectrum/21.svg' },
        { number: 22, symbol: 'Ti', name: 'Titanium', koreanName: '타이타늄', category: 'transition-metal', row: 4, col: 4, spectrum: 'spectrum/22.svg' },
        { number: 23, symbol: 'V', name: 'Vanadium', koreanName: '바나듐', category: 'transition-metal', row: 4, col: 5, spectrum: 'spectrum/23.svg' },
        { number: 24, symbol: 'Cr', name: 'Chromium', koreanName: '크로뮴', category: 'transition-metal', row: 4, col: 6, spectrum: 'spectrum/24.svg' },
        { number: 25, symbol: 'Mn', name: 'Manganese', koreanName: '망가니즈', category: 'transition-metal', row: 4, col: 7, spectrum: 'spectrum/25.svg' },
        { number: 26, symbol: 'Fe', name: 'Iron', koreanName: '철', category: 'transition-metal', row: 4, col: 8, spectrum: 'spectrum/26.svg' },
        { number: 27, symbol: 'Co', name: 'Cobalt', koreanName: '코발트', category: 'transition-metal', row: 4, col: 9, spectrum: 'spectrum/27.svg' },
        { number: 28, symbol: 'Ni', name: 'Nickel', koreanName: '니켈', category: 'transition-metal', row: 4, col: 10, spectrum: 'spectrum/28.svg' },
        { number: 29, symbol: 'Cu', name: 'Copper', koreanName: '구리', category: 'transition-metal', row: 4, col: 11, spectrum: 'spectrum/29.svg' },
        { number: 30, symbol: 'Zn', name: 'Zinc', koreanName: '아연', category: 'transition-metal', row: 4, col: 12, spectrum: 'spectrum/30.svg' },
        { number: 31, symbol: 'Ga', name: 'Gallium', koreanName: '갈륨', category: 'post-transition', row: 4, col: 13, spectrum: 'spectrum/31.svg' },
        { number: 32, symbol: 'Ge', name: 'Germanium', koreanName: '저마늄', category: 'metalloid', row: 4, col: 14, spectrum: 'spectrum/32.svg' },
        { number: 33, symbol: 'As', name: 'Arsenic', koreanName: '비소', category: 'metalloid', row: 4, col: 15, spectrum: 'spectrum/33.svg' },
        { number: 34, symbol: 'Se', name: 'Selenium', koreanName: '셀레늄', category: 'nonmetal', row: 4, col: 16, spectrum: 'spectrum/34.svg' },
        { number: 35, symbol: 'Br', name: 'Bromine', koreanName: '브로민', category: 'halogen', row: 4, col: 17, spectrum: 'spectrum/35.svg' },
        { number: 36, symbol: 'Kr', name: 'Krypton', koreanName: '크립톤', category: 'noble-gas', row: 4, col: 18, spectrum: 'spectrum/36.svg' },

        // Period 5
        { number: 37, symbol: 'Rb', name: 'Rubidium', koreanName: '루비듐', category: 'alkali-metal', row: 5, col: 1, spectrum: 'spectrum/37.svg' },
        { number: 38, symbol: 'Sr', name: 'Strontium', koreanName: '스트론튬', category: 'alkaline-earth', row: 5, col: 2, spectrum: 'spectrum/38.svg' },
        { number: 39, symbol: 'Y', name: 'Yttrium', koreanName: '이트륨', category: 'transition-metal', row: 5, col: 3, spectrum: 'spectrum/39.svg' },
        { number: 40, symbol: 'Zr', name: 'Zirconium', koreanName: '지르코늄', category: 'transition-metal', row: 5, col: 4, spectrum: 'spectrum/40.svg' },
        { number: 41, symbol: 'Nb', name: 'Niobium', koreanName: '나이오븀', category: 'transition-metal', row: 5, col: 5, spectrum: '' },
        { number: 42, symbol: 'Mo', name: 'Molybdenum', koreanName: '몰리브데넘', category: 'transition-metal', row: 5, col: 6, spectrum: '' },
        { number: 43, symbol: 'Tc', name: 'Technetium', koreanName: '테크네튬', category: 'transition-metal', row: 5, col: 7, spectrum: '' },
        { number: 44, symbol: 'Ru', name: 'Ruthenium', koreanName: '루테늄', category: 'transition-metal', row: 5, col: 8, spectrum: '' },
        { number: 45, symbol: 'Rh', name: 'Rhodium', koreanName: '로듐', category: 'transition-metal', row: 5, col: 9, spectrum: '' },
        { number: 46, symbol: 'Pd', name: 'Palladium', koreanName: '팔라듐', category: 'transition-metal', row: 5, col: 10, spectrum: '' },
        { number: 47, symbol: 'Ag', name: 'Silver', koreanName: '은', category: 'transition-metal', row: 5, col: 11, spectrum: '' },
        { number: 48, symbol: 'Cd', name: 'Cadmium', koreanName: '카드뮴', category: 'transition-metal', row: 5, col: 12, spectrum: '' },
        { number: 49, symbol: 'In', name: 'Indium', koreanName: '인듐', category: 'post-transition', row: 5, col: 13, spectrum: '' },
        { number: 50, symbol: 'Sn', name: 'Tin', koreanName: '주석', category: 'post-transition', row: 5, col: 14, spectrum: '' },
        { number: 51, symbol: 'Sb', name: 'Antimony', koreanName: '안티모니', category: 'metalloid', row: 5, col: 15, spectrum: '' },
        { number: 52, symbol: 'Te', name: 'Tellurium', koreanName: '텔루륨', category: 'metalloid', row: 5, col: 16, spectrum: '' },
        { number: 53, symbol: 'I', name: 'Iodine', koreanName: '아이오딘', category: 'halogen', row: 5, col: 17, spectrum: '' },
        { number: 54, symbol: 'Xe', name: 'Xenon', koreanName: '제논', category: 'noble-gas', row: 5, col: 18, spectrum: '' },

        // Period 6
        { number: 55, symbol: 'Cs', name: 'Cesium', koreanName: '세슘', category: 'alkali-metal', row: 6, col: 1, spectrum: '' },
        { number: 56, symbol: 'Ba', name: 'Barium', koreanName: '바륨', category: 'alkaline-earth', row: 6, col: 2, spectrum: '' },
        { number: 57, symbol: 'La', name: 'Lanthanum', koreanName: '란타넘', category: 'lanthanide', row: 9, col: 3, spectrum: '' },
        { number: 58, symbol: 'Ce', name: 'Cerium', koreanName: '세륨', category: 'lanthanide', row: 9, col: 4, spectrum: '' },
        { number: 59, symbol: 'Pr', name: 'Praseodymium', koreanName: '프라세오디뮴', category: 'lanthanide', row: 9, col: 5, spectrum: '' },
        { number: 60, symbol: 'Nd', name: 'Neodymium', koreanName: '네오디뮴', category: 'lanthanide', row: 9, col: 6, spectrum: '' },
        { number: 61, symbol: 'Pm', name: 'Promethium', koreanName: '프로메튬', category: 'lanthanide', row: 9, col: 7, spectrum: '' },
        { number: 62, symbol: 'Sm', name: 'Samarium', koreanName: '사마륨', category: 'lanthanide', row: 9, col: 8, spectrum: '' },
        { number: 63, symbol: 'Eu', name: 'Europium', koreanName: '유로퓸', category: 'lanthanide', row: 9, col: 9, spectrum: '' },
        { number: 64, symbol: 'Gd', name: 'Gadolinium', koreanName: '가돌리늄', category: 'lanthanide', row: 9, col: 10, spectrum: '' },
        { number: 65, symbol: 'Tb', name: 'Terbium', koreanName: '터븀', category: 'lanthanide', row: 9, col: 11, spectrum: '' },
        { number: 66, symbol: 'Dy', name: 'Dysprosium', koreanName: '디스프로슘', category: 'lanthanide', row: 9, col: 12, spectrum: '' },
        { number: 67, symbol: 'Ho', name: 'Holmium', koreanName: '홀뮴', category: 'lanthanide', row: 9, col: 13, spectrum: '' },
        { number: 68, symbol: 'Er', name: 'Erbium', koreanName: '어븀', category: 'lanthanide', row: 9, col: 14, spectrum: '' },
        { number: 69, symbol: 'Tm', name: 'Thulium', koreanName: '툴륨', category: 'lanthanide', row: 9, col: 15, spectrum: '' },
        { number: 70, symbol: 'Yb', name: 'Ytterbium', koreanName: '이터븀', category: 'lanthanide', row: 9, col: 16, spectrum: '' },
        { number: 71, symbol: 'Lu', name: 'Lutetium', koreanName: '루테튬', category: 'lanthanide', row: 9, col: 17, spectrum: '' },
        { number: 72, symbol: 'Hf', name: 'Hafnium', koreanName: '하프늄', category: 'transition-metal', row: 6, col: 4, spectrum: '' },
        { number: 73, symbol: 'Ta', name: 'Tantalum', koreanName: '탄탈럼', category: 'transition-metal', row: 6, col: 5, spectrum: '' },
        { number: 74, symbol: 'W', name: 'Tungsten', koreanName: '텅스텐', category: 'transition-metal', row: 6, col: 6, spectrum: '' },
        { number: 75, symbol: 'Re', name: 'Rhenium', koreanName: '레늄', category: 'transition-metal', row: 6, col: 7, spectrum: '' },
        { number: 76, symbol: 'Os', name: 'Osmium', koreanName: '오스뮴', category: 'transition-metal', row: 6, col: 8, spectrum: '' },
        { number: 77, symbol: 'Ir', name: 'Iridium', koreanName: '이리듐', category: 'transition-metal', row: 6, col: 9, spectrum: '' },
        { number: 78, symbol: 'Pt', name: 'Platinum', koreanName: '백금', category: 'transition-metal', row: 6, col: 10, spectrum: '' },
        { number: 79, symbol: 'Au', name: 'Gold', koreanName: '금', category: 'transition-metal', row: 6, col: 11, spectrum: '' },
        { number: 80, symbol: 'Hg', name: 'Mercury', koreanName: '수은', category: 'transition-metal', row: 6, col: 12, spectrum: '' },
        { number: 81, symbol: 'Tl', name: 'Thallium', koreanName: '탈륨', category: 'post-transition', row: 6, col: 13, spectrum: '' },
        { number: 82, symbol: 'Pb', name: 'Lead', koreanName: '납', category: 'post-transition', row: 6, col: 14, spectrum: '' },
        { number: 83, symbol: 'Bi', name: 'Bismuth', koreanName: '비스무트', category: 'post-transition', row: 6, col: 15, spectrum: '' },
        { number: 84, symbol: 'Po', name: 'Polonium', koreanName: '폴로늄', category: 'metalloid', row: 6, col: 16, spectrum: '' },
        { number: 85, symbol: 'At', name: 'Astatine', koreanName: '아스타틴', category: 'halogen', row: 6, col: 17, spectrum: '' },
        { number: 86, symbol: 'Rn', name: 'Radon', koreanName: '라돈', category: 'noble-gas', row: 6, col: 18, spectrum: '' },

        // Period 7
        { number: 87, symbol: 'Fr', name: 'Francium', koreanName: '프랑슘', category: 'alkali-metal', row: 7, col: 1, spectrum: '' },
        { number: 88, symbol: 'Ra', name: 'Radium', koreanName: '라듐', category: 'alkaline-earth', row: 7, col: 2, spectrum: '' },
        { number: 89, symbol: 'Ac', name: 'Actinium', koreanName: '악티늄', category: 'actinide', row: 10, col: 3, spectrum: '' },
        { number: 90, symbol: 'Th', name: 'Thorium', koreanName: '토륨', category: 'actinide', row: 10, col: 4, spectrum: '' },
        { number: 91, symbol: 'Pa', name: 'Protactinium', koreanName: '프로트악티늄', category: 'actinide', row: 10, col: 5, spectrum: '' },
        { number: 92, symbol: 'U', name: 'Uranium', koreanName: '우라늄', category: 'actinide', row: 10, col: 6, spectrum: '' },
        { number: 93, symbol: 'Np', name: 'Neptunium', koreanName: '넵투늄', category: 'actinide', row: 10, col: 7, spectrum: '' },
        { number: 94, symbol: 'Pu', name: 'Plutonium', koreanName: '플루토늄', category: 'actinide', row: 10, col: 8, spectrum: '' },
        { number: 95, symbol: 'Am', name: 'Americium', koreanName: '아메리슘', category: 'actinide', row: 10, col: 9, spectrum: '' },
        { number: 96, symbol: 'Cm', name: 'Curium', koreanName: '퀴륨', category: 'actinide', row: 10, col: 10, spectrum: '' },
        { number: 97, symbol: 'Bk', name: 'Berkelium', koreanName: '버클륨', category: 'actinide', row: 10, col: 11, spectrum: '' },
        { number: 98, symbol: 'Cf', name: 'Californium', koreanName: '캘리포늄', category: 'actinide', row: 10, col: 12, spectrum: '' },
        { number: 99, symbol: 'Es', name: 'Einsteinium', koreanName: '아인슈타이늄', category: 'actinide', row: 10, col: 13, spectrum: '' },
        { number: 100, symbol: 'Fm', name: 'Fermium', koreanName: '페르뮴', category: 'actinide', row: 10, col: 14, spectrum: '' },
        { number: 101, symbol: 'Md', name: 'Mendelevium', koreanName: '멘델레븀', category: 'actinide', row: 10, col: 15, spectrum: '' },
        { number: 102, symbol: 'No', name: 'Nobelium', koreanName: '노벨륨', category: 'actinide', row: 10, col: 16, spectrum: '' },
        { number: 103, symbol: 'Lr', name: 'Lawrencium', koreanName: '로렌슘', category: 'actinide', row: 10, col: 17, spectrum: '' },
        { number: 104, symbol: 'Rf', name: 'Rutherfordium', koreanName: '러더포듐', category: 'transition-metal', row: 7, col: 4, spectrum: '' },
        { number: 105, symbol: 'Db', name: 'Dubnium', koreanName: '더브늄', category: 'transition-metal', row: 7, col: 5, spectrum: '' },
        { number: 106, symbol: 'Sg', name: 'Seaborgium', koreanName: '시보귬', category: 'transition-metal', row: 7, col: 6, spectrum: '' },
        { number: 107, symbol: 'Bh', name: 'Bohrium', koreanName: '보륨', category: 'transition-metal', row: 7, col: 7, spectrum: '' },
        { number: 108, symbol: 'Hs', name: 'Hassium', koreanName: '하슘', category: 'transition-metal', row: 7, col: 8, spectrum: '' },
        { number: 109, symbol: 'Mt', name: 'Meitnerium', koreanName: '마이트너륨', category: 'transition-metal', row: 7, col: 9, spectrum: '' },
        { number: 110, symbol: 'Ds', name: 'Darmstadtium', koreanName: '다름슈타튬', category: 'transition-metal', row: 7, col: 10, spectrum: '' },
        { number: 111, symbol: 'Rg', name: 'Roentgenium', koreanName: '뢴트게늄', category: 'transition-metal', row: 7, col: 11, spectrum: '' },
        { number: 112, symbol: 'Cn', name: 'Copernicium', koreanName: '코페르니슘', category: 'transition-metal', row: 7, col: 12, spectrum: '' },
        { number: 113, symbol: 'Nh', name: 'Nihonium', koreanName: '니호늄', category: 'post-transition', row: 7, col: 13, spectrum: '' },
        { number: 114, symbol: 'Fl', name: 'Flerovium', koreanName: '플레로븀', category: 'post-transition', row: 7, col: 14, spectrum: '' },
        { number: 115, symbol: 'Mc', name: 'Moscovium', koreanName: '모스코븀', category: 'post-transition', row: 7, col: 15, spectrum: '' },
        { number: 116, symbol: 'Lv', name: 'Livermorium', koreanName: '리버모륨', category: 'post-transition', row: 7, col: 16, spectrum: '' },
        { number: 117, symbol: 'Ts', name: 'Tennessine', koreanName: '테네신', category: 'halogen', row: 7, col: 17, spectrum: '' },
        { number: 118, symbol: 'Og', name: 'Oganesson', koreanName: '오가네손', category: 'noble-gas', row: 7, col: 18, spectrum: '' },
    ];

    const handleElementClick = (element) => {
        setSelectedElement(element);
    };

    const closeModal = () => {
        setSelectedElement(null);
    };

    const openNoteModal = () => {
        setIsNoteModalOpen(true);
    };

    const closeNoteModal = () => {
        setIsNoteModalOpen(false);
    };

    // 로딩 중이거나 인증되지 않은 경우 로딩 화면 표시
    if (isLoading || !isAuthenticated) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h2>로그인 확인 중...</h2>
            </div>
        );
    }

    return (
        <>
            <div className="periodic-table-page">
            <h1 className="page-title">
                <span>주</span>
                <span>기</span>
                <span>율</span>
                <span>표</span>
            </h1>

            <div className = "icon-container">
                <div className="icon-wrapper">
                    <img className="quiz-icon" src="Quiz.svg" onClick={handleQuizClick}/>
                    <span className="tooltip">퀴즈 풀러가기</span>
                </div>
                <div className="icon-wrapper">
                    <img className="ranking-icon" src="Ranking.png" onClick={handleRankingClick} />
                    <span className="tooltip">랭킹 확인하기</span>
                </div>
            </div>

            <img  className ="ExclamationMark" src="ExclamationMark.png" onClick={openNoteModal}></img>


            <div className="periodic-table">
                {elements.map(element => (
                    <div
                        key={element.number}
                        className={`element ${element.category}`}
                        style={{
                            gridRow: element.row,
                            gridColumn: element.col
                        }}
                        onClick={() => handleElementClick(element)}
                    >
                        <div className="atomic-number">{element.number}</div>
                        <div className="symbol">{element.symbol}</div>
                    </div>
                ))}
            </div>

            {selectedElement && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-header">
                            <div className={`modal-element-box ${selectedElement.category}`}>
                                <div className="modal-atomic-number">{selectedElement.number}</div>
                                <div className="modal-symbol">{selectedElement.symbol}</div>
                                <div className="modal-name">{selectedElement.name} ({selectedElement.koreanName})</div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h2>원소 정보</h2>
                            <div className="element-info">
                                <div className="info-row">
                                    <span className="info-label">원자 번호:</span>
                                    <span className="info-value">{selectedElement.number}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">원소 기호:</span>
                                    <span className="info-value">{selectedElement.symbol}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">원소명:</span>
                                    <span className="info-value">{selectedElement.name} ({selectedElement.koreanName})</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">분류:</span>
                                    <span className="info-value">{selectedElement.category}</span>
                                </div>
                            </div>
                            <div className="spectrum-section">
                                <h3>스펙트럼 정보</h3>
                                {selectedElement.spectrum ? (
                                    <img
                                        src={selectedElement.spectrum}
                                        alt={`${selectedElement.name} spectrum`}
                                        className="spectrum-image"
                                    />
                                ) : (
                                    <div className="spectrum-placeholder">
                                        스펙트럼 데이터가 없습니다
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isNoteModalOpen && (
                <div className="modal-overlay" onClick={closeNoteModal}>
                    <div className="precautions-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeNoteModal}>×</button>
                        <div className="precautions">
                            <p>참고사항 :<br/>
                                각 원소의 스펙트럼은 WebElements 사이트를 참고하여 <br/>
                                직접 제작한 시각화 자료입니다. <br/>
                                교육 목적으로 제작되었으며, 선의 위치와 개수가 <br/>실제와 다를 수 있음을 양해 부탁드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            </div>

            <footer className="footer">
                <div className="title-container">
                    <p className="title">(주)소마</p>
                    <p>대표 : 박성준 ㅣ 사업자등록번호 : 1004-12-12345 ㅣ 이메일 : 25_27@bssm.hs.kr</p>
                    <p>주소 : 부산광역시 강서구 가락대로 1393 ㅣ 우편번호 : 46708 ㅣ 고객센터 : 010-  </p>
                    <a href="https://studio.youtube.com/channel/UCYoJiW-eDl2jmbxhiKeInPg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D">
                        <img className="ytube-icon" src="ytube.svg" alt="YouTube" />
                    </a>
                    <a href="https://github.com/seongjune09/show-the-Spectrum-">
                        <img className="github-icon" src="github.svg" alt="GitHub" />
                    </a>
                </div>
            </footer>
        </>
    );
}
