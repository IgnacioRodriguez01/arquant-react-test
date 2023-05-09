import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useAPI = (url) => {
    const [list, setList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setList(json.results);
            setLoading(false);
        })
        .catch((err) => {
            Swal.fire({
                title: "Error",
                text: "No se pudo obtener los datos de la API.",
                icon: "error",
                confirmButtonText: "Continuar",
            });
        });
        setRefresh(false);
    }, [url, refresh]);
    
    return { list, setList, loading, setRefresh };
};

export default useAPI;