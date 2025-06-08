export default function Meme() {
    return (
        <main>
            <form className="form">

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

                >
                    Generate a new image 🖼️
                </button>

            </form>
        </main>
    );
}