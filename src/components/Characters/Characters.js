import './Characters.css'
import React, { useState, useEffect } from 'react';

function Characters() {
    const url = "https://rickandmortyapi.com/api/character";
    const itemsPerPage = 10;
    let [currentPage, setCurrentPage] = useState(1);
    const [characters, updateCharacters] = useState([]);
    const maxPage = 2;
    const [pageItems, setPageItems] = useState([]);

    /**
     * Call API to get characters
     */
    const fetchCharacters = async () => {
        const apiCall = await fetch(url);
        const response = await apiCall.json();
        // Set the response to the characters value
        updateCharacters(response.results);
        // Set the first page items
        setPageItems(response.results.slice(currentPage * itemsPerPage), currentPage * itemsPerPage + itemsPerPage);
        saveCurrentPage();
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    /**
     * Print in console the selected character
     * @param {object} character 
     */
    const viewDetails = (character) => {
        console.log(character);
    }

    /**
     * Navigate to next page
     */
    const next = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
        getPageData();

    }

    /**
     * Navigate to prev page
     */
    const prev = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
        getPageData();
    }

    /**
     * get the data regarding the page selected
     */
    const getPageData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        setPageItems(characters.slice(begin, end));
        saveCurrentPage();
    }

    const saveCurrentPage = () => {
        if (pageItems.length >= 1) {
            localStorage.setItem("page", JSON.stringify(pageItems));
        }
    }


    return (
        <div className="container">
            <div className="pagination-ext">
                <button className="pagination-button" data-testid="back-button" onClick={() => prev()} disabled={currentPage === 1}><i className="fas fa-chevron-left"></i> PREV</button>
                <div className="pagination-number" data-testid="page-number">
                    <span>Page {currentPage}</span>
                </div>
                <button className="pagination-button" data-testid="next-button" onClick={() => next()} disabled={currentPage === 2}>NEXT <i className="fas fa-chevron-right"></i></button>
            </div>

            <div className="characters-ext" data-testid="characters-container">
                {pageItems.map((character) =>
                    <div key={character.id} className="character-item" data-testid="characters-item" onClick={() => viewDetails(character)}>
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
