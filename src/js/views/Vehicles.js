import React, { useContext, useRef, useEffect } from "react";
import "../../styles/home.css";
import Card from 'react-bootstrap/Card';
import "flickity/css/flickity.css";
import Button from 'react-bootstrap/Button';
import { Context } from "../store/appContext";
import Flickity from "flickity";
import { Link } from "react-router-dom";


export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    const isFavorite = (name) => store.favorites.includes(name);

    const flickityRef = useRef(null);


    useEffect(() => {
        if (!store.vehicles.hasOwnProperty("results")) return console.log("no existe");

        flickityRef.current = new Flickity('.carousel-vehicles', {
            wrapAround: true
        });

        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, [store.vehicles]);


    const toggleFavorite = (name) => {
        if (isFavorite(name)) {
            actions.removeFavorite(name); // Pasar el nombre directamente
        } else {
            actions.addFavorites(name);
        }
    };

    if (!store.vehicles || !store.vehicles.results) {
        return <div>No hay resultados de vehículos</div>;
    }
    return (
        <div className="carousel-vehicles">
            {store.vehicles.results.map((e) => (
                <Card key={e.uid} className="vehicles">
                    <Card.Img className="imgAll" variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${e.uid}.jpg`} />
                    <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Link className="btn btn-light btn-sm" to={`/vehicles/${e.uid}`}>Learn More</Link>
                        <Button
                            className={`like btn-sm ${isFavorite(e.name) ? 'active' : ''}`}
                            onClick={() => toggleFavorite(e.name)}
                        >
                            {isFavorite(e.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};
