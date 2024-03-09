import './Popup.css'
import React from "react";
const Popup = ({isOpen, setIsOpen, children}) => {
    return (
        <div className={isOpen ? 'popup active' : 'popup'} onClick={() => {setIsOpen(false)}}>
            <a className={`close-link`}>
                <svg className={`filter-icon`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
                </svg>
            </a>
            <div className={isOpen ? 'popup-content active' : 'popup-content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Popup