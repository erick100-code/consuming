const URL = 'https://dummyjson.com/carts'// URL DA API PUBLICA

async function consumirApi() {// FUNÇÃO ASINCRONA CHAMA API
    const res = await fetch(URL)// VAR (RES) = A RESPOSTA DA URL QUE É A (API)
   
    if (res.status === 200) {// SE ESTIVE TUDO OK (200) EXECUTA BLOCO
        const obj = await res.json()// OBJ RECEBE A RESPOSTA DA API E JONSON
        console.log(obj)// MOSTRA O JSON NO CONSOLE
        
        const conteiner = document.getElementById('data')
        
        /*obj.carts.forEach(cart => {
            const div = document.createElement('div')

            div.innerHTML = `<h1>total: ${cart.total}</h1>`
            
            conteiner.appendChild(div)
        })
        */

        const div = document.createElement('div')

        div.innerHTML = `o total é de ${obj.carts[29].id}`
        conteiner.appendChild(div)
    } else {
        console.log("erro na requisição")
    }
}

consumirApi()

// aqui criamos um app === api e consumimos ela. poderiamos ter usado nossa própia api CRUD se estivesse publica conectada no RENDER.COM