import React, {useState} from "react";

function Counter (){
    const [count, setCount] = useState(0);

    function handleClick01(){
        setCount(count + 1);
    }
    function handleClick02(){
        setCount(count - 1);
    }

    return (
        <div className="usual">
            <p>You clicked {count} times</p>
            <button onClick={handleClick01}>
                +1
            </button>
            <button onClick={handleClick02}>
                -1
            </button>
        </div>
        
    );
}

export default Counter;