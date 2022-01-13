function sorteio(){   
    //coloca um contador
    let indice = 0;
    // coloca os numero sorteados em um array para comparação
    const sorteados = [];
    //zera os numeros anteriores
    document.getElementById("1numero").innerHTML = "";
    document.getElementById("2numero").innerHTML = "";
    document.getElementById("3numero").innerHTML = "";
    document.getElementById("4numero").innerHTML = "";
    document.getElementById("5numero").innerHTML = "";
    document.getElementById("6numero").innerHTML = "";
    
    //coloca um intervalo de tempo entre os sorteios de 1 segundo
    const id = setInterval(chamarfuncao, 1000);

        // conta a quantidades de vezes que a funcao foi chamada e limita a 6
        // chama as outras funcoes 
        // para quando atinge 6 vezes
        function chamarfuncao(){
    	    indice ++;
        if (indice < 7){
            sortear(mostrarSorteio);
		}else{
            clearInterval(id);}
        }
        
        // mostra cada numero no seu campo HTML
        function mostrarSorteio(value) {
            if (indice === 1){
                document.getElementById("1numero").innerHTML = value;
            }else if (indice === 2){
                document.getElementById("2numero").innerHTML = value;
            }else if (indice === 3){
                document.getElementById("3numero").innerHTML = value;
            }else if (indice === 4){
                document.getElementById("4numero").innerHTML = value;
            }else if (indice === 5){
                document.getElementById("5numero").innerHTML = value;
            }else if (indice === 6){
                document.getElementById("6numero").innerHTML = value;
            }
		}

        // sorteia numero maior que zero
        // call back que chama a funcao para mostrar no html 
	    function sortear(callback) {
                do {valor = parseInt(Math.random() * 60);
                } while (valor === 0);
                callback(valor);
		}
}