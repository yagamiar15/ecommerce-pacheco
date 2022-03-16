import Header from "./components/Header"
import Main from "./components/Main"
import { ToastContainer } from "react-toastify"
import { BrowserRouter } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Main />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App