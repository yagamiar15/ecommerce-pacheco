import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import productos from "./productos.json"

console.log(productos)

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    
    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
        .then((response)=>{
            return response.json()
        })
        .then((resultado)=>{
            setProductos(resultado)
        })
        .catch(()=>{
            toast.error("Error al cargar los productos")
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[idCategoria]);

    if (loading) {
        return <h1>Cargando...</h1>;
      } else {
        if ((idCategoria != "productos") & (idCategoria != undefined)) {
          let productosFiltrados = productos.filter(function (obj) {
            return obj.category === `${idCategoria}`;
          });
          return <ItemList productos={productosFiltrados} />;
        } else {
          return <ItemList productos={productos} />;
        }
      }
    };

export default ItemListContainer;