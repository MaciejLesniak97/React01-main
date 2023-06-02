import React, {useState} from "react";
import './style.css';

function FontSize (){
    const [fontSize, setFontSize] = useState(15);

    return (
        <div className="usual">
            <p>Diablo IV</p>
            <button onClick={() => setFontSize(fontSize + 1)}>
                Devour me
            </button>
            <button onClick={() => setFontSize(fontSize - 1)}>
                Puke me
            </button>
        <p style={{fontSize: `${fontSize}px`}}>
        “Diablo’s Lilith, known more commonly as The Queen of the Succubi, is at heart, a demon who is caught in the endless war between the Burning Hells and High Heavens, Lilith sought to forge a new realm between the two that would provide an escape from the toils of ceaseless war – a sanctuary, if you will. '”
        </p>

        </div>

    );
}

export default FontSize;