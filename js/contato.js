'use strict'

const nome = 'Nicolas'


async function getContatos(){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'

    const response = await fetch(url) // (aguarda) faz uma requisição pra url

    const data = await response.json() // espera o response executar o json com os dados

    console.log('winter came by my bedroom today')

    return data 
}

async function getContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const response = await fetch(url)

    const data = await response.json()

    console.log('falling in rows and covering the lane')

    return data
}

async function postContato(contato){ // tem a função d comunicar-se com o servidor
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const options = { // http só aceita string
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok // ou status (q retorna o status_code)
}

async function putContato(id, contato){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = { // http só aceita string
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok // ou status (q retorna o status_code)
}

async function deleteContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.ok
}

const novoContato = {
    "nome": "Silva Nicolas",
    "celular": "11 944810533",
    "foto": "../img/nicolas.png",
    "email": "nicolas@gmail.com",
    "endereco": "Rua Laura, 40", 
    "cidade": "Barueri"
}


// function mensagem () {
//     alert('Oi!')
// }