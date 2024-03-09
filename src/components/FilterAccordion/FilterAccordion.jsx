// FilterAccordion.jsx
import React, { useState, useEffect } from 'react';
import './FilterAccordion.css';

const FilterAccordion = ({ type, checkbox, onFilterChange }) => {
    const [isActive, setIsActive] = useState(window.innerWidth > 768);
    const [isFullHeight, setIsFullHeight] = useState(false);
    const [selected, setSelected] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [panelHeight, setPanelHeight] = useState(`${checkbox[type].length * 40}px`);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelected((oldData) => [...oldData, value]);
        } else {
            setSelected((oldData) => oldData.filter((item) => item !== value));
        }

        onFilterChange(type, [...selected, value]);
    };

    useEffect(() => {
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 768;
            setIsMobile(newIsMobile);

            if (newIsMobile) {
                setIsActive(false);
            } else {
                setIsActive(true);
                setPanelHeight(`${checkbox[type].length * 40}px`);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [checkbox, type]);

    useEffect(() => {
        const newPanelHeight = isFullHeight
            ? '100%'
            : isActive
                ? `${checkbox[type].length * 40}px`
                : '0';

        setPanelHeight(newPanelHeight);
    }, [checkbox, type, selected, isFullHeight, isActive]);

    return (
        <div>
            <button className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
                {type}
            </button>
            <div className={`panel`} style={{ maxHeight: panelHeight, overflow: 'auto' }}>
                {checkbox[type].map((item, idx) => (
                    <div key={idx} className={`checkbox-item`}>
                        <input
                            id={idx}
                            type={`checkbox`}
                            value={item}
                            checked={selected.includes(item)}
                            onChange={handleChange}
                        />
                        <label htmlFor={idx}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterAccordion;
