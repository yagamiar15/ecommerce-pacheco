import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from './CartWidget';
import Cart from './Cart'

const Main = () => {
    return (
        <Container as="main" fluid>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/cartWidget" element={<CartWidget/>} />
                <Route path="/category/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/producto/:idItem" element={<ItemDetailContainer/>} />
                <Route path="/category/productos" element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Container>
    );
}

export default Main;