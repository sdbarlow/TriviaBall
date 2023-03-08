import React from 'react'
import { useState } from 'react'
import './Profile.css'
import CharacterCard from "./CharacterCard";
import { Link } from 'react-router-dom'

function Profile({Characters, whenSubmit, handleClick, number}){
    const [value, setValue] = useState("")

    const renderIcons = Characters.map((char)=> {return(<CharacterCard number={number} handleClick={handleClick} id={char.id} key={char.id} image={char.image}/>)})

    function handleSubmit(e){
        e.preventDefault();
        whenSubmit(value)
    }

    return(
    <div className="parent">
        <Link to="/"><span id="home" className="nes-text is-primary">Back</span></Link><span id="header" className="nes-text is-primary">Choose A Character</span>
        <div className="grid">
            {renderIcons}
                <img className="image" src="../Images/plusSign.png" onClick={() => document.getElementById('dialog-default').showModal()}/>
                <dialog class="nes-dialog" id="dialog-default">
                        <form method="dialog" onSubmit={handleSubmit}>
                        <p class="title">Enter An Image</p>
                        <textarea value={value} onChange={(e) => setValue(e.target.value)} id="textarea_field" class="nes-textarea"></textarea>
                        <menu class="dialog-menu">
                            <button class="nes-btn">Cancel</button>
                            <button type="submit" class="nes-btn is-primary">Confirm</button>
                        </menu>
                        </form>
                    </dialog>
            </div>
        </div>
    )
}

export default Profile