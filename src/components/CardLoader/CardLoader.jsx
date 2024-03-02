import './CardLoader.css'
import React, {useState} from "react";
import Card from "../Card/Card.jsx";
import cable from '../Shared/image/cable.png'
import Clicker from "../Clicker/Clicker.jsx";

function CardLoader() {

    return (
        <div className={`card-loader`}>
            <div className={`card-container`}>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
                <div className={`card`}>
                    <img src={cable}/>
                    <div className={`card-content`}>
                        <p className={`description`}>Кабель силовой АВБбШв 3х10+1х6</p>
                        <p className={`price`}>от 880 тг.</p>
                        <button className={`detail`}>Подробнее</button>
                        <div className={`button-container`}>
                            <Clicker/>
                            <button className={`buy`}>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`download-button`}>
                <button>Загрузить еще</button>
            </div>
        </div>
    );
}

export default CardLoader;