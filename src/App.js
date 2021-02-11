import React, {useState} from 'react';
import Header from './Components/header/Header';
import Randomizer from "./Components/randomizer/Randomizer";
import About from "./Components/about/About";
import {Route, Switch} from "react-router-dom";

function App() {
    //states
    let [options, setOptions] = useState([]);
    let [selected, setSelected] = useState("");
    let [showAnswer, setShowAnswer] = useState(false);
    let [timer, setTimer] = useState(0);
    let [banPoints, setBanPoints] = useState(0);

    return (
        <div className="App">
            <Header/>
            <main className="inner">
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/'} exact>
                        <Randomizer banPoints = {banPoints} setBanPoints = {setBanPoints} options = {options} setOptions = {setOptions} selected={selected} setSelected={setSelected} showAnswer={showAnswer} setShowAnswer = {setShowAnswer} timer={timer} setTimer={setTimer}/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + '/about'}>
                        <About/>
                    </Route>
                </Switch>
                <div className={"banScore" + (banPoints > 0 ? " showScore" : "")}>
                    {
                        banPoints === 2 ? <p>Один шаг может изменить жизнь</p> :<p>Шагов до бана: <span>{3 - banPoints}</span></p>
                    }

                </div>
            </main>
        </div>
    );
}

export default App;
