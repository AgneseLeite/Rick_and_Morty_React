// import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Results } from "./CharacterCards";



const IndividualCard = () => { // ???  const IndividualCard = ({ match }) => 

    let { id } = useParams();
    const [cardData, setCardData] = useState<Results[]>([]);
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?id=${id}`).then(({ data }) => {
            setCardData(data);
            // console.log(data)
        });
    }, [])

    return (

        <div className="card">
            <h2>Character page with id: {id}</h2>


        </div>
    )
}
                    
export default IndividualCard;


