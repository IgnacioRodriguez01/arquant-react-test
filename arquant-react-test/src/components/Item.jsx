import { useState } from "react";

const Item = ({ item, fn }) => {
    const {name, height, mass} = item;

    return <li className="list-group-item bg-white d-flex justify-content-between align-items-center mb-2 border rounded">
        <div>
            <p className="fs-4 mb-1"><span className="fw-bold">Nombre:</span> {name}</p>
            <p className="mb-0"><span className="fw-bold">Altura:</span> {height} cm</p>
            <p className="mb-2"><span className="fw-bold">Peso:</span> {mass} kg</p>
        </div>
        
        <button onClick={() => fn(item)} type="button" className="btn btn-danger fw-bold" style={{height:"2.5rem"}}>Borrar</button>
    </li>
};

export default Item;