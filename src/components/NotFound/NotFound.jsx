import React, { useRef } from 'react';
import './NotFound.css';
import {Link} from "react-router-dom";
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

        const clientName = form.current['from_name'].value;
        const clientPhone = form.current['from_tel'].value;
        const clientMessage = form.current['message'].value;

        const messageContent = `name: ${clientName}\nphone: ${clientPhone}\nmessage: ${clientMessage}`;
        const formData = new FormData();


        formData.append('to', 'abdulazizbolat4@gmail.com'); // Set the recipient's email address as a constant
        formData.append('subject', `Request from ${clientName}`); // Set the subject line to include the client's name
        formData.append('text', messageContent); // Append the constructed message content


        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput && fileInput.files.length > 0) {
            for (let i = 0; i < fileInput.files.length; i++) {
                formData.append('files', fileInput.files[i]);
            }
        }


        fetch('https://send-email-with-file.vercel.app/send', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.text();
            })
            .then(() => {
                console.log('SUCCESS!');
            })
            .catch((error) => {
                console.log('FAILED...', error.message);
            });
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
                    <input name={`from_name`} placeholder="Ваше имя" onChange={handleInput}/>
                    <InputMask name={`from_tel`} mask="+7 (999) 999-99-99" maskChar="*" placeholder="+7 (***) *** ** **"  onChange={handleInput}/>
                    <input name={`message`} placeholder="Сообщение" onChange={handleInput}/>
                </div>

                <div className={`upload-container`}>
                    {/*<input name='files' type="file"/>*/}
                    <FileUploader />
                    <p>Заявка или карточка компании в формате txt, doc, pdf (максимум 10 файлов)</p>
                </div>

                <div className={sendContainerStyle}>
                    <button type={`submit`} className={`send-button`}>Отправить заявку</button>
                    <p>Нажимая кнопку, Вы соглашаетесь с <Link className={`link`} to={`policy`}>Политикой обработки персональных данных</Link></p>
                </div>
            </div>
        </form>
    );
}

export default NotFound;
