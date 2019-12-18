import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Baner} from "./components/Baner/Baner";

const body = document.getElementById('body');

ReactDOM.render(
<div>
    <Navbar/>
    <Baner/>
</div>, body

);
