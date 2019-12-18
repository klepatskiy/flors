import React from "react";
import "./Baner.css"
import backgroundimg from '../../img/background.png';

const stylebaner = {
    backgroundImage: `url(${backgroundimg})`,
    position: 'cover',
    width: '100vw',
    height: '50vh'

};
export const Baner = () => (
    <div style={stylebaner} className="background-sale">
    </div>
);