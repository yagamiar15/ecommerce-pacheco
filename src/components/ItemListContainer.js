import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    
    useEffect(() => {
      if (!idCategoria) {
        const productosCollection = collection(db, "productos");
        const pedido = getDocs(productosCollection);
  
        pedido
          .then((res) => setProductos(res.docs.map((doc) => doc.data())))
          .catch((err) => toast.error("Error al cargar los productos"))
          .finally(() => setLoading(false));
      } else {
        const productosCollection = collection(db, "productos");
        const filtro = query(
          productosCollection,
          where("category", "==", idCategoria),
          where("price", ">", 60)
        );
        const pedido = getDocs(filtro);
  
        pedido
          .then((res) => setProductos(res.docs.map((doc) => doc.data())))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }     
    },[idCategoria]);

    if (loading) {
        return <h1>Cargando...</h1>;
      } else {
        if ((idCategoria !== "productos") && (idCategoria !== undefined)) {
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