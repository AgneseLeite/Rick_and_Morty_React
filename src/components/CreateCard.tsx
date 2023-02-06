import React from "react";
// import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import { Results } from "./CharacterCards";
import { Link } from "react-router-dom";

const CreateCard: Results = ({ results, page }) => {

    let render;
    //console.log(results)

    if (results) {
        render = results.map(card => {
            return (
             <Link
                to={`${card.id}`}
                key={card.id} className="card">
                    <img src={card.image} alt="" />
                    <div className="card-info-container">
                        <h3 className="card-heading">{card.name}</h3>
                        <span className="row">
                            <span className="dot"
                            style={{
                                backgroundColor: (card.status === "Alive") ? "green" :
                                (card.status === "Dead")  ? "red" :
                                 "yellow"
                            }}
                            ></span>
                            <p>{card.status}--</p>
                            <p>{card.species}</p>
                        </span>
                        <p>Last known location: <br/> {Object.values(card.origin)[0]}</p>
                    </div> 
                </Link>
            )
        })
    } else {
        render = "No characters";
    }

    return (
        <div>{render}</div>
    )
};


export default CreateCard;