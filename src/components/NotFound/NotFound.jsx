import React, { useRef } from 'react';
import './NotFound.css';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import FileUploader from "../FileUploader/FileUploader.jsx";


const NotFound = ({useBasketStyles}) => {
    const handleInput = (e) =>{
        return e.target.value
    }

    const notFoundStyle = useBasketStyles ? 'not-found-basket' : 'not-found';
    const notFoundContainerStyle = useBasketStyles ? 'not-found-container-basket' : 'not-found-container';
    const inputInfoStyle = useBasketStyles ? 'input-info-basket' : 'input-info';
    const sendContainerStyle = useBasketStyles ? 'send-request-container-basket' : 'send-request-container'


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_242z369', 'template_ljnafnb', form.current, {
                publicKey: '',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={notFoundStyle}>
            <div className={notFoundContainerStyle}>
                {!useBasketStyles && (
                    <>
                        <h2>Не нашли, что искали?</h2>
                        <p className={`not-found-hint`}>Оставьте свои контактные данные. Наши менеджеры на связи по будням с 9:00 до 18:00, время ответа - до 30 минут.</p>
                    </>
                )}
                <div className={inputInfoStyle}>
                    <input name={`from_name`} placeholder="Ваше имя"/>
                    <InputMask name={`from_tel`} mask="+7 (999) 999-99-99" maskChar="*" placeholder="+7 (***) *** ** **" />
                    <input name={`message`} placeholder="Сообщение"/>
                </div>

                <div className={`upload-container`}>
                    <FileUploader/>
                    <p>Заявка или карточка компании в формате txt, doc, pdf (максимум 10 файлов)</p>
                </div>

                <div className={sendContainerStyle}>
                    <button type={`submit`} className={`send-button`}>Отправить заявку</button>
                    <p>Нажимая кнопку, Вы соглашаетесь с <a href={`#`}>Политикой обработки персональных данных</a></p>
                </div>

            </div>
        </form>
    );
}

export default NotFound;