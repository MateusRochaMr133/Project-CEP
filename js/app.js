document.querySelector('#cep').addEventListener('blur', async (event) => {

    event.preventDefault();

    let inputcep = document.querySelector('#cep').value;
   
    if (inputcep !== '') {
        
        let results = await fetch(`https://viacep.com.br/ws/${inputcep}/json/`)

        let json = await results.json();

        if ( json.erro === true) {
            alert('CEP Invalido')
        }

        if (results.status === 200) {
            showInfo({
                cep: json.cep,
                uf: json.uf,
                localidade: json.localidade,
                logradouro: json.logradouro,
                bairro: json.bairro
            })
        }
    } 
})

function showInfo(json) {
    document.querySelector('#uf').value = `${json.uf}`;

    document.querySelector('#cidade').value =  `${json.localidade}`;
    
    document.querySelector('#logradouro').value =  `${json.logradouro}`;

    document.querySelector('#bairro').value =  `${json.bairro}`;
}

function showWarning() {
    document.querySelector('.aviso').innerHTML = msg;
}
