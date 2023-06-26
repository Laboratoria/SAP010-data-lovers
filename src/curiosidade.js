const buttonInformation = document.getElementById("chikorita");
const newHtml = document.getElementsByClassName("curiosities-box");


function showCuriosities(curiosities) {
    return `
        <div id="all-content"> 
            <div id="calcuo-agregado">
                <p>bananinha</p> 
            </div>

            <div id="pokeball-one">
                <img src="" alt="Imagem do Pokémon">
            </div>

            <div id="pokeball-two">
                <p>Informações</p> 

                <div id="pokeball-three">
                    <p>Informação</p>  
                </div>
            </div>
        </div>
    `;
}

buttonInformation.addEventListener("click", function() {
    curiositiesBox.innerHTML = showCuriosities();
    console.log("Click")
});

    
