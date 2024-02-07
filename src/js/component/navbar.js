import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext"; // Importa el contexto donde tengas definida la lista de favoritos

export const Navbar = () => {
	const { store } = useContext(Context); // Obtén el estado del contexto
	console.log(store.favorites)
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/100px-Star_Wars_Logo..png" alt="Star Wars Logo" />
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title="Favoritos">
					{/* Verificar si hay favoritos antes de mapear */}
					{store.favorites.length > 0 ? (
						// Itera sobre la lista de favoritos y muestra cada uno como un Dropdown.Item
						store.favorites.map((favorite, index) => (
							<Dropdown.Item key={index} href={`#${favorite}`}>{favorite}</Dropdown.Item>
						))
					) : (
						<Dropdown.Item disabled>No hay favoritos</Dropdown.Item>
					)}
				</DropdownButton>
			</div>
		</nav>
	);
};

