import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { People } from "./People";
import { Vehicles } from "./Vehicles";
import { Planets } from "./Planets";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const CarouselContainer = () => {
    const { store } = useContext(Context);

    useEffect(() => {
        // Verificar si todos los datos necesarios están disponibles
        if (store.people.hasOwnProperty("results") && store.vehicles.hasOwnProperty("results") && store.planets.hasOwnProperty("results")) {
            // Inicializar Flickity una vez que los datos estén disponibles
            const flickityRef = new Flickity('.carousel', {
                wrapAround: true
            });

            // Retornar una función de limpieza para destruir Flickity cuando el componente se desmonte
            return () => {
                flickityRef.destroy();
            };
        }
    }, [store.people, store.vehicles, store.planets]); // Dependencias: store.people y store.vehicles

    return (
        
            <div className="carousel">
                <People />
     
                <Vehicles />
    
                <Planets />
            </div>
        

    );
}

export default CarouselContainer;