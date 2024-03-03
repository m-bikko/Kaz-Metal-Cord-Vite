import './Popup.css'
const Popup = ({isOpen, setIsOpen, children}) => {
    return (
        <div className={isOpen ? 'popup active' : 'popup'} onClick={() => {setIsOpen(false)}}>
            <div className={isOpen ? 'popup-content active' : 'popup-content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Popup