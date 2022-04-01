import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const {idItem} = useParams();

  useEffect(()=>{

    toast.info("Cargando detalle...");

    const productosCollection = collection(db, "productos");
    const filtro = query(productosCollection, where("id", "==", Number(idItem)));
    const pedido = getDocs(filtro);

    pedido
      .then((res) => setItem(res.docs[0].data()))
      .catch((err) => toast.error("Error, intente nuevamente"))
      .finally(() => setTimeout(() => {
        toast.dismiss();
        setLoading(false);
      }, 1000));
    }, [idItem]);

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail item={item}/>
    )
  }
}

export default ItemDetailContainer