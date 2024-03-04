import "./HowToBuyPage.css";

// eslint-disable-next-line react/prop-types
const FAQ = ({ faq, index, toggleFAQ }) => {
    return (
        <div
            /* eslint-disable-next-line react/prop-types */
            className={"faq " + (faq.open ? "open" : "")}
            key={index}
            onClick={() => toggleFAQ(index)}
        >

            {/* eslint-disable-next-line react/prop-types */}
            <div className="faq-question">{faq.question}</div>
            {/* eslint-disable-next-line react/prop-types */}
            <div className="faq-answer">{faq.answer}</div>
        </div>
    );
};

export default FAQ;
