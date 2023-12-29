import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const Personajes = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])
    return (
        <div className="container">
            <h1>personajes</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.personajes.map((item, id) => (


                        <div class="card" key={id} style={{ width: "18rem", flex: "none", margin: "10px" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id+1)+".jpg"} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">gender: {item.gender}</p>
                                <p class="card-text">eye color: {item.eye_color}</p>
                                <a href="#" class="btn btn-primary">more info</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
