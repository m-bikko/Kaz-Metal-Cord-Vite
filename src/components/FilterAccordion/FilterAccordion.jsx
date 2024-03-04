// FilterAccordion.jsx
import React, { useState, useEffect } from 'react';
import './FilterAccordion.css';

const FilterAccordion = ({ type, checkbox, onFilterChange }) => {
    const isMobile = window.innerWidth <= 768;
    const [isActive, setIsActive] = useState(!isMobile);
    const [panelHeight, setPanelHeight] = useState(isMobile ? '0' : `${checkbox[type].length * 40}px`);
    const [selected, setSelected] = useState([]);

    const toggleAccordion = () => {
        if (isMobile) {
            setIsActive(!isActive);
            setPanelHeight(isActive ? '0' : `${checkbox[type].length * 40}px`);
        }
    };

    const handleChange = (e, idx) => {
        const activeData = document.getElementById(idx).checked;

        if (activeData === true) {
            setSelected((oldData) => [...oldData, e.target.value]);
            onFilterChange(type, [...selected, e.target.value]);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 768;
            setIsActive(!newIsMobile);
            setPanelHeight(newIsMobile ? '0' : `${checkbox[type].length * 40}px`);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [checkbox, type]);

    return (
        <div>
            <button className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
                {type}
            </button>
            <div className={`panel`} style={{ maxHeight: panelHeight }}>
                {checkbox[type].map((item, idx) => (
                    <div key={idx} className={`checkbox-item`}>
                        <input id={idx} type={`checkbox`} value={item} onChange={(e) => handleChange(e, idx)} />
                        <label htmlFor={idx}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterAccordion;
