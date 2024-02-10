import React, { useContext, useRef, useEffect } from "react";
import "../../styles/home.css";
import Card from 'react-bootstrap/Card';
import "flickity/css/flickity.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import Button from 'react-bootstrap/Button';

export const People = () => {
    const { store, actions } = useContext(Context);


    const flickityRef = useRef(null);

    useEffect(() => {
        if (!store.people.hasOwnProperty("results")) return console.log("no existe");

        flickityRef.current = new Flickity('.carousel-people', {
            wrapAround: true
        });

        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, [store.people]);

    if (!store.people || !store.people.results) {
        return <div>No hay resultados de personas</div>;
    }



    return (
        <div className="carousel carousel-people">
            {store.people.results.map((element) => (
                <Card key={element.uid} className="people">
                    <Card.Img className="imgAll" variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Link className="btn btn-light btn-sm" to={`/character/${element.uid}`}>Learn More</Link>
                        <Button className="like btn-sm" onClick={() => { actions.addFavorites(element.name) }} variant="danger"><i className="far fa-heart"></i></Button>

                    </Card.Body>
                </Card>
            ))
            }
        </div>)
}


