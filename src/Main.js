import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";


const Main = () => {
  return (
    <main className="main">
      <ItemListContainer user="Usuario" />
      <ItemCount stock={5} inicial={1} />
    </main>
  );
};

export default Main