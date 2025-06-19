import { Link } from "react-router-dom";


const Error = ()=>{
    
    return (
    <>
        <div id="messageError">404</div>
        <div className="texteError">PAGE NON TROUVÉE</div>
        <div className="texteError mt-4">LA PAGE QUE VOUS RECHERCHEZ</div>
        <div className="texteError mb-5">EST ACTUELLEMENT INDISPONIBLE</div>
        <div className="text-end mb-5 me-5"><Link to="/">Retour à la page d'accueil</Link></div>

    </>
    )
    
}


export default Error;
