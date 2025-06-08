import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
   
    return (
        <main>
            <div className="form">

                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Shut Up"
                    name="topText"
                />
                
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="and take my money"
                    name="bottomText"
                />

                <button 
                className="form--button"
                onClick={getMemeImage}
                >
                    Generate a new image 🖼️
                </button>

            </div>

            <div className="meme">
                <img className="meme--image" src={memeImage} alt="Generated meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    );
}