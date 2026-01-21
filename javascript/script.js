const pais = document.getElementById('pais')
const bandeira = document.getElementById('bandeira')
const OK_CODE = '200'
const NOTFOUND_CODE = '404'

async function buscarPais() {
    if (pais.value == 0) {
        alert('Preencha o campo!')
    } else {
        try {
            let resposta = await fetch(`https://restcountries.com/v3.1/translation/${pais.value}`)
            if (resposta.status == NOTFOUND_CODE) {
                throw new Error('O país digitado não foi encontrado!')
            }
            if (resposta.status != OK_CODE) {
                throw new Error('Houve um erro no processamento.')
            }
        let info = await resposta.json()
        let paisDado = info[0]
        bandeira.src = paisDado.flags.png
        }
        catch (error) {
            alert(error.message)
        }
        
    }
}