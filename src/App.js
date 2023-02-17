import React from 'react'
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {HireButton} from "./hireButton/HireButton";
import {Form} from "./form/Form";
import {Footer} from "./footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <HireButton/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;
