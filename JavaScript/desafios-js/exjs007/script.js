function verificar(){
    let anoCar = window.document.getElementById ('anoCarro');//here i am telling: get the input element
    let anoC = Number(anoCar.value); // here i am telling js to get the value from the input anoCar (that is a string) and convert it to a number
    let ano = new Date();
    let anoAtual = ano.getFullYear()
    let idadeCarro = anoAtual-anoC
    
    let result = window.document.getElementById('resultado')
    let car = document.getElementsByName('carType')
    let carType = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto') //Aqui, o JavaScript está **criando uma nova tag `<img>`**, igual você faria no HTML. Mas ao invés de escrever `<img>` direto no HTML, ele está criando isso **usando código**. `img` agora é uma **variável que representa essa imagem**, mesmo que ela ainda **não tenha aparecido na tela**. ➜ “Essa imagem vai ter o ID chamado foto”. o atributo é como se fizessemos isso em html 
    //  <img id="foto">

    //anoCar.value: é o que o usuário digitou (em string), anoC: é o valor convertido para número.
    if (anoC > anoAtual){
        window.alert(`[ERROR] Por Favor digite algo coerente. There's no way que o seu carro seja de ${anoC}`)
    }
    //Essa linha está verificando se a primeira opção de um grupo de botões do tipo radio está selecionada.
    if (car[0].checked){
        carType = `tipo Sedan`
        img.setAttribute('src', 'sedan.png')
    } else if(car[1].checked){
        carType = `tipo SUV`
        img.setAttribute('src', 'suv.png')
    } else if (car[2].checked){
        carType = 'tipo Hatchback'
        img.setAttribute('src', 'hatchback.png')
    } else {
        carType = 'tipo Micro'
        img.setAttribute('src', 'micro.png')
    }

        
    result.innerHTML=`O seu carro tem exatamente ${idadeCarro} anos, ${carType}`
    result.appendChild(img)
}

    