import React, { useEffect, useState } from "react";
import ItemList from './ItemList';




const ItemListContainer = () => {

    // estado para almacenar los datos de productos
    const [data, setData] = useState([]);

    // estado para constrolar si la carga esta en proceso
    const [loading, setLoading] = useState(true)

    // estado para manejar los errores

    const [error, setError] = useState("");

    // Datos de productos ( simulados)

    const productos = [
        { id: 1, name: "Hermione", price: 10.99, stock: 50 },
        { id: 2, name: "Luna", price: 19.99, stock: 30 },
        { id: 3, name: "Snape", price: 5.99, stock: 100 },
        { id: 4, name: "Charmander", price: 25.99, stock: 20 },
        { id: 5, name: "Pidgeotto", price: 14.49, stock: 60 },
        { id: 6, name: "Baby Yoda", price: 8.99, stock: 75 },
    ]

    // Funcion que simula una llamada asincrona a una API o servidor


    const getProductos = () => new Promise((resolve, reject) => {
        let status = 200; // Simulando que esta es la respuesta que quiero hardcodeada
        setTimeout(() => {
            if (status === 200) {
                // como es real, es true, le digo a resolve que me traiga los productos , resolvemos la promesa con productos
                resolve(productos);
            } else {
                // Rechazamos la promesa con un mensaje de error, aca entra en caso de que no se 200===200
                reject("Ups, algo salio mal");
            }
        }, 2000);
    });


    //useEffect se ejecuta cuando el componente se monta ([] indica que se ejecuta una vez)
    useEffect(() => {
        // llamamo a getProducto que simula una llamada asincrona

        getProductos()
            .then((response) => {
                // Cuando la promesa se resuelve bien, actualiza el estado de data, con .then estoy llamando a la resolucion
                setData(response);
            })

            .catch((error) => {
                // Si hay un error, actualizamos el estado erroe con un mensaje, que en principio ya lo declare que seria un string
                setError("Ups, algo salio mal");
            })

            .finally(() => {
                // Independiente del resultado, marcamos la carga completa , como que completo el ciclo
                setLoading(false);
            });
    }, []); // el efecto se ejecuta una vez al montar el componente por la dependencia declarada pero vacia

    return (
        <div >
            {loading && <p> Cargando...</p>}
            {error && <p> {error}</p>}
            {
                // mapeamos los datos de productos ( cuando se resolvio todo exitosamente) y renderizamos cada uno usando el componente ItemList
                data.map((el) => (
                    <ItemList key={el.id} product={el}/>
                ))
            }

        </div>
    )
}

export default ItemListContainer;