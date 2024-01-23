import { useState } from "react"

import { Link } from "react-router-dom";
import ButtonComponent from "../components/button/button";


const Counter = () => {

    const [counterState, setCounterState] = useState(0)

    function decrement(){
        setCounterState(counterState-1)
    }

    function increment(){
        setCounterState(counterState+1)
    }

    return(
        <div className="container text-center">
                <h1>{counterState}</h1>
                <ButtonComponent action={decrement} title={"-"} />
                <ButtonComponent action={increment} title={"+"} />
                
                <br />
                <Link to={"/second-page"}>Second Page</Link>
        </div>
    )
}

export default Counter