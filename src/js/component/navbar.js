import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const{store}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src="https://th.bing.com/th/id/OIP.EbsgXjeSEBll_YW50tZ4BQHaEe?w=291&h=180&c=7&r=0&o=5&pid=1.7" />
			<div className="nav-item dropdown">
				<a className="nav-link dropdown-toggle"
					href="#" role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false" >
					Favoritos </a>
				<ul className="dropdown-menu" >
					{store.favoritos.map((item,id)=>(
						<li key={id}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
