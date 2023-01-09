var questions = [{
        id: 1,
        description: "As Olimpíadas constituem um dos maiores eventos de massa do mundo e a sua origem remonta à Antiga Grécia, quando eram praticados jogos esportivos na cidade de Olímpia.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 2,
        description: "Os Jogos Olímpicos foram criados com o objetivo de utilizar o esporte como ferramenta para a promoção da paz, da união e do respeito entre os povos.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 3,
        description: "Apesar de as olimpíadas serem consideradas um grande evento, nunca chegaram a ter destaque no mundo do esporte.",
        bt_values: [0, 1],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. Os jogos olímpicos cresceram tanto ao longo de suas edições que se transformaram no maior evento esportivo do planeta, sendo o único a reunir delegações de mais de 200 países em uma mesma cidade-sede."
        }
    },
    {
        id: 4,
        description: "A criação dos jogos olímpicos estava fortemente ligada com a mitologia grega. Segundo a lenda, Hércules, filho de Zeus, criou a competição a fim de homenagear seu pai, que era o principal deus do Olimpo. Dessa forma, criou uma competição física em que os principais atletas seriam condecorados.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 5,
        description: "No início dos jogos olímpicos, ainda não existiam as medalhas de ouro, prata e bronze, sendo assim, o atleta vencedor ganhava um buquê de flores.",
        bt_values: [0, 1],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. Naquela época, o atleta vencedor ganhava uma coroa de folhas de louro e uma cesta básica vitalícia como premiação. Para os gregos, o louro tinha um significado místico, simbolizando a imortalidade."
        }
    },
    {
        id: 6,
        description: "A estátua de Zeus, monumento construído em Olímpia, em sua homenagem, é considerada uma das 7 maravilhas do mundo antigo.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 7,
        description: "Pierre de Coubertin foi uma das mais importantes personalidades do mundo esportivo, sendo presidente do COI por 29 anos, de 1896 a 1925.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 8,
        description: "Vencer não é competir com o outro. É derrotar seus inimigos interiores.”. Esse é o famoso lema utilizado pelo francês Pierre de Coubertin.",
        bt_values: [0, 1],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. O famoso lema utilizado pelo francês Pierre de Coubertin é: “O importante não é vencer, mas competir. E com dignidade."
        }
    },
    {
        id: 9,
        description: "Os valores originais do olimpismo, escritos na Carta Olímpica, eram: estimular o lado competitivo e valorizar os atletas que chegassem nas primeiras colocações.",
        bt_values: [0, 1],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. O movimento do olimpismo busca promover os valores da amizade, excelência e respeito. Os valores originais escritos na carta olímpica eram preservar a dignidade, desenvolvendo a harmonia e valorizando o esforço de todos os envolvidos."
        }
    },
    {
        id: 10,
        description: "A filosofia do olimpismo utiliza o esporte como ferramenta para a promoção da paz, da união entre os povos e do respeito pelos adversários, públicos e regras e tem como um dos seus princípios o jogo limpo.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },

]

var QuizCorrida = {
    current: 0,
    player_points: 0,
    questionUI: null,
    feedbackUI: null,
    txt_description: null,
    btn_true: null,
    btn_false: null,
    btsPista: null,
    showQuestion: function (index, data) {
        console.log(this.current)
        console.log(data[index].description);
        this.txt_description.innerHTML = data[index].description;
        this.btn_true.value = data[index].bt_values[0];
        this.btn_false.value = data[index].bt_values[1];
        this.questionUI.show();
    },
    showFeedback: function (index, data, res) {
        document.querySelector('#modal-quiz-feedback .feedback-text').innerHTML = data[index].feedbacks[res];
        document.querySelector('#modal-quiz-feedback').classList.remove('certo');
        document.querySelector('#modal-quiz-feedback').classList.remove('errado');
        document.querySelector('#modal-quiz-feedback').classList.add(res)
        let title = '';
        console.log(res);
        (res == 'certo') ? title = "Correto!": title = 'Atenção!';
        document.querySelector('#modal-quiz-feedback #modal-quiz-feedback-title').innerHTML = title
        this.feedbackUI.show();
        if (res === 'certo') {
            document.querySelector('#snd-acerto').play()
        } else {
            document.querySelector('#snd-erro').play()
        }

    },
    gameProgress: function () {
        this.btsPista[this.current].classList.add('respondido');
        this.btsPista[this.current].disabled = true;
        this.btsPista[this.current].classList.remove('atual');
        this.current++;
        if (this.current < 10) {
            this.btsPista[this.current].disabled = false;
            this.btsPista[this.current].classList.add('atual');
        } else {
            document.querySelector('.bt-finish').disabled = false;
            document.querySelector('.bt-finish').classList.add('atual');
            $('.tip-podio').fadeIn(200)
        }

        document.querySelector('#quiz-points').innerHTML = `Pontos: ${this.player_points}`

    },
    startGame: function () {
        this.btsPista[this.current].disabled = false;
        this.btsPista[this.current].classList.add('atual');
        document.querySelector('#quiz-points').innerHTML = `Pontos: ${this.player_points}`
    },
    gameEnd: function () {
        //Acertou 10 questões: medalha de ouro 
        //Acertou 8 ou mais: medalha de prata 
        //Acertou 5 ou mais: medalha de bronze 
        document.querySelector('.object-window.finishScreen .mensagem').innerHTML = 'Parabéns, você concluiu o jogo e merece uma medalha olímpica!'

        let medal = "";
        if (this.player_points === 10)
            medal = 'ouro'
        else if (this.player_points >= 8)
            medal = 'prata'
        else if (this.player_points >= 5)
            medal = 'bronze'
        else {
            medal = 'nope';
            document.querySelector('.object-window.finishScreen .mensagem').innerHTML = "Clique no botão e jogue novamente.";
        }

        document.querySelector('.total-points').innerHTML = `Você fez ${this.player_points} pontos!`;

        document.querySelector('.object-window.finishScreen .object-medal').classList.add(medal);

        console.log(medal);

    },
    gameRestart: function () {
        this.btsPista.forEach(function (el) {
            el.classList.remove('respondido');
            el.classList.remove('atual');
            el.disabled = true;
        })

        document.querySelector('.bt-finish').disabled = true;
        document.querySelector('.bt-finish').classList.remove('atual');

        this.current = 0;
        this.player_points = 0;
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('nope');
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('prata');
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('bronze');
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('ouro');
        $('.tip-podio').hide()
        $('.object-window.finishScreen').fadeOut(150);
        $('.object-window.startGame').fadeIn(150);
    },
    init: function () {
        console.log('Quiz Corrida inicializado')
        this.questionUI = new bootstrap.Modal(document.querySelector('#modal-question'), {
                keyboard: false
            }),
            this.feedbackUI = new bootstrap.Modal(document.querySelector('#modal-quiz-feedback'), {
                keyboard: false
            })
        this.txt_description = document.querySelector('#modal-question-description');
        this.btn_true = document.querySelector('.btn_true');
        this.btn_false = document.querySelector('.btn_false');

        ocq = this;

        this.btsPista = Array.from(document.querySelectorAll('.bt-show-question:not(.bt-finish)'));

        this.btsPista.forEach(function (bt) {
            bt.addEventListener('click', function () {
                ocq.showQuestion(this.value, questions)
            })
        })

        document.querySelector('.btn-continue').addEventListener('click', function () {
            ocq.gameProgress();
        })

        document.querySelector('.bt-start').addEventListener('click', function () {
            $('.object-window.startGame').fadeOut(200, function () {
                ocq.startGame()
            })
        })
        document.querySelector('.bt-restart').addEventListener('click', function () {
            ocq.gameRestart()
        })

        document.querySelector('.bt-finish').addEventListener('click', function () {
            ocq.gameEnd();
            $('.object-window.finishScreen').fadeIn(200);
            setTimeout(function () {
                $('.object-window.finishScreen').css('display', 'flex');
                if (ocq.player_points >= 5) {
                    document.querySelector('#snd-aplauso').play()
                } else {
                    document.querySelector('#snd-trombone').play()
                }

            }, 10);

        })

        Array.from(document.querySelectorAll('.btn_res')).forEach(function (el) {
            el.addEventListener('click', function () {
                console.log("value=", this.value)
                ocq.questionUI.hide()
                let res = null;
                if (this.value == 1) {
                    res = 'certo';
                    ocq.player_points++;
                } else {
                    res = 'errado';
                }
                console.log('player_points:', ocq.player_points)
                ocq.showFeedback(ocq.current, questions, res)
            })
        })
    }
}

QuizCorrida.init();