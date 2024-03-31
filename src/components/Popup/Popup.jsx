import React, {useEffect, useState} from "react";
import './Popup.css'

const Popup = ({isOpen, setIsOpen, isSuccess, children}) => {

    const handleCLose = () => {
        setIsOpen(false)
        if(isSuccess) {
            window.location.reload()
        }
    }
    const styleBtnClose = isSuccess ? {display: 'none'} : {}
    const stylePopupContent = isSuccess ? {width: '25vw', minWidth: '250px'} : {}
    const stylePopup = isSuccess ? {justifyContent: 'center'} : {}

    return (
        <div style={stylePopup} className={isOpen ? 'popup active' : 'popup'} onClick={handleCLose}>
            <a className={`close-link`} style={styleBtnClose}>
                <svg className={`filter-icon`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
                </svg>
            </a>
            <div style={stylePopupContent} className={isOpen ? 'popup-content active' : 'popup-content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Popup