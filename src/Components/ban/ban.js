import React from 'react';
import BanImg from "../../ban.jpg";
import './ban.scss';
let Ban = () => {
    let style = `
       header {
                display: none!important;
            }

                .inner{
                padding: 0!important;
            }
    `
    return (
        <div className="ban">
            <style>
                {style}
            </style>
            <h1>Перманентый бан.</h1>
            <img src={BanImg} alt="Ban"/>
        </div>
    )
}
export default Ban;