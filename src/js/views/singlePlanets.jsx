import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.obtenerPlanetaIndividual(params.theid)
    }, [])
    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: " 1000px" }}>
                <div className="row g-0">
                    <div className="col-md-4">

                        {params.theid == 1 ?
                            <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="img-fluid rounded-start" alt="..." /> :
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
                        }
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="fs-1 card-title">
                                {store.planeta.name}
                            </h5>
                            <p className="card-text fs-3">climate: {store.planeta.climate}</p>
							<p className="card-text fs-3">population: {store.planeta.population}</p>
							<p className="card-text fs-3">terrain: {store.planeta.terrain}</p>
							<p className="card-text fs-3">gravity: {store.planeta.gravity}</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};
