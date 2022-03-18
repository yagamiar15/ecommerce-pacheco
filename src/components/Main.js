import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from './CartWidget';

const Main = () => {
    return (
        <Container as="main" fluid>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/cartWidget" element={<CartWidget/>} />
                <Route path="/category/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/producto/:idItem" element={<ItemDetailContainer/>} />
            </Routes>
        </Container>
    );
}

export default Main;