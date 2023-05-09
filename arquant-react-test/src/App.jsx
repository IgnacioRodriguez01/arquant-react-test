import { useEffect, useState } from "react";
import useAPI from "./hooks/useAPI.jsx";

import Swal from "sweetalert2";

import Header from "./components/Header.jsx";
import Loading from "./components/Loading.jsx";
import Item from "./components/Item.jsx";

function App() {
    const { list, setList, loading, setRefresh } = useAPI(
        "https://swapi.dev/api/people"
    );

    useEffect(() => {
        if (!loading && list.length == 0) {
            refresh();
        }
    }, [list]);

    const deleteUser = (user) => {
        const arr = list.filter((el) => el !== user);
        setList(arr);
    };

    function renderList() {
        return list.map((el, index) => (
            <Item item={el} key={index} fn={deleteUser} />
        ));
    }

    function refresh() {
        Swal.fire({
            text: "No hay más personajes a mostrar. ¿Volver a cargar datos?",
            icon: "error",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                setRefresh(true);
            }
        });
    }

    return (
        <>
            <Header />
            <main className="d-flex flex-column align-items-center bg-light">
                <h1 className="fw-bold mb-4">Lista de Personajes</h1>
                <div
                    className={`container-sm d-flex flex-column align-items-center px-2 ${
                        !loading && list.length > 0 ? "overflow-y-scroll" : ""
                    }`}
                    style={{ maxWidth: "70vw", height: "75vh" }}
                >
                    <ul className="list-group w-100">
                        {list.length > 0 ? (
                            renderList()
                        ) : loading ? (
                            <Loading />
                        ) : (
                            <div className="alert alert-danger">
                                No hay más personajes.
                            </div>
                        )}
                    </ul>
                </div>
            </main>
        </>
    );
}

export default App;
