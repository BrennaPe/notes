function verificar(){
    let ano = new Date()
    let anoAtual = ano.getFullYear()
    let anoNasc = document.getElementById('idate')
    let result = document.getElementById('resultado')
    let idade = anoAtual - Number(anoNasc.value)
    let gender = document.getElementsByName('genero')
    let sex = ''

    //Por que eu criei essa variavel vazia aqui? Resp: “Eu vou precisar guardar o valor do sexo aqui. Ainda não sei se será ‘Homem’ ou ‘Mulher’, então por enquanto deixo vazio.”. Essa variavel Cria uma caixinha vazia para guardar o valor mais tarde. Imagine que seu código está se preparando para guardar uma resposta e nele o usuario irá colocar o valor dentro da caixinha conforme a seleção.
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (anoNasc.value > anoAtual || anoNasc.value < 1900){
        window.alert('[ERROR] Por favor verifique as informações e tente novamente')


    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    } else if (gender[0].checked){
        sex = 'Masculino'
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'kid-m.png')
        }
        else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'teen-m.png')
        }
        else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'adult-m.png')
        }
        else{
            //idoso
            img.setAttribute('src', 'elderly-m.png')
        }
    } else if (gender[1].checked){
        sex = 'Feminino'
    
    if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'kid-w.png')
        }
        else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'teen-w.png')
        }
        else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'adult-w.png')
        }
        else{
            //idoso
            img.setAttribute('src', 'elderly-w.png')
        }
    }
    result.innerHTML=`Detectamos que você é do sexo ${sex} e tem ${idade} anos de idade`
    result.appendChild(img)
}

    //appendChild() é uma função que serve para adicionar um novo elemento HTML dentro de outro. Neste caso estamos adicionando uma imagem dentro da divresultado. Lembre-se que para poder adicionar esse apendice aqui você precisou cria-lo antes... “ e então essa linha de apendice mostra Here’s a new image. Add it into this section (resultado).”

    //EXPLICAÇÃO DO [0] E [1]: O JavaScript organiza os elementos com o mesmo name (como os radio buttons) em uma lista na ordem em que aparecem no HTML, começando a contagem do 0. 	•	O primeiro <input> com name="genero" vira gender[0]. O segundo vira gender[1]. O terceiro vira gender[2]. E assim por diante…

        