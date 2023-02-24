let nome = prompt('Pôr Favor Digite seu Nome: ')
alert('Seja Bem Vindo(a), '+ nome)

let perguntas = [
{
    titulo: 'Nº 1 - Qual a Definição de Saúde:',
    alternativas: [
        'É um conjunto de sinais e sintomas específicos que geram bem estar físico e mental.', 
        'Diz respeito ao perfeito bem estar físico, mental e social do indivíduo e não apenas à ausência de doença.',
        'É o conceito que leva em conta a situação que a pessoa vive e seu estado mental.', 
        'São Hábitos saudáveis praticados no dia a dia que evitam o mal estar e a fadiga.'
    ],
    correta: 1
},
{
    titulo: 'Nº 2 - Sobre a sonda vesical de demora, comumente utilizada por idosos, e os cuidados que a mesma exige, não é correto afirmar que: ',
    alternativas: [
        'Para fixar a sonda e evitar ferir a pele ou as alergias é melhor utilizar esparadrapo antialérgico, mudando constantemente o local de fixação.', 
        'Este tipo de sonda só pode ser colocado e retirado pela equipe de saúde.', 
        'Deve-se manter o frasco ou bolsa coletora acima do nível da cama ou do assento da cadeira.', 
        'Fora do corpo a sonda liga-se a uma bolsa que armazena a urina e pode ser fixada na lateral da cama, na cadeira de rodas ou na perna da pessoa.'
    ],
    correta: 2
},
{
    titulo: 'Nº 3 - Qual a Definição de Doença:',
    alternativas: [
        'É um conjunto de sinais e sintomas específicos que afetam um ser vivo, alterando sua forma de convivência.', 
        'Em geral, é caracterizada como ausência de saúde, um estado que ao atingir um indivíduo provoca exclusivamente distúrbios mentais.', 
        'condição particular normal que afeta negativamente o organismo e a estrutura ou função de parte de ou de todo um organismo.', 
        'Alteração biológica do estado de saúde de um ser (homem, animal etc.), manifestada por um conjunto de sintomas perceptíveis ou não.'
    ],
    correta: 3
},
{
    titulo: 'Nº 4 - O que é Enfermagem?',
    alternativas: [
        'É a ciência que se dedica ao cuidado da saúde do ser humano, também definida como a ação realizada no ambiente para garantir a saúde da pessoa.', 
        'A ação realizada no ambiente para garantir o estado higienico conviniente para a saúde da pessoa.', 
        'É uma ciência que permite a implantação do tratamento e higienização de todas as pessoas com doenças e o cuidado com a família', 
        'Abrange o atendimento autônomo e excepcional de crianças e idosos doentes ou saudáveis e em todos os ambientes.'
    ],
    correta: 0
},
{
    titulo: 'Nº 5 - Quem foi Florence Nightingale?',
    alternativas: [
        'Conhedida como a dama da lâmpada, foi a fundadora da Enfermagem moderna. ganhou destaque pela atuação pioneira no cuidado a feridos em batalhas, Criou a primeira Escola de Enfermagem da Inglaterra no Hospital Saint Thomas, em Londres.', 
        'Apontada na história como heroina responsável por prestar serviços voluntários na Guerra do Paraguai.', 
        'Era uma mulher de posses e utilizou os seus recursos próprios para montar uma espécie de enfermaria-modelo, na capital de Assunção.', 
        'Era uma mulher bastante impetuosa e não se contentava com o papel feminino. Florence partiu para Scutari com 28 voluntárias entre religiosas e leigas.'
    ],
    correta: 0
},
{
    titulo: 'Nº 6 - O que é Infecção?',
    alternativas: [
        'Pode ser definida, de acordo com o Ministério da Saúde, como o desenvolvimento ou multiplicação de fungos e bactérias infecciosas no organismo.', 
        'Em geral, é caracterizada como influência de virus e bactérias autoresistentes de enorme potencial transmissivél.', 
        'É uma ação exercida no organismo decorrente da presença de agentes patogênicos, podendo ser por bactérias, vírus, fungos ou protozoários.', 
        'É a Alteração biológica do sistema nervoso de um ser humano, ocasionada por um conjunto de virus não perceptíveis ao homem.'
    ],
    correta: 2
},
{
    titulo: 'Nº 7 - O quê entende-se por isolamento?',
    alternativas: [
        'É um conjunto de sinais que garatem a proteção do paciente específico contra a ção de viroses.', 
        'Estabelecimento de medidas técnicas e/ou barreisas físicas de modo a reduzir a transmissão dos microrganismos de um indivíduo para outro.', 
        'Condição particular normal que garantem a proteção do organismo e a estrutura do copo humano.', 
        'Medidas e procedimentos que inibem a transmissão de doenças infecciosas para o meio ambiente garantindo a proteção da vida.'
    ],
    correta: 1
},
{
    titulo: 'Nº 8 - Quanto ao seu potencial de contaminação, as cirurgias podem ser classificadas em:',
    alternativas: [
        'Limpas, contaminadas, potencialmente contaminadas e infectadas.', 
        'Infectadas, limpas e superficialmente contaminadas.', 
        'Contaminadas, parcialmente contaminadas e infectadas.', 
        'Possivelmente contaminadas, limpas e infectadas.'
    ],
    correta: 0
},
{
    titulo: 'Nº 9 - O quê entende-se por Área crítica:',
    alternativas: [
        'É um conjunto de salas e departamentos hospitalares que manifestam sinais e sintomas de transmissão de doenças em geral.', 
        'São aquelas que oferecem risco potencial para aquisição de infecções em decorrência á procedimentos invasivos freqüentes e o manejo de substâncias infectantes.', 
        'Caracteriza-se pelo isolamento e condição de permanência normal de tráfego de pessoas em determinada área hospitalar.', 
        'Área destinada a pessoas com doenças consideradas de risco e alto nivél de contágio.'
    ],
    correta: 1
},
{
    titulo: 'Nº 10 - Defina Antissepsia:',
    alternativas: [
        'É um conjunto de processo de destruição total de microorganismos, inclusive esporulados.', 
        'Em geral, é definida como ausência de microorganismo patogênico que provoca um estado de completo mal estar físico.', 
        'É o conjunto de práticas através das quais se evita a propagação de microorganismos em objetos.', 
        'É um conjunto de técnicas e medidas propostas para inibir crescimento de microorganismos em pele e mucosas, através da aplicação de soluções antissépticas.'
    ],
    correta: 3
},
{
    titulo: 'Nº 11 - O que é Precaução Padrão?',
    alternativas: [
        'Normas e técnicas que devem ser adotadas por todos os profissionais de saúde para atendimento de todos os pacientes, independentemente de seu diagnóstico .', 
        'É o procedimento referido exclusivamente a higienização das mãos antes e após o contato com o paciente e ao uso de máscara cirúrgica e/ou avental quando houver risco de contato de sangue.', 
        'É o conjunto de práticas pelas quais se evita a proliferação de doenças respiratórias.', 
        'É um conjunto de medidas propostas para expandir o crescimento de microorganismos em pele e mucosas.'
    ],
    correta: 0
},
{
    titulo: 'Nº 12 - Defina cama fechada:',
    alternativas: [
        'É aquela que está desocupada, aguardando chegada ( admissão ) do paciente.', 
        'É aquela que está sendo ocupada por um paciente que pode deambular.', 
        'É aquela que está ocupada, aguardando a saída ( egresso ) do paciente.', 
        'É realizada para receber o paciente que está na sala de cirurgia sob anestesia.'
    ],
    correta: 0
},
{
    titulo: 'Nº 13 - Qual alternativa melhor define a posição Decúbito dorsal, horizontal ou supina?',
    alternativas: [
        'O paciente fica semi sentado de costas em direção ao colchão, com extremidades inferiores apoiadas em coxim.', 
        'O paciente fica semi deitado sobre o abdome, com a cabeça lateralizada.', 
        'O paciente se deita de costas no colchão, com extremidades inferiores apoiadas em coxim e superiores sobre o abdome.', 
        'O paciente assume posição lateral esquerda ou direita.'
    ],
    correta: 2
},
{
    titulo: 'Nº 14 - Qual alternativa melhor define a posição Trendelemburg:',
    alternativas: [
        'A paciente é colocada em decubito dorsal, com ombros e cabeça ligeiramente elevados.', 
        'Posição em que o corpo fica inclinado, com a cabeça em plano mais baixo que o restante do corpo.', 
        'O paciente se mantem ajoelhado sobre o colchão com o tórax na cama.', 
        'Posição em que o corpo fica deitado, com a cabeça em plano mais alto que o restante do corpo.'
    ],
    correta: 1
},
{
    titulo: 'Nº 15 - Qual a finalidade do Curativo?',
    alternativas: [
        'Tem a função de anestesiar e expandir processo de tratamento de lesão da mucosa.', 
        'Sua principal finalidade é a limpeza da lesão, com o menor trauma possível, contribuindo para o processo da cicatrização.', 
        'O principal objetivo é a limpeza da ferida e aplicação de medicamentos ( cpm ) fechado com gazes, micropore ou ataduras de crepe.', 
        'Sua finalidade é a desinfecção dentro de cavidades, com indicação de irrigação com soluções salinas.'
    ],
    correta: 1
},
{
    titulo: 'Nº 16 - Defina SONDAGEM NASOGÁSTRICA:',
    alternativas: [
        'É a introdução de uma sonda gástrica plástica através da narina até o estômago.', 
        'Consiste na introdução de tubo plástico no abdome para ingerir alimentos líquidos e solidos no estômago.', 
        'Colocação de sondas no interior da bexiga, através da uretra.', 
        'É a introdução de lâminas de tecido mole, maleáveis, de calibre e tamanho variáveis, que se destinam à retirada de secreções de uma cavidade.'
    ],
    correta: 0
},
{
    titulo: 'Nº 17 - O que é ASPIRAÇÃO ENDOTRAQUEAL?',
    alternativas: [
        'É a introdução de substâncias para o processo de eliminação de resíduos pulmonar infecciosos.', 
        'É a retirada da secreção pulmonar através da introdução de uma sonda de aspiração via cânula endotraqueal, traqueostomia, nasotraqueal ou orotraqueal.', 
        'É o processo através do qual se obtem a medida de líquidos, ou secreção existente no estômago.', 
        'É a técnica usada para inserir substâncias líquidas no interior da bexiga para eliminação de urina.'
    ],
    correta: 1
},
{
    titulo: 'Nº 18 - Qual das alternativa melhor define, "Anotação de Enfermagem".',
    alternativas: [
        'Consiste nos registros realizados pela equipe de enfermagem, em impresso próprio, a respeito dos cuidados prestados ao paciente.', 
        'Consiste no documento escrito pôr enfermeiros e técnicos responsável pelo controle e admissão de medicamentos.', 
        'É o conjunto de anotações das práticas realizadas pôr médicos, enfermeiros e técnicos em papel de qualidade e específico.', 
        'É o processo de registrar as atividades exercidas pelo paciente desde a entrada até a alta hospitalar.'
    ],
    correta: 0
},
{
    titulo: 'Nº 19 - O quê é CATETERISMO VESICAL?',
    alternativas: [
        'É a retirada de secreção vesical através da introdução de uma sonda de aspiração via cânula.', 
        'Em geral, é definido como a introdução de tubos ou lâminas de tecido maleáveis, de calibre e tamanho variáveis na vesícula.', 
        'É a introdução de um cateter ou sonda, através da uretra até a bexiga, para esvaziamento vesical.', 
        'Consiste na introdução de um tubo plástico no abdome para extrair resíduos e urina.'
    ],
    correta: 2
},
{
    titulo: 'Nº 20 - Qual das alternativas define as terminologias: "Caquexia, Disfagia, Enterorragia, Hematêmese e Flebite" na respectiva ordem?',
    alternativas: [
        'Acúmulo de pús numa cavidade; Abertura cirúrgica da parede abdominal; Inflamação de uma veia; Dificuldade para deglutir; Urina com presença de sangue;', 
        'Emagrecimento intenso e generalizado; Dificuldade para deglutir; Fezes com presença de sangue vivo; Inflamação de uma veia; Vômito com presença de sangue;', 
        'Urina com presença de sangue; Abertura cirúrgica da parede abdominal; Dificuldade para deglutir; Vômito com presença de sangue; Emagrecimento intenso e generalizado;', 
        'Emagrecimento intenso e generalizado; Dificuldade para deglutir; Fezes com presença de sangue vivo; Vômito com presença de sangue; Inflamação de uma veia;'
    ],
    correta: 3
}
]

let app = {
start: function(){
    this.Atualpos = 0;
    this.Totalpontos = 0;

    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element,index) => {
    //  element.textContent = q.alternativas[index]; ESSA LINHA EXIBE AS QUESTÕES. NÃO PRECISA MAIS!
        element.addEventListener('click', () => {
            this.checaResposta(index);
            //console.log('Checar Click!') NÃO NECESSITRA MAIS!
            //alert('CHECAR!')
           
        //  if (index == q.correta){
        //      console.log('Parabéns, Acertou!')
        //  } else{
        //      console.log('Você Errou!!')
        //  } ESSE IF TRATA O CLICK, VAI SER CRIADO UMA FUNÇÃO ESPECÍFICA PARA ESSE FIM!!!
        })
    })
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);

},
mostraquestao: function(q){
    this.qatual = q;
    // MOSTRA O TITULO!
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    // MOSTRA AS ALTERNATIVAS!
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
    /*    element.addEventListener('click', function(){
            if (index == q.correta){
                console.log('Parabéns, Acertou!')
            } else{
                console.log('Você Errou!!')
            }
        })*/ //TODAS ESSAS LINHAS ADD OUVINTES DE EVENTOS!! NÃO INTERESSA DEPOIS DA REFATORAÇÃO!! 
    })
},
proxperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
        alert('Teste Concluido!')
        confirm('Você Deseja Refazer o Teste?')
        this.Atualpos = 0;
    }
},
checaResposta: function(user){
    if(this.qatual.correta == user){
    //    console.log('Parabéns, Você Acertou!')
        this.Totalpontos++;
        this.mostraresposta(true);
    }
    else{
    //    console.log('Você Errou!!')
        this.mostraresposta();
    }
    this.atualizaPontos();
    this.proxperg();
    this.mostraquestao(perguntas[this.Atualpos]);
}, 
atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `SUA PONTUAÇÃO É: ${this.Totalpontos}`;
},
mostraresposta: function(correto){
    let resultDiv = document.getElementById('result');
    let result = ""
    //FORMATAR A MESAGEM A SER EXIBIDA
    if (correto == true){
        result = 'Parabéns, Você Acertou!';
    }
    else{
        // OBTENDO A QUESTÃO ATUAL
        let pergunta = perguntas[this.Atualpos];    
        // OBTENHA O INDICE DA RSEPOSTA CORRETA!
        let cindice = pergunta.correta;
        //OBTENHA O TEXTO DA RESPOSTA CORRETA DA QUESTÃO ATUAL!
        let ctexto = pergunta.alternativas[cindice];
        result = `INCORRETO! A reposta correta é: ${ctexto}`;
    }
    resultDiv.textContent = result;

}
}
//mostraquestao(pergunta); Não necessita depois da refatoração
app.start();
