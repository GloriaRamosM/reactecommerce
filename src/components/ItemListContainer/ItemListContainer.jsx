import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import "../ItemListContainer/ItemListContainer.css";




const ItemListContainer = () => {

    // estado para almacenar los datos de productos
    const [data, setData] = useState([]);

    // estado para constrolar si la carga esta en proceso
    const [loading, setLoading] = useState(true)

    // estado para manejar los errores

    const [error, setError] = useState("");

    // Datos de productos ( simulados)

    const productos = [
        { id: 1, name: "Hermione", price: 10.99, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/003/029/560/products/funko-pop-harry-potter-hermione-granger-1131-30fcb935fdf6a044b116826950842502-640-0.jpg"},
        { id: 2, name: "Luna", price: 19.99, stock: 30 , img: "https://http2.mlstatic.com/D_NQ_NP_612191-MLA43657068710_102020-O.webp" },
        { id: 3, name: "Snape", price: 5.99, stock: 100, img: "https://i.pinimg.com/564x/9c/d5/7b/9cd57b7498c5bd06d079885608596b03.jpg"},
        { id: 4, name: "Charmander", price: 25.99, stock: 20 , img: "https://i0.wp.com/animalscollectibles.com.ar/wp-content/uploads/2023/03/char.jpg?fit=1000%2C1000&ssl=1" },
        { id: 5, name: "Pidgeotto", price: 14.49, stock: 60, img: "https://http2.mlstatic.com/D_NQ_NP_780270-MLA49511308881_032022-O.webp" },
        { id: 6, name: "Baby Yoda", price: 8.99, stock: 75, img: "https://funko.com.ar/wp-content/uploads/2023/03/405-grogu-2.jpg" },
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
        <div className="container">
            <h1 style ={{ textAlign: "center"}}>Productos</h1>
            {
                // mapeamos los datos de productos ( cuando se resolvio todo exitosamente) y renderizamos cada uno usando el componente ItemList
                data.map((el) => (
                    <ItemList key={el.id} product={el} />
                ))
            }

        </div>
    )
}

export default ItemListContainer;

