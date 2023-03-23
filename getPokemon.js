import { writeFile } from 'fs/promises'

class getPokeData {
    async getPoke(){
        const pokeList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2")//criando uma promessa
        
        pokeList.json().then(resolve => {//transformando em objeto e criando uma then para aguardar
            writeFile('pokedex.json', JSON.stringify(resolve.results, null, 2));//escrevendo o que pegou da api em um json, já vai ser executado de forma assincrona
        })

    }
}

async function main(){
    new getPokeData().getPoke()
}


main()