import React, {useEffect, useState} from 'react';
import './randomizer.scss';
import Ban from "../ban/ban";

let Randomizer = (props) => {
    let {banPoints,setBanPoints,options,setOptions,selected,setSelected,showAnswer,setShowAnswer, timer, setTimer} = props;

    //cleaning the answers results
    useEffect(() => {
        setShowAnswer(false);
    }, [options])

    //timer
    useEffect(() => {
        let сounter;
        if (timer > 0) {
            сounter = setTimeout(() => setTimer(c => c - 1), 1000);
        }

        return () => {
            if (сounter) {
                clearTimeout(сounter);
            }
        };
    }, [timer]);

    //adding option
    let addOption = (e) => {
        e.preventDefault();
        setOptions([...options, e.target[0].value]);
        e.target.reset();
    }

    //picking the option randomly
    let selectOption = () => {
        setSelected("");
        switch (options.length) {
            case 0:
                setSelected("Ага, давай выбирай из нуля вариантов, иди отсюда!");
                setShowAnswer(true);
                setBanPoints(banPoints + 1);
                break;
            case 1:
                setSelected("Что за неуважение, выбери еще чет или в чс летишь");
                setShowAnswer(true);
                setBanPoints(banPoints + 1);
                break;
            default:

                setShowAnswer(true);
                setTimer(4);
                setTimeout(() => {
                    let random = Math.floor(Math.random() * options.length);
                    setSelected(options[random]);
                }, 4000)

                break;
        }
    }
    return banPoints >= 3 ? <Ban/> :(
        <div className="content">
            <h2>Штука для перекладывания ответственности </h2>
            <div className="randomHolder">
                <div className="addStuff">
                    <p>Тут вводить вариант</p>
                    <form action="" onSubmit={addOption}>
                        <input required type="text" placeholder="Прям даже сюда вводить"/>
                        <button>Добавить</button>
                    </form>
                    <p>Кстати кстати кстати, лучше пару раз проделать эту операцию, а то выбор из одного варианта так-то
                        не очень, и воообще тогда всё ломается</p>
                </div>
                <div className="stuffList">
                    <p>Это список вариантов фигни</p>
                    {
                        options.length ? (
                            <ol>
                                {
                                    options.map((el, key) => <li key={key}>{el}</li>)
                                }
                            </ol>
                        ) : <p>Пока еще нет фигни(</p>
                    }

                </div>
            </div>
            <div className="selectionBlock">
                <p>Жми, чтобы выбрать что-нибудь</p>
                <button onClick={selectOption}>Тыкай это вот</button>


                <div className="selectionResult" style={{display: showAnswer ? 'flex' : 'none'}}>
                    {timer > 0 && <p>Раскрытие интргии через {timer}</p>}

                    {
                        selected && (options.length > 1 ? <div><span>Ответ, что ли: </span>
                            <p>{selected}</p></div> : <p>{selected}</p>)}
                </div>


            </div>

        </div>

    )
}
export default Randomizer;