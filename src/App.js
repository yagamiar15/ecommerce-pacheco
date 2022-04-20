import NavBar from "./components/NavBar";
import Main from "./components/Main"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext"
import Footer  from "./components/Footer";

const App = () => {

    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Main />
            <Footer />
            <ToastContainer />
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default App