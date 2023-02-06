import React from "react";
// import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateCard from "./CreateCard";


export interface Results {
   id: number;
   image: string;
   name: string;
   species: string;
   status: string;
   origin: string;
   
}


const CharacterCards: React.ElementType = () => {
    const [characterData, setCharacterData] = useState<Results[]>([]);
    let [ pageNumber, setPageNumber ] = useState(1);
    let { results } = characterData;


   const mainApi = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    
    useEffect(() => {
        axios.get(mainApi).then(({ data }) => {
            setCharacterData(data);
        });
    }, [mainApi])

    const handleLoad = () => {
        setPageNumber(pageNumber + 1);
    }

    return (
        <>
            <h2>Characters</h2>
            <div className="container">
                <CreateCard page="/CharacterCards/" results={results}/>
                <div className="load-more-text">Load more 🔻</div>
                <button className="load-btn" onClick={handleLoad}>
                    <img src="src/assets/head.jpg" alt="" className="head-btn"/>
                </button> 
            </div>
        </>
    );
}

export default CharacterCards;


