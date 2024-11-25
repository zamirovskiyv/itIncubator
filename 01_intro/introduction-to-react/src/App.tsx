import React from 'react';
import './App.css';
import Acc from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    // полезное что-то

    // обязана вернуть JSX
    return (
        <div>
            <PageTitle title={"This is APP component"}/>

            <Acc titleValue={"Menu"} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Acc titleValue={"Users"} collapsed={false}/>
            <PageTitle title={"My friends"}/>


        </div>
    );
}

function PageTitle(props:any) {
    return(<h1>{props.title}</h1>)
}


export default App;
