import Atdm from "../services/ArtisansDuMois";

const Accueil = ()=>{
    
    return (
        <>
        <header className="mb-5 pb-5">

        </header>
        <main className=" container mt-2  pt-5 me-auto">
            <article>
            <h3 className="titres">Comment trouver mon artisan?</h3>
            <ol className="textes">
                <li>Choisir la catégorie d’artisanat dans le menu.</li>
                <li>Choisir un artisan. </li>
                <li>Le contacter via le formulaire de contact. </li>
                <li>Une réponse sera apportée sous 48h. </li>
            </ol>
            </article>
            <br></br>
            <br></br>
            <article>
                <h3 className="titres">Les artisans du mois</h3>
                <Atdm/>
            </article>
        </main>
        </>
    )
}
export default Accueil;