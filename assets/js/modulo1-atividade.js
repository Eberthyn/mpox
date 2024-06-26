// MÓDULO 1 QUESTÃO 1
var resposta = "Verdadeiro"; // Resposta correta
$("input[name=questao1]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps = $("input[name=questao1]:checked");
    if (resps.length) {

        resps.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "Verdadeiro") {
            $("#true1").addClass("resposta-correta")
            $("#false1").removeClass("resposta-incorreta")
        } else if (value === "Falso") {
            $("#true1").removeClass("resposta-correta")
            $("#false1").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta == value ? mensagem = "Você pode usar a equação de Cockcroft-Gault para calcular o clearence da creatinina com base na creatinina sérica medida, o sexo da pessoa ao nascer, a idade e o peso corporal calculado."
            : mensagem = "";
        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 1 QUESTÃO 2
var resposta2 = "C2"; // Resposta correta
$("input[name=questao2]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps2 = $("input[name=questao2]:checked");
    if (resps2.length) {

        resps2.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "C2") {
            $("#C2").addClass("resposta-correta")
            $("#A2").removeClass("resposta-incorreta")
            $("#B2").removeClass("resposta-incorreta")
        } else if (value === "A2") {
            $("#C2").removeClass("resposta-correta")
            $("#A2").addClass("resposta-incorreta")
            $("#B2").removeClass("resposta-incorreta")
        }else if (value === "B2") {
            $("#C2").removeClass("resposta-correta")
            $("#A2").removeClass("resposta-incorreta")
            $("#B2").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta2 == value ? mensagem = "O desejo de utilizar a PrEP pode ser uma indicação de um risco significativo de infecção pelo HIV." :
            mensagem = "";
        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});


// MÓDULO 2 QUESTÃO MULTIPLAESCOLHA
var resposta3 = "b"; // Resposta correta
$("input[name=questao3]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps3 = $("input[name=questao3]:checked");
    if (resps3.length) {

        resps3.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "b") {
            $("#b").addClass("resposta-correta")
            $("#a, #c, #d").removeClass("resposta-incorreta")
        } else if (value === "a") {
            $("#b").removeClass("resposta-correta")
            $("#c, #d").removeClass("resposta-incorreta")
            $("#a").addClass("resposta-incorreta")
        } else if (value === "c") {
            $("#b").removeClass("resposta-correta")
            $("#a, #d").removeClass("resposta-incorreta")
            $("#c").addClass("resposta-incorreta")
        } else if (value === "d") {
            $("#b").removeClass("resposta-correta")
            $("#a, #c").removeClass("resposta-incorreta")
            $("#d").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta3 == value ? mensagem = "Correto, áreas como áreas de serviço, quintais, jardins, varandas, galpões, entre outros, são indicados para instalação de EDL’s, porém em ambientes de sombra e protegidos da chuva e do sol." :
            mensagem = "Errado. As EDL’s devem ser instaladas em ambientes de sombra e protegidos da chuva e do sol, porém devem ser instaladas em locais abertos, para permitir a disseminação do larvicida pelas fêmeas para outros depósitos. Devem ser instaladas até 1,5m aumentando assim a oportunidade de visita das fêmeas de <i>Aedes</i>. As EDL’s devem ficar distante do manuseio de crianças para evitar danos ao dispositivo. O piriproxifem é eficaz em doses muito baixas e praticamente sem toxicidade para vertebrados (incluindo o ser humano e os animais domésticos).";
        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});



// BOTÃO AVANÇAR
document.addEventListener("DOMContentLoaded", function () {
    const botaoAvancar = document.getElementById("botaoAvancar");
    
    // Desabilite o botão "Avançar" inicialmente
    botaoAvancar.setAttribute("disabled", "true");
    $("#botaoAvancar").addClass("desabilitado");

    // Adicione um evento de clique ao botão "Avançar"
    botaoAvancar.addEventListener("click", function (event) {
        // Verifique se ambas as questões foram respondidas
        const questao1Respondida = document.querySelector('input[name="questao1"]:checked');
        const questao2Respondida = document.querySelector('input[name="questao2"]:checked');

        if (!questao1Respondida || !questao2Respondida) {
            // Se uma das questões não foi respondida, impeça o avanço
            event.preventDefault();
        }
    });

    // Adicione um evento de mudança aos inputs das questões
    const inputsQuestao1 = document.querySelectorAll('input[name="questao1"]');
    const inputsQuestao2 = document.querySelectorAll('input[name="questao2"]');
    const inputsQuestao3 = document.querySelectorAll('input[name="questao3"]');

    // Verifique se há respostas armazenadas e redefina as respostas
    const resetAnswers = () => {
        inputsQuestao1.forEach((input) => {
            input.checked = false;
        });

        inputsQuestao2.forEach((input) => {
            input.checked = false;
        });

        inputsQuestao3.forEach((input) => {
            input.checked = false;
        });
    };

    // Chame a função de redefinir respostas ao carregar a página
    resetAnswers();

    function verificarRespostas() {
        // Verifique se ambas as questões foram respondidas
        const questao1Respondida = document.querySelector('input[name="questao1"]:checked');
        const questao2Respondida = document.querySelector('input[name="questao2"]:checked');
        const questao3Respondida = document.querySelector('input[name="questao3"]:checked');

        // Habilite o botão "Avançar" apenas quando ambas as questões forem respondidas
        if (questao1Respondida && questao2Respondida) {
            botaoAvancar.removeAttribute("disabled");
            $("#botaoAvancar").removeClass("desabilitado");
        } else {
            botaoAvancar.setAttribute("disabled", "true");
        }
    }

    inputsQuestao1.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });

    inputsQuestao2.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });
});