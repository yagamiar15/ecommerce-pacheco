import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const {idItem} = useParams();

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
      toast.error("Error, intente nuevamente")
    })
    .finally(()=>{
      setLoading(false)
    });

  },[])

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail item={item}/>
    )
  }
}

export default ItemDetailContainer