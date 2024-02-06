import React, { useContext,useRef, useEffect} from "react";
import "../../styles/home.css";
import Card from 'react-bootstrap/Card';
import "flickity/css/flickity.css";
import Button from 'react-bootstrap/Button';
import { Context } from "../store/appContext";
import Flickity from "flickity";

 export const Planets = () => {
	const { store, actions } = useContext(Context);
     
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

    if (!store.planets || !store.planets.results) {
        return <div>No hay resultados de personas</div>;
    }

    return (
			<div className="carousel carousel-planets">
			{store.planets.results.map((e) => (
					<Card key={e.uid} style={{ width: '18rem' }} className="planets">
						<Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${e.uid}.jpg`} />
						<Card.Body>
							<Card.Title>{e.name}</Card.Title>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
			))}
			</div>)
            }

		