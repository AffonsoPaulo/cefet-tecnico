const quizContainer = document.querySelector('#jogo');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');

const myQuestions = [
    {
        question: "1. As bases nitrogenadas que compõem um nucleotídeo podem ser divididas em pirimidinas e purinas. Quais bases podem ser classificadas como pirimidinas?",
        answers: {
            a: 'Citosina, timina e uracila.',
            b: 'Citosina, adenina e guanina.',
            c: 'Adenina, guanina e timina.',
            d: 'Guanina, timina e uracila.',
            e: 'Uracila, guanina e timina.'
        },
        correctAnswer: 'a'
    },
    {
        question: "2. O ácido desoxirribonucleico (DNA) e o ácido ribonucleico (RNA) são os dois tipos de ácidos nucleicos existentes. Podemos diferenciar o DNA e o RNA analisando, por exemplo, as bases nitrogenadas que ocorrem nessas moléculas. Qual base nitrogenada não ocorre no DNA?",
        answers: {
            a: 'Adenina',
            b: 'Guanina.',
            c: 'Timina.',
            d: 'Uracila.',
            e: 'Citosina.'
        },
        correctAnswer: 'd'
    },
    {
        question: "3. Quanto à estrutura de uma molécula, como podemos diferenciar o DNA do RNA?",
        answers: {
            a: 'A molécula de DNA, em geral, é uma tripla hélice, enquanto o RNA é uma cadeia simples.',
            b: 'A molécula de DNA, em geral, é uma dupla hélice, enquanto o RNA é uma cadeia simples.',
            c: 'A molécula de RNA, em geral, é uma tripla hélice, enquanto o DNA é uma cadeia simples.',
            d: 'A molécula de RNA, em geral, é uma dupla hélice, enquanto o DNA é uma cadeia simples.',
            e: 'A molécula de RNA, em geral, é uma dupla hélice, enquanto o DNA é uma tripla hélice.'
        },
        correctAnswer: 'b'
    },
    {
        question: "4. Marque a alternativa que indica corretamente o nome do açúcar encontrado na molécula de DNA.",
        answers: {
            a: 'Ribose.',
            b: 'Ribonucleico.',
            c: 'Desoxirribose.',
            d: 'Dexarribose.',
            e: 'Pentarribose.'
        },
        correctAnswer: 'c'
    },
    {
        question: "5. No DNA, há dois polinucleotídeos, ou cadeias, que são complementares. Se sabemos a sequência de bases de uma das cadeias, é possível identificar a sequência presente na outra cadeia. Qual seria a sequência de bases da cadeia complementar se uma das cadeias do DNA apresentasse a seguinte sequência: AGGTCGC?",
        answers: {
            a: 'TCCAGCG.',
            b: 'UCCAGCG.',
            c: 'CAAGTAT.',
            d: 'UAAUTAT.',
            e: 'TCCUGCG.'
        },
        correctAnswer: 'a'
    },
    {
        question: "6. A respeito do processo de transcrição, marque a alternativa que indica corretamente o nome da enzima responsável por orientar o emparelhamento dos ribonucleotídeos.",
        answers: {
            a: 'RNA polimerase.',
            b: 'DNA polimerase.',
            c: 'Fator de liberação.',
            d: 'Aminoacil-tRNA sintetase.',
            e: 'Peptidil transferase.'
        },
        correctAnswer: 'a'
    },
    {
        question: "7. (PUC-MG) Um filamento duplo de DNA com 320 nucleotídeos formará, na transcrição, RNA-m com número de nucleotídeos igual a:",
        answers: {
            a: '160.',
            b: '319.',
            c: '320.',
            d: '321.',
            e: '159.'
        },
        correctAnswer: 'a'
    },
    {
        question: "8. Sobre a estrutura do DNA, marque a alternativa incorreta:",
        answers: {
            a: 'O DNA carrega as informações genéticas do indivíduo.',
            b: 'Os cromossomos são formados principalmente por DNA.',
            c: 'O DNA, assim como o RNA, é formado por nucleotídeos, que são constituídos por um fosfato, um açúcar e uma base nitrogenada.',
            d: 'Os nucleotídeos que formam o DNA diferenciam-se do RNA por apresentarem uma ribose e a base timina.'
        },
        correctAnswer: 'd'
    },
    {
        question: "9. O DNA é composto por nucleotídeos, os quais são compostos por três partes distintas. Marque a alternativa que indica corretamente as porções que compõem um nucleotídeo.",
        answers: {
            a: 'Pentose, base nitrogenada e grupo fosfato.',
            b: 'Hexose, base nitrogenada e grupo fosfato.',
            c: 'Pentose, base nitrogenada e ésteres.',
            d: 'Hexose, base nitrogenada e ésteres.',
            e: 'Pentose, base nitrogenada e hidróxido.'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Marque a alternativa que indica corretamente o nome dado ao processo pelo qual cópias idênticas de uma molécula de DNA são formadas.",
        answers: {
            a: 'Transcrição.',
            b: 'Tradução.',
            c: 'Transformação.',
            d: 'Replicação.',
            e: 'Enovelamento.'
        },
        correctAnswer: 'd'
    },
    {
        question: "11. Sabemos que existem diferentes tipos de RNA. Analise as alternativas abaixo e marque aquela que apresenta o nome correto da classe de RNA que é responsável por codificar as proteínas e ter seus códons lidos na tradução.",
        answers: {
            a: 'RNA mensageiro.',
            b: 'RNA codificador.',
            c: 'RNA transportador.',
            d: 'RNA de códons.',
            e: 'RNA ribossomal.'
        },
        correctAnswer: 'a'
    },
    {
        question: "12.Sabemos que existem três tipos básicos de RNA. Observe cada uma das alternativas abaixo e indique aquela que apresenta a função do RNA transportador.",
        answers: {
            a: 'Codificar as proteínas.',
            b: 'Transportar a proteína pronta.',
            c: 'Transportar um aminoácido.',
            d: 'Formar os ribossomos.',
            e: 'Transportar as unidades ribossomais.'
        },
        correctAnswer: 'c'
    }
];


const showQuestions = (questions, quizContainer) => {
    let output = [];
    let answers;

    for (let i = 0; i < questions.length; i++) {
        answers = [];

        for (letter in questions[i].answers)
            answers.push(`<label><input type="radio" name="question${i}" value="${letter}"> ${letter.toUpperCase()}) ${questions[i].answers[letter]}</label><br/>`);

        output.push(`<div class='texto'><p class="question"> ${questions[i].question} </p> <div class="answers"> ${answers.join('')} </div></div>`);

    }
    quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer) {

    let answerContainers = quizContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let numCorrect = 0;

    for (let i = 0; i < questions.length; i++) {

        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        if (userAnswer === questions[i].correctAnswer) {
            numCorrect++;
            answerContainers[i].style.color = 'lightgreen';
        } else {
            answerContainers[i].style.color = 'red';
        }
    }

    resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${questions.length} perguntas!`;
}

const generateQuiz = (questions, quizContainer, resultsContainer, submitButton) => {
    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);