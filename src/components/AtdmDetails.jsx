function AtdmDetails ({artisan}) {
    
    return (

        <>
            <div>Nom: {artisan.nom}</div>
            <div data-coreui-toggle="rating" data-coreui-value={artisan.note}></div>
            <div>Spécialité: {artisan.specialite}</div>
            <div>Localisation: {artisan.ville}</div>
        </>
    )
}

export default AtdmDetails