import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {idItem} = useParams()

  useEffect(()=>{

    toast.info("Cargando detalle...");

    fetch(`https://fakestoreapi.com/products/${idItem}`)
    .then((response)=>{
      setTimeout(2000);
      toast.dismiss();
      return response.json()
    })
    .then((respuesta)=>{
      setItem(respuesta)
    })
    .catch(()=>{
      toast.error("Error al cargar el producto")
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])

  if(loading){
    return <h1>Loading...</h1>
  }else{
    return (
      <ItemDetail item={item}/>
    )
  }
}

export default ItemDetailContainer