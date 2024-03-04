import "./HowToBuyPage.css";
import { useState } from "react";
import FAQ from "./FAQ.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";

function HowToBuyPage(){
    const [faqs, setFaqs] = useState([
        {
            question: "Как оформить заказ?",
            answer:
                "Доступно оформление заказа несколькими способами:\n" +
                "1) По телефону;\n" +
                "2) По электронной почте;\n" +
                "3) Отправив контактные данные и/или заявку через любую форму сайта;\n" +
                "4) Отправив заполненную заявку через корзину сайта.",
            open: true
        },
        {
            question: "Как оплатить заказ?",
            answer: "Оплата осуществляется банковским переводом на расчетный счет компании.",
            open: false
        },
        {
            question:
                "Как рассчитывается стоимость заказа?",
            answer: "Стоимость заказа рассчитывается исходя из объема партии, города доставки и условий разгрузки",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <div>
            <div className="HowToBuyPage-full">
                <div className="how-to-buy">
                    <div className="how-to-buy-title">
                        Как оформить заказ и оплатить покупку?
                    </div>
                    <div className="how-to-buy-description">
                        Отгрузка товара осуществляется после полной предоплаты. Для государственных предприятий
                        Республики Казахстан возможна отсрочка платежа (за дополнительной информацией обращайтесь к
                        менеджеру).
                    </div>
                </div>
                <div className="FAQ">
                    <div className="FAQ-title">
                        FAQ: Часто задаваемые вопросы
                    </div>
                    <div className="FAQ-description">
                        <div className="faqs">
                            {faqs.map((faq, index) => (
                                <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <NotFound/>
        </div>


        // <div className="App">
        //     <div className="faqs">
        //         {faqs.map((faq, index) => (
        //             <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ}/>
        //         ))}
        //     </div>
        // </div>
    );
}

export default HowToBuyPage;