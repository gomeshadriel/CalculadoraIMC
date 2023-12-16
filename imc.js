const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    

    if (nome === '') {
        resultado.textContent = 'Digite o seu nome.';

    } else if (altura === '') {
        resultado.textContent = 'Digite sua altura.';

    } else if (peso === '') {
        resultado.textContent = 'Digite o seu peso.';

    } else {
        const valorIMC = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
        const textoResultado = `${nome}, seu IMC é: ${valorIMC}.`;
        
        if(valorIMC < 18.5){ 
            
            resultado.innerHTML = `${textoResultado} <br><br> Você está abaixo do peso recomendado.`;

        } else if(valorIMC < 25){

            resultado.innerHTML = `${textoResultado} <br><br> Você tem o peso ideal.`;

        } else if(valorIMC < 30){
            
            resultado.innerHTML = `${textoResultado} <br><br> Você está levemente acima do peso.`;

        } else if(valorIMC < 35){
            
            resultado.innerHTML = `${textoResultado} <br><br> Você está com obesidade grau I.`;
            
        } else if(valorIMC < 40){
            
            resultado.innerHTML = `${textoResultado} <br><br> Você está com obesidade grau II.`;
            
        } else {
            
            resultado.innerHTML = `${textoResultado} <br><br> Você está com obesidade grau III. Cuidado!`;
            
        }
    }
}

calcular.addEventListener('click', imc);