import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const Productos = [{
    id: 1,
    title: "Ejemplo 1",
    price: 5,
  },
  {
    id: 2,
    title: "Ejemplo 2",
    price: 10,
  },
  {
    id: 3,
    title: "Ejemplo 3",
    price: 15,
  }
];

const [item, setData] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);
useEffect(()=>{
  setIsLoaded(false);
  setTimeout(()=>{
    setData(Productos);
    setIsLoaded(true);
  },2000);
  }, [])

  return (
    <div>
      {isLoaded ? <ItemList item={item}/>:<div>LOADING ITEMS...</div>} 
    </div>
  );
};

export default ItemListContainer;