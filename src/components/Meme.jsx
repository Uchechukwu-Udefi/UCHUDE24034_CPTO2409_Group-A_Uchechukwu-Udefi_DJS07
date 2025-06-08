import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }

    return (
        <main>
            <div className="form">

                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Shut Up"
                />
                
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="and take my money"
                />

                <button 
                className="form--button"
                onClick={getMemeImage}
                >
                    Generate a new image 🖼️
                </button>

            </div>

            <img className="meme--image" src={memeImage} alt="Generated meme" />

        </main>
    );
}