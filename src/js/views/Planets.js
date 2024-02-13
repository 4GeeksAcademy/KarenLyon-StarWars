import React, { useContext, useRef, useEffect } from "react";
import "../../styles/home.css";
import Card from 'react-bootstrap/Card';
import "flickity/css/flickity.css";
import Button from 'react-bootstrap/Button';
import { Context } from "../store/appContext";
import Flickity from "flickity";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    const isFavorite = (name) => store.favorites.includes(name);


    const flickityRef = useRef(null);

    useEffect(() => {
        if (!store.planets.hasOwnProperty("results")) return console.log("no existe");

        flickityRef.current = new Flickity('.carousel-planets', {
            wrapAround: true
        });

        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, [store.planets]);

    const toggleFavorite = (name) => {
        if (isFavorite(name)) {
            actions.removeFavorite(name); // Pasar el nombre directamente
        } else {
            actions.addFavorites(name);
        }
    };

    if (!store.planets || !store.planets.results) {
        return <div>No hay resultados de personas</div>;
    }

    return (
        <div className="carousel carousel-planets">
            {store.planets.results.map((e) => (
                <Card key={e.uid} className="planets">
                    <Card.Img
                        className="imgPlanet"
                        variant="top"
                        src={`https://starwars-visualguide.com/assets/img/planets/${e.uid}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://th.bing.com/th/id/OIG3.oDE7UySGHN.uI4PBKYpl?w=1024&h=1024&rs=1&pid=ImgDetMain';
                        }}
                        alt="Imagen no encontrada"
                    />
                    <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Link className="btn btn-light btn-sm" to={`/planets/${e.uid}`}>Learn More</Link>
                        <Button
                            className={`like btn-sm ${isFavorite(e.name) ? 'active' : ''}`}
                            onClick={() => toggleFavorite(e.name)}
                        >
                            {isFavorite(e.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>)
}

