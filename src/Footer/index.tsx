import React, {useRef, useState} from 'react';
import Popup from 'reactjs-popup';

import {Button, Modal} from 'react-bootstrap';


export function Footer() {


    return (
        <footer>
            <a href="https://github.com/GlebLagutko">GitHub</a>
            <span >2021</span>
            <img width="80px" height="50px" src="https://rs.school/images/rs_school_js.svg" alt="Icon"/>
            <a href="https://rs.school/js/">RS School</a>
        </footer>
    );
}