document.getElementById("cepForm").addEventListener('submit', exibirDados)

function exibirDados(event){
    event.preventDefault()

    const cep = document.getElementById('cep').value;
    
    // url viacep.com.br/ws/01001000/json/
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resonse) =>(resonse.json()))
    .then((data) => {

        document.getElementById('result').innerText = data.uf;

        const resultDiv = document.getElementById('result');
        
        resultDiv.innerHTML = `CEP: ${data.cep}
        Logradouro: ${data.logradouro}
        Bairro: ${data.bairro}
        Cidade: ${data.localidade}
        Estado: ${data.uf}
        DDD: ${data.ddd}`
    })
    .catch(()=>{
        alert('Erro ao fazer essa solicitação')
    })
}

