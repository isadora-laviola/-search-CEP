function buscarCEP() {
    let campoTexto = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoTexto + '/json');
    ajax.send();

    ajax.onload = function () {
        document.getElementById('texto').innerHTML = this.responseText;
        
        //TRANSFORMEI OS VALORES EM OBJETO
        let obj = JSON.parse(this.responseText);

        //PEGUEI OS VALORES QUE QUERIA
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let bairro = obj.bairro;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Bairro: " + bairro + "<br> Estado: " + estado
    }
}