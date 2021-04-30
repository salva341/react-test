import './Characters.css'
import React, { useState, useEffect } from 'react';

function Characters() {
    const url = "https://rickandmortyapi.com/api/character";
    const [characters, updateCharacters] = useState([]);

    /**
     * Call API to get characters
     */
    const fetchCharacters = async () => {
        const apiCall = await fetch(url);
        const response = await apiCall.json();
        // Set the response to the characters value
        updateCharacters(response.results);
    }

    useEffect(() => {
        fetchCharacters();
    }, [])

    const viewDetails = (character) => {
        console.log(character);
    }

    return (
        <div className="container">
            <div className="pagination-ext">
                <button className="pagination-button" data-testid="back-button">BACK</button>
                <div className="pagination-number" data-testid="page-number">
                    <span>Page 1</span>
                </div>
                <button className="pagination-button" data-testid="next-button">NEXT</button>
            </div>

            <div className="characters-ext" data-testid="characters-container">
                {characters.map((character) =>
                    <div key={character.id} className="character-item" onClick={() => viewDetails(character)}>
                        <div className="character-avatar">
                            <img src={character.image} className="avatar" alt=""></img>
                        </div>
                        <div className="character-name">
                            {character.name}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Characters
