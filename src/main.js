import React from "react";
import ReactDOM from "react-dom";
import Photo from './profile/Photo';
import FullName from './profile/FullName';
import Address from './profile/Address';
import './Main.css';

const Main=()=>{
return (<div>
    <FullName />
    <Photo />
    <Address/>
</div>);};

export default Main;


