const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;
    const imc = (peso / (altura * altura)).toFixed(2);
    const informacoes = document.getElementById('informacoes');
    const resultado = document.getElementById('number-imc');
    let descricao = "";
    let titleIMC = "";


    informacoes.classList.remove('hidden');

    if (imc < 16) {
        titleIMC = 'Magreza Grave';

        descricao = 'Você está com um nível de magreza extremamente preocupante. Esse grau indica risco sério à saúde, com alta chance de desnutrição, perda de massa muscular e imunidade baixa. Procure um médico ou nutricionista urgentemente.';

    } else if (imc >= 16 && imc <= 16.9) {

        titleIMC = 'Magreza Moderada';

        descricao = 'Essa faixa ainda é preocupante. Indica um nível de magreza que pode prejudicar suas funções corporais, reduzir sua resistência física e comprometer seu sistema imunológico. Um plano de alimentação saudável com orientação profissional é essencial.';

    } else if (imc >= 17 && imc <= 18.4) {

        titleIMC = 'Magreza Leve';

        descricao = 'Está abaixo do peso ideal, mas não em estado crítico. É um sinal de alerta. Talvez você esteja comendo menos que o necessário, ou perdendo peso por estresse ou doença. Busque ajustar seus hábitos antes que a situação piore.';

    } else if (imc >= 18.5 && imc <= 24.9) {
        
        titleIMC = 'Peso Saudável';

        descricao = 'Parabéns! Seu peso está dentro da faixa ideal para sua altura. Isso reduz o risco de diversas doenças e indica equilíbrio entre massa magra e gordura corporal. Continue com bons hábitos de alimentação e atividade física.';

    } else if (imc >= 25 && imc <= 29.9) {

        titleIMC = 'Sobrepeso';

        descricao = 'Você está acima do peso recomendado. Isso aumenta o risco de doenças cardíacas, pressão alta e diabetes tipo 2. É o momento certo para agir preventivamente, adotando uma alimentação mais equilibrada e incluindo exercícios na rotina.';

    } else if (imc >= 30 && imc <= 34.9) {

        titleIMC = 'Obesidade Grau I';

        descricao = 'Esse nível já é considerado obesidade. Os riscos à saúde são significativos, incluindo problemas cardíacos, respiratórios, metabólicos e articulares. A reversão ainda é possível com disciplina e acompanhamento nutricional.';

    } else if (imc >= 35 && imc <= 39.9) {

        titleIMC = 'Obesidade Grau II (Severa)';

        descricao = 'Alerta vermelho! Os riscos à saúde são altíssimos e você provavelmente já sente os impactos físicos no seu dia a dia. É fundamental buscar ajuda médica para mudar hábitos com urgência.';

    } else {

        titleIMC = 'Obesidade Grau III (Mórbida)';

        descricao = 'Esse é o grau mais grave de obesidade. É uma condição médica crítica, com altíssimo risco de doenças cardiovasculares, diabetes, apneia do sono, e até morte precoce. Exige acompanhamento médico intensivo e, em muitos casos, intervenção multidisciplinar.';
    }

    resultado.textContent = imc;
    document.getElementById('title-imc').textContent = titleIMC
    document.getElementById('descricao-imc').textContent = descricao;
    

});