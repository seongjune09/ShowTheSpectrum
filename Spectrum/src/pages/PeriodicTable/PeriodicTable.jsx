import { useState } from "react";
import "./PeriodicTable.css";

export default function PeriodicTable() {
    const [selectedElement, setSelectedElement] = useState(null);

    const elements = [
        // Period 1
        { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', row: 1, col: 1, spectrum: '/spectrum/1.svg' },
        { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', row: 1, col: 18, spectrum: 'spectrum/2.svg' },

        // Period 2
        { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', row: 2, col: 1, spectrum: 'spectrum/3.svg' },
        { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', row: 2, col: 2, spectrum: 'spectrum/4.svg' },
        { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', row: 2, col: 13, spectrum: 'spectrum/5.svg' },
        { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', row: 2, col: 14, spectrum: 'spectrum/6.svg' },
        { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', row: 2, col: 15, spectrum: 'spectrum/7.svg' },
        { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', row: 2, col: 16, spectrum: 'spectrum/8.svg' },
        { number: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', row: 2, col: 17, spectrum: 'spectrum/9.svg' },
        { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', row: 2, col: 18, spectrum: 'spectrum/10.svg' },

        // Period 3
        { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', row: 3, col: 1, spectrum: 'spectrum/11.svg' },
        { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth', row: 3, col: 2, spectrum: 'spectrum/12.svg' },
        { number: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition', row: 3, col: 13, spectrum: 'spectrum/13.svg' },
        { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', row: 3, col: 14, spectrum: 'spectrum/14.svg' },
        { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', row: 3, col: 15, spectrum: 'spectrum/15.svg' },
        { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', row: 3, col: 16, spectrum: 'spectrum/16.svg' },
        { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', row: 3, col: 17, spectrum: 'spectrum/17.svg' },
        { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', row: 3, col: 18, spectrum: 'spectrum/18.svg' },

        // Period 4
        { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', row: 4, col: 1, spectrum: 'spectrum/19.svg' },
        { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth', row: 4, col: 2, spectrum: 'spectrum/20.svg' },
        { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', row: 4, col: 3, spectrum: '' },
        { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', row: 4, col: 4, spectrum: '' },
        { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', row: 4, col: 5, spectrum: '' },
        { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', row: 4, col: 6, spectrum: '' },
        { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', row: 4, col: 7, spectrum: '' },
        { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', row: 4, col: 8, spectrum: '' },
        { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', row: 4, col: 9, spectrum: '' },
        { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', row: 4, col: 10, spectrum: '' },
        { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', row: 4, col: 11, spectrum: '' },
        { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', row: 4, col: 12, spectrum: '' },
        { number: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition', row: 4, col: 13, spectrum: '' },
        { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', row: 4, col: 14, spectrum: '' },
        { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', row: 4, col: 15, spectrum: '' },
        { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', row: 4, col: 16, spectrum: '' },
        { number: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', row: 4, col: 17, spectrum: '' },
        { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', row: 4, col: 18, spectrum: '' },

        // Period 5
        { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', row: 5, col: 1, spectrum: '' },
        { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth', row: 5, col: 2, spectrum: '' },
        { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', row: 5, col: 3, spectrum: '' },
        { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', row: 5, col: 4, spectrum: '' },
        { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', row: 5, col: 5, spectrum: '' },
        { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', row: 5, col: 6, spectrum: '' },
        { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', row: 5, col: 7, spectrum: '' },
        { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', row: 5, col: 8, spectrum: '' },
        { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', row: 5, col: 9, spectrum: '' },
        { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', row: 5, col: 10, spectrum: '' },
        { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', row: 5, col: 11, spectrum: '' },
        { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', row: 5, col: 12, spectrum: '' },
        { number: 49, symbol: 'In', name: 'Indium', category: 'post-transition', row: 5, col: 13, spectrum: '' },
        { number: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition', row: 5, col: 14, spectrum: '' },
        { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', row: 5, col: 15, spectrum: '' },
        { number: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', row: 5, col: 16, spectrum: '' },
        { number: 53, symbol: 'I', name: 'Iodine', category: 'halogen', row: 5, col: 17, spectrum: '' },
        { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', row: 5, col: 18, spectrum: '' },

        // Period 6
        { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal', row: 6, col: 1, spectrum: '' },
        { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth', row: 6, col: 2, spectrum: '' },
        { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', row: 9, col: 3, spectrum: '' },
        { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', row: 9, col: 4, spectrum: '' },
        { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', row: 9, col: 5, spectrum: '' },
        { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', row: 9, col: 6, spectrum: '' },
        { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', row: 9, col: 7, spectrum: '' },
        { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', row: 9, col: 8, spectrum: '' },
        { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', row: 9, col: 9, spectrum: '' },
        { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', row: 9, col: 10, spectrum: '' },
        { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', row: 9, col: 11, spectrum: '' },
        { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', row: 9, col: 12, spectrum: '' },
        { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', row: 9, col: 13, spectrum: '' },
        { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', row: 9, col: 14, spectrum: '' },
        { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', row: 9, col: 15, spectrum: '' },
        { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', row: 9, col: 16, spectrum: '' },
        { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', row: 9, col: 17, spectrum: '' },
        { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', row: 6, col: 4, spectrum: '' },
        { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', row: 6, col: 5, spectrum: '' },
        { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', row: 6, col: 6, spectrum: '' },
        { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', row: 6, col: 7, spectrum: '' },
        { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', row: 6, col: 8, spectrum: '' },
        { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', row: 6, col: 9, spectrum: '' },
        { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', row: 6, col: 10, spectrum: '' },
        { number: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', row: 6, col: 11, spectrum: '' },
        { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', row: 6, col: 12, spectrum: '' },
        { number: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition', row: 6, col: 13, spectrum: '' },
        { number: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition', row: 6, col: 14, spectrum: '' },
        { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition', row: 6, col: 15, spectrum: '' },
        { number: 84, symbol: 'Po', name: 'Polonium', category: 'metalloid', row: 6, col: 16, spectrum: '' },
        { number: 85, symbol: 'At', name: 'Astatine', category: 'halogen', row: 6, col: 17, spectrum: '' },
        { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', row: 6, col: 18, spectrum: '' },

        // Period 7
        { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', row: 7, col: 1, spectrum: '' },
        { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth', row: 7, col: 2, spectrum: '' },
        { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', row: 10, col: 3, spectrum: '' },
        { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', row: 10, col: 4, spectrum: '' },
        { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', row: 10, col: 5, spectrum: '' },
        { number: 92, symbol: 'U', name: 'Uranium', category: 'actinide', row: 10, col: 6, spectrum: '' },
        { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', row: 10, col: 7, spectrum: '' },
        { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', row: 10, col: 8, spectrum: '' },
        { number: 95, symbol: 'Am', name: 'Americium', category: 'actinide', row: 10, col: 9, spectrum: '' },
        { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', row: 10, col: 10, spectrum: '' },
        { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', row: 10, col: 11, spectrum: '' },
        { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', row: 10, col: 12, spectrum: '' },
        { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', row: 10, col: 13, spectrum: '' },
        { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', row: 10, col: 14, spectrum: '' },
        { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', row: 10, col: 15, spectrum: '' },
        { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', row: 10, col: 16, spectrum: '' },
        { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', row: 10, col: 17, spectrum: '' },
        { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', row: 7, col: 4, spectrum: '' },
        { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', row: 7, col: 5, spectrum: '' },
        { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', row: 7, col: 6, spectrum: '' },
        { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', row: 7, col: 7, spectrum: '' },
        { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', row: 7, col: 8, spectrum: '' },
        { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal', row: 7, col: 9, spectrum: '' },
        { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', row: 7, col: 10, spectrum: '' },
        { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', row: 7, col: 11, spectrum: '' },
        { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', row: 7, col: 12, spectrum: '' },
        { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'post-transition', row: 7, col: 13, spectrum: '' },
        { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'post-transition', row: 7, col: 14, spectrum: '' },
        { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'post-transition', row: 7, col: 15, spectrum: '' },
        { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition', row: 7, col: 16, spectrum: '' },
        { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'halogen', row: 7, col: 17, spectrum: '' },
        { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', row: 7, col: 18, spectrum: '' },
    ];

    const handleElementClick = (element) => {
        setSelectedElement(element);
    };

    const closeModal = () => {
        setSelectedElement(null);
    };

    return (
        <div className="periodic-table-page">
            <h1 className="page-title">
                <span>주</span>
                <span>기</span>
                <span>율</span>
                <span>표</span>
            </h1>

            <div className = "icon-container">
                <div className="icon-wrapper">
                    <img className="quiz-icon" src="Quiz.svg" />
                    <span className="tooltip">퀴즈 풀러가기</span>
                </div>
                <div className="icon-wrapper">
                    <img className="ranking-icon" src="Ranking.png" />
                    <span className="tooltip">랭킹 확인하기</span>
                </div>
            </div>


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
                        <div className="name">{element.name}</div>
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
                                <div className="modal-name">{selectedElement.name}</div>
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
                                    <span className="info-value">{selectedElement.name}</span>
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
        </div>
    );
}
