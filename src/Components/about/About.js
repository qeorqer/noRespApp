import React, {useState} from 'react';

let Randomizer = () => {
    let [options, setOptions] = useState([]);


    let addOption = (e) =>{
        let input = document.querySelector(".addStuff input");
        let form = document.querySelector(".addStuff form");

        e.preventDefault();
        setOptions([...options,input.value]);
        form.reset();
    }
    return (
        <div className="content">
            <h2>WTF!? </h2>
            <div className="aboutBlock">
                <p>Да просто прикольчики эти ваши в интернете</p>
            </div>
        </div>
    )
}
export default Randomizer;