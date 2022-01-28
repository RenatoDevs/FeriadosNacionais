const data = new Date()
const ano = data.getFullYear()
const af = document.querySelector('p.titulo')
const ulAuto = document.querySelector('#listaFeriadosAuto');

carregar = () =>{
    af.innerHTML =`${ano}`
    const anoValorAuto = ano

    console.log(anoValorAuto)

    const URL = `https://brasilapi.com.br/api/feriados/v1/${anoValorAuto}`;

    fetch(URL)
        .then((response) =>{
            return response.json();
        })
        .then((dados) => {
            console.log(dados);
            popularFeriadosAuto(dados);
        })
        .catch((erro) => {
            console.log(erro);
        })
    
}

popularFeriadosAuto = (feriadosDadosAuto) => {
    ulAuto.innerHTML = '';
    feriadosDadosAuto.forEach(feriado => {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');

        h4.innerText = feriado.date.split("-").reverse().join('/');
        p.innerText = feriado.name;

        li.appendChild(h4);
        li.appendChild(p);

        ulAuto.appendChild(li);


    })

}


