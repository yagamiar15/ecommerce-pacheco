import { Link } from "react-router-dom";

const BuySuccess = () => {
    return (
        <div className="div__buy__success">
            <h1>Compra realizada con éxito</h1>
            <img src="https://lh3.googleusercontent.com/p/AF1QipP0j9mpiSrsDf_SlLBdynT1p2Si9Hek-sfwNIZW=w1080-h608-p-no-v0"></img>
            <Link to ="/"><button className="button__back">Volver al Inicio</button></Link>
        </div>
        )
    }

export default BuySuccess;