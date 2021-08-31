// TEMPLATE GENERATOR
function generateCharacterTemplate(character) {
	return `
    <div class="col-4 p-5">
        <div class="card shadow text-white bg-dark">
            <img
                src="${character.image}"
                class="card-img-top"
            />
            <div class="card-body text-center">
                <h5 class="card-title">
                    ${character.name}
                </h5>
                <p class="card-text">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-dark"><b>State: </b>${character.state}</li>
                        <li class="list-group-item list-group-item-dark"><b>Specie: </b>${character.specie}</li>
                        <li class="list-group-item list-group-item-dark"><b>Gender: </b>${character.gender}</li>
                        <li class="list-group-item list-group-item-dark"><b>Type: </b>${character.type}</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    `;
}

// DATA
const abradolfo = {
	urlImg: 'https://rickandmortyapi.com/api/character/avatar/597.jpeg',
	name: 'Abradolf Lincler',
	state: 'Alive',
	specie: 'Human',
	gender: 'Male',
	type: 'Soulless Puppet',
};

// DOM INSERT
const charactersDom = document.querySelector('#characters');
// charactersDom.innerHTML += generateCharacterTemplate(abradolfo);
// charactersDom.innerHTML += generateCharacterTemplate(abradolfo);
// charactersDom.innerHTML += generateCharacterTemplate(abradolfo);


//peticion
// const peticion = fetch('https://rickandmortyapi.com/api/character/')

// peticion
// .then(res => res.json())
// .then(data => {
//     console.log(data.results)
//     data.results.map((item) => {
//         charactersDom.innerHTML += generateCharacterTemplate(item);
//     })
// })

const traerDatos = async () => {

    try{
        const response = await fetch('https://rickandmortyapi.com/api/character/')
        const data = await response.json()
    
        data.results.map((item) => {
            charactersDom.innerHTML += generateCharacterTemplate(item);
        })
    }catch(error){
    }
    
}

traerDatos()