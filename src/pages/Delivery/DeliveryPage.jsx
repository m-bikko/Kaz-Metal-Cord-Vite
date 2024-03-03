import "./DeliveryPage.css";
import "./../../App.css"
import deliveryImg from "../../photos/delivery-img.png"
import NotFound from "../../components/NotFound/NotFound.jsx";

function DeliveryPage(){
    return(
        <div>
            <div className="delivery-full">
                <div>
                    <div className="delivery-title">
                        Доставка
                    </div>
                    <div className="delivery-description">
                        Осуществляем круглосуточную доставку по Казахстану и странам СНГ (по предварительной
                        договоренности). В наличии собственный автотранспорт, возможно сотрудничество с любой
                        транспортной компанией. <br/> Расчет сроков и стоимости доставки рассчитывается исходя из объема
                        партии, удаленности объекта и необходимости осуществления дополнительных услуг. <br/> Опытные
                        менеджеры осуществляют информационное сопровождение заявки до момента получения груза на
                        объекте.
                    </div>
                </div>
                <img className="delivery-img" src={deliveryImg} alt=""/>
            </div>
            <NotFound/>
        </div>

    )
}

export default DeliveryPage;

