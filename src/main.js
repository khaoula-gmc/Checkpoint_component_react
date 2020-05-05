import React from "react";
import ReactDOM from "react-dom";
import Photo from './profile/Photo';
import FullName from './profile/FullName';
import Address from './profile/Address';
import './main.css';

const App=()=>{
return (<div>
    <FullName />
   <div className="photo"><Photo /></div> 
<h3>Address:<Address/></h3>
</div>);};

export default App;


