import { useState } from "react";

const Counter = (props) => {


    //const [DarkMode, setDark] = useState(false)





    const [contador, setContador] = useState(10);



    const ClickConsoleMore = () => { setContador(contador + 1) };

    const ClickConsoleLess = () => { setContador(contador - 1) };

    const Reset = () => { setContador(contador * 0) };

    const [DarkMode, setDarkMode] = useState(false);

    const SwitchDark = () => {

        setDarkMode(!DarkMode);

        console.log(DarkMode)

    };


    return (

        <>
            <p> Dicen que tengo {props.edad} </p>

            <button onClick={ClickConsoleLess}>-</button>

            <button onClick={ClickConsoleMore}>+</button><br>


            </br>

            <button onClick={Reset}>Reset</button>

            <button onClick={SwitchDark}>{DarkMode.toString()}</button>

            <p><button>{contador}</button></p> </>
    )
}

export default Counter