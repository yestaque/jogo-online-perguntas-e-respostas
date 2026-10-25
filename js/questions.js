
const QUESTIONS = [
  // ==========================================
  // TECNOLOGIA — 20 PERGUNTAS
  // ==========================================
  {
    category: "Tecnologia", difficulty: "facil",
    question: "Qual linguagem é muito usada em Inteligência Artificial?",
    options: ["HTML", "Python", "CSS", "XML"], answer: 1,
    explanation: "Python possui bibliotecas populares para IA e Machine Learning."
  },
  {
    category: "Tecnologia", difficulty: "facil",
    question: "Qual tecnologia estrutura páginas web?",
    options: ["SQL", "Git", "HTML", "Python"], answer: 2,
    explanation: "HTML define a estrutura e o conteúdo de uma página web."
  },
  {
    category: "Tecnologia", difficulty: "facil",
    question: "Para que serve o CSS?",
    options: ["Estilizar páginas web", "Armazenar dados", "Criar bancos de dados", "Controlar redes"], answer: 0,
    explanation: "CSS controla cores, fontes, espaçamentos e layout."
  },
  {
    category: "Tecnologia", difficulty: "facil",
    question: "Qual destes é um navegador de internet?",
    options: ["Excel", "Windows", "Git", "Firefox"], answer: 3,
    explanation: "Firefox é um navegador usado para acessar sites."
  },
  {
    category: "Tecnologia", difficulty: "facil",
    question: "O que significa Wi-Fi?",
    options: ["Um tipo de monitor", "Uma tecnologia de rede sem fio", "Um sistema operacional", "Uma linguagem de programação"], answer: 1,
    explanation: "Wi-Fi permite conectar dispositivos a uma rede sem usar cabos."
  },
  {
    category: "Tecnologia", difficulty: "facil",
    question: "Qual componente executa instruções de programas?",
    options: ["Teclado", "Mouse", "Processador", "Impressora"], answer: 2,
    explanation: "A CPU executa instruções e realiza operações."
  },
  {
    category: "Tecnologia", difficulty: "facil",
    question: "Qual dispositivo é usado principalmente para digitar?",
    options: ["Teclado", "Monitor", "Caixa de som", "Projetor"], answer: 0,
    explanation: "O teclado permite inserir texto e comandos."
  },
  {
    category: "Tecnologia", difficulty: "medio",
    question: "Para que serve o Git?",
    options: ["Editar vídeos", "Criar imagens", "Substituir o sistema operacional", "Controlar versões do código"], answer: 3,
    explanation: "Git registra mudanças no código e permite recuperar versões anteriores."
  },
  {
    category: "Tecnologia", difficulty: "medio",
    question: "Qual protocolo é usado para comunicação segura na web?",
    options: ["FTP sem criptografia", "HTTPS", "SMTP", "Telnet"], answer: 1,
    explanation: "HTTPS utiliza TLS para proteger a comunicação entre navegador e servidor."
  },
  {
    category: "Tecnologia", difficulty: "medio",
    question: "O que é computação em nuvem?",
    options: ["Usar apenas computadores sem internet", "Guardar tudo em disquetes", "Usar recursos computacionais pela rede", "Um tipo de cabo de energia"], answer: 2,
    explanation: "A nuvem oferece recursos como armazenamento e processamento por meio da rede."
  },
  {
    category: "Tecnologia", difficulty: "medio",
    question: "Qual é a função principal de um sistema operacional?",
    options: ["Gerenciar recursos do computador", "Criar todos os sites automaticamente", "Substituir o processador", "Imprimir sem hardware"], answer: 0,
    explanation: "O sistema operacional gerencia memória, processos, arquivos e dispositivos."
  },
  {
    category: "Tecnologia", difficulty: "medio",
    question: "O que é um endereço IP?",
    options: ["Uma senha universal", "Um tipo de arquivo de imagem", "Uma linguagem de programação", "Um identificador de rede de um dispositivo ou interface"], answer: 3,
    explanation: "O endereço IP permite identificar uma interface em uma rede IP."
  },
  {
    category: "Tecnologia", difficulty: "medio",
    question: "Qual destes é um sistema de gerenciamento de banco de dados?",
    options: ["Figma", "PostgreSQL", "Photoshop", "PowerPoint"], answer: 1,
    explanation: "PostgreSQL é um sistema gerenciador de banco de dados relacional."
  },
  {
    category: "Tecnologia", difficulty: "dificil",
    question: "Qual é a finalidade principal do DNS?",
    options: ["Aumentar a memória RAM", "Editar código-fonte", "Traduzir nomes de domínio em registros como endereços IP", "Criptografar todos os arquivos do computador"], answer: 2,
    explanation: "O DNS permite localizar serviços usando nomes de domínio."
  },
  {
    category: "Tecnologia", difficulty: "dificil",
    question: "Qual é uma característica do protocolo TCP?",
    options: ["Oferece entrega confiável e ordenada de bytes", "Transmite apenas imagens", "Não usa conexões de rede", "Só funciona sem internet"], answer: 0,
    explanation: "TCP oferece um fluxo de bytes confiável e ordenado entre os pontos de comunicação."
  },
  {
    category: "Tecnologia", difficulty: "dificil",
    question: "O que significa virtualização em computação?",
    options: ["Transformar um monitor em teclado", "Eliminar a necessidade de software", "Desligar todos os servidores", "Executar ambientes computacionais virtuais sobre recursos físicos"], answer: 3,
    explanation: "A virtualização permite criar máquinas ou ambientes virtuais sobre hardware físico."
  },
  {
    category: "Tecnologia", difficulty: "dificil",
    question: "Qual prática ajuda a proteger contas online?",
    options: ["Usar a mesma senha em todos os sites", "Ativar autenticação multifator", "Compartilhar códigos de acesso", "Desativar atualizações de segurança"], answer: 1,
    explanation: "A autenticação multifator acrescenta uma camada de verificação além da senha."
  },
  {
    category: "Tecnologia", difficulty: "dificil",
    question: "O que é latência em uma rede?",
    options: ["A capacidade do disco", "O tamanho do monitor", "O atraso na transmissão de dados", "O número de teclas do computador"], answer: 2,
    explanation: "Latência mede o tempo de atraso na comunicação entre pontos."
  },
  {
    category: "Tecnologia", difficulty: "dificil",
    question: "Para que serve um balanceador de carga?",
    options: ["Distribuir solicitações entre vários servidores", "Aumentar o brilho da tela", "Traduzir código para português", "Substituir o banco de dados em qualquer sistema"], answer: 0,
    explanation: "Um balanceador distribui tráfego entre recursos disponíveis para melhorar disponibilidade e desempenho."
  },
  {
    category: "Tecnologia", difficulty: "dificil",
    question: "O que caracteriza um backup incremental?",
    options: ["Copia sempre todos os arquivos, sem exceção", "Apaga automaticamente os originais", "Funciona apenas em papel", "Copia as mudanças desde o backup anterior"], answer: 3,
    explanation: "O backup incremental registra as alterações desde o backup realizado anteriormente."
  },

  // ==========================================
  // PROGRAMAÇÃO — 20 PERGUNTAS
  // ==========================================
  {
    category: "Programação", difficulty: "facil",
    question: "Qual estrutura repete um bloco de código?",
    options: ["Comentário", "Loop", "String", "Variável"], answer: 1,
    explanation: "Laços como for e while repetem instruções."
  },
  {
    category: "Programação", difficulty: "facil",
    question: "Qual destes representa um valor booleano em JavaScript?",
    options: ['"Olá"', "42", "true", "null"], answer: 2,
    explanation: "Boolean representa um valor lógico verdadeiro ou falso."
  },
  {
    category: "Programação", difficulty: "facil",
    question: "Qual símbolo inicia um comentário de uma linha em JavaScript?",
    options: ["//", "<!--", "**", "##"], answer: 0,
    explanation: "Em JavaScript, // inicia um comentário de uma linha."
  },
  {
    category: "Programação", difficulty: "facil",
    question: "Qual destes é um tipo de dado textual em JavaScript?",
    options: ["Boolean", "Number", "Undefined", "String"], answer: 3,
    explanation: "String representa texto, como uma mensagem ou um nome."
  },
  {
    category: "Programação", difficulty: "facil",
    question: "Qual palavra declara uma variável que pode ser reatribuída em JavaScript?",
    options: ["const", "let", "fixed", "define"], answer: 1,
    explanation: "let declara uma variável cujo valor pode ser reatribuído."
  },
  {
    category: "Programação", difficulty: "facil",
    question: "Qual operador testa igualdade estrita em JavaScript?",
    options: ["=", "==", "===", "=>"], answer: 2,
    explanation: "=== compara valor e tipo sem fazer coerção de tipos."
  },
  {
    category: "Programação", difficulty: "facil",
    question: "Qual estrutura permite escolher entre caminhos usando uma condição?",
    options: ["if", "import", "return", "console"], answer: 0,
    explanation: "if executa um bloco quando a condição é verdadeira."
  },
  {
    category: "Programação", difficulty: "medio",
    question: "Qual método adiciona um item ao final de um array em JavaScript?",
    options: ["pop()", "shift()", "slice()", "push()"], answer: 3,
    explanation: "push() adiciona itens ao final de um array."
  },
  {
    category: "Programação", difficulty: "medio",
    question: "O que uma função normalmente permite fazer?",
    options: ["Aumentar fisicamente a memória", "Agrupar instruções reutilizáveis", "Substituir todos os tipos de dados", "Desligar a internet"], answer: 1,
    explanation: "Funções encapsulam instruções que podem ser chamadas quando necessário."
  },
  {
    category: "Programação", difficulty: "medio",
    question: "Qual estrutura armazena vários valores em uma sequência em JavaScript?",
    options: ["if", "return", "Array", "break"], answer: 2,
    explanation: "Um array armazena uma coleção ordenada de valores."
  },
  {
    category: "Programação", difficulty: "medio",
    question: "O que significa depurar um programa?",
    options: ["Encontrar e investigar erros", "Trocar o nome do computador", "Excluir todo o código", "Converter todo texto em imagem"], answer: 0,
    explanation: "Depuração ajuda a localizar e entender falhas no programa."
  },
  {
    category: "Programação", difficulty: "medio",
    question: "Qual é a saída de console.log(2 + 3) em JavaScript?",
    options: ["23", "6", "Erro obrigatoriamente", "5"], answer: 3,
    explanation: "O operador + soma os dois números e produz 5."
  },
  {
    category: "Programação", difficulty: "medio",
    question: "Para que serve JSON?",
    options: ["Resfriar o processador", "Representar e trocar dados estruturados", "Substituir a conexão com a internet", "Criar circuitos eletrônicos"], answer: 1,
    explanation: "JSON é um formato textual usado para representar e transmitir dados estruturados."
  },
  {
    category: "Programação", difficulty: "dificil",
    question: "Qual é a complexidade média de uma busca binária em uma lista ordenada?",
    options: ["O(n²)", "O(n)", "O(log n)", "O(2ⁿ)"], answer: 2,
    explanation: "A busca binária reduz pela metade o intervalo de busca a cada etapa."
  },
  {
    category: "Programação", difficulty: "dificil",
    question: "O que é recursão?",
    options: ["Uma função que chama a si mesma direta ou indiretamente", "Uma variável sem valor", "Um banco de dados", "Um comentário de várias linhas"], answer: 0,
    explanation: "Uma solução recursiva resolve um problema por meio de chamadas que tratam subproblemas."
  },
  {
    category: "Programação", difficulty: "dificil",
    question: "Qual estrutura segue o princípio LIFO?",
    options: ["Fila FIFO", "Árvore de busca sempre balanceada", "Grafo direcionado", "Pilha"], answer: 3,
    explanation: "LIFO significa último a entrar, primeiro a sair, como acontece em uma pilha."
  },
  {
    category: "Programação", difficulty: "dificil",
    question: "O que uma API REST normalmente permite?",
    options: ["Aumentar o tamanho físico do monitor", "Interagir com recursos por meio de uma interface HTTP", "Executar somente jogos offline", "Substituir toda linguagem de programação"], answer: 1,
    explanation: "APIs REST expõem recursos que clientes podem acessar por operações HTTP."
  },
  {
    category: "Programação", difficulty: "dificil",
    question: "Qual é a finalidade de testes automatizados?",
    options: ["Garantir que nenhum erro existirá para sempre", "Eliminar a necessidade de revisar código", "Verificar automaticamente comportamentos esperados", "Aumentar a resolução do monitor"], answer: 2,
    explanation: "Testes automatizados verificam se partes do sistema apresentam os resultados esperados."
  },
  {
    category: "Programação", difficulty: "dificil",
    question: "O que é uma condição de corrida?",
    options: ["Quando o resultado depende da ordem ou do tempo de operações concorrentes", "Quando uma variável tem nome longo", "Quando um arquivo é salvo duas vezes manualmente", "Quando uma função retorna texto"], answer: 0,
    explanation: "Condições de corrida surgem quando operações concorrentes acessam estado compartilhado de maneira sensível à ordem."
  },
  {
    category: "Programação", difficulty: "dificil",
    question: "O que significa O(n) na análise de algoritmos?",
    options: ["Tempo sempre constante", "Uso obrigatório de n computadores", "Um algoritmo sem entrada", "Crescimento linear em relação ao tamanho da entrada"], answer: 3,
    explanation: "O(n) descreve um crescimento assintótico linear em relação ao tamanho da entrada."
  },

  // ==========================================
  // CIÊNCIAS — 20 PERGUNTAS
  // ==========================================
  {
    category: "Ciências", difficulty: "facil",
    question: "Qual planeta é conhecido como planeta vermelho?",
    options: ["Vênus", "Marte", "Júpiter", "Mercúrio"], answer: 1,
    explanation: "Marte tem aparência avermelhada devido a minerais ricos em óxido de ferro."
  },
  {
    category: "Ciências", difficulty: "facil",
    question: "Qual é a fórmula química da água?",
    options: ["CO₂", "O₂", "H₂O", "NaCl"], answer: 2,
    explanation: "Uma molécula de água possui dois átomos de hidrogênio e um de oxigênio."
  },
  {
    category: "Ciências", difficulty: "facil",
    question: "Qual órgão bombeia o sangue pelo corpo humano?",
    options: ["Coração", "Pulmão", "Estômago", "Rim"], answer: 0,
    explanation: "O coração bombeia o sangue pelo sistema circulatório."
  },
  {
    category: "Ciências", difficulty: "facil",
    question: "Qual estrela está no centro do nosso sistema planetário?",
    options: ["Sirius", "Polaris", "Vega", "Sol"], answer: 3,
    explanation: "A Terra e os demais planetas do Sistema Solar orbitam o Sol."
  },
  {
    category: "Ciências", difficulty: "facil",
    question: "Qual gás as plantas absorvem durante a fotossíntese?",
    options: ["Hélio", "Dióxido de carbono", "Hidrogênio puro", "Neônio"], answer: 1,
    explanation: "As plantas utilizam dióxido de carbono, água e energia luminosa na fotossíntese."
  },
  {
    category: "Ciências", difficulty: "facil",
    question: "Qual é o estado da água quando está congelada?",
    options: ["Gasoso", "Plasma", "Sólido", "Líquido"], answer: 2,
    explanation: "O gelo é água no estado sólido."
  },
  {
    category: "Ciências", difficulty: "facil",
    question: "Qual destes animais é um mamífero?",
    options: ["Golfinho", "Tubarão", "Polvo", "Truta"], answer: 0,
    explanation: "Golfinhos são mamíferos que respiram ar e amamentam seus filhotes."
  },
  {
    category: "Ciências", difficulty: "medio",
    question: "Qual partícula tem carga elétrica negativa?",
    options: ["Próton", "Nêutron", "Núcleo", "Elétron"], answer: 3,
    explanation: "O elétron possui carga elétrica negativa."
  },
  {
    category: "Ciências", difficulty: "medio",
    question: "Qual é a unidade de força no Sistema Internacional?",
    options: ["Watt", "Newton", "Joule", "Pascal"], answer: 1,
    explanation: "A força é medida em newtons, símbolo N."
  },
  {
    category: "Ciências", difficulty: "medio",
    question: "Qual processo as células usam para liberar energia a partir de nutrientes?",
    options: ["Evaporação", "Refração", "Respiração celular", "Condensação"], answer: 2,
    explanation: "A respiração celular transforma energia química dos nutrientes em formas utilizáveis pela célula."
  },
  {
    category: "Ciências", difficulty: "medio",
    question: "Qual camada da atmosfera contém a maior parte do ozônio atmosférico?",
    options: ["Estratosfera", "Troposfera", "Exosfera", "Termosfera"], answer: 0,
    explanation: "A camada de ozônio concentra-se principalmente na estratosfera."
  },
  {
    category: "Ciências", difficulty: "medio",
    question: "Qual é o pH aproximado de uma solução neutra a 25 °C?",
    options: ["1", "3", "12", "7"], answer: 3,
    explanation: "A 25 °C, uma solução aquosa neutra tem pH próximo de 7."
  },
  {
    category: "Ciências", difficulty: "medio",
    question: "Qual estrutura celular contém a maior parte do DNA em células humanas típicas?",
    options: ["Ribossomo", "Núcleo", "Membrana plasmática", "Lisossomo"], answer: 1,
    explanation: "A maior parte do DNA de uma célula humana típica está no núcleo."
  },
  {
    category: "Ciências", difficulty: "dificil",
    question: "Qual é aproximadamente a velocidade da luz no vácuo?",
    options: ["30 mil km/s", "150 mil km/s", "300 mil km/s", "3 milhões km/s"], answer: 2,
    explanation: "A velocidade da luz no vácuo é aproximadamente 300 mil quilômetros por segundo."
  },
  {
    category: "Ciências", difficulty: "dificil",
    question: "Qual lei de Newton relaciona força resultante, massa e aceleração?",
    options: ["Segunda lei", "Primeira lei", "Lei da gravitação universal apenas", "Terceira lei"], answer: 0,
    explanation: "A segunda lei relaciona a força resultante à massa vezes a aceleração."
  },
  {
    category: "Ciências", difficulty: "dificil",
    question: "Qual tipo de ligação química envolve o compartilhamento de pares de elétrons?",
    options: ["Iônica", "Metálica", "Nuclear", "Covalente"], answer: 3,
    explanation: "Ligações covalentes envolvem o compartilhamento de pares de elétrons entre átomos."
  },
  {
    category: "Ciências", difficulty: "dificil",
    question: "Qual molécula carrega a informação genética hereditária na maioria dos seres vivos?",
    options: ["ATP", "DNA", "Glicose", "Hemoglobina"], answer: 1,
    explanation: "O DNA armazena informação genética na maioria dos organismos."
  },
  {
    category: "Ciências", difficulty: "dificil",
    question: "Qual é o nome da passagem direta do estado sólido para o gasoso?",
    options: ["Fusão", "Condensação", "Sublimação", "Solidificação"], answer: 2,
    explanation: "Sublimação é a passagem do estado sólido diretamente ao gasoso."
  },
  {
    category: "Ciências", difficulty: "dificil",
    question: "Qual fenômeno explica a mudança de direção da luz ao passar entre meios diferentes?",
    options: ["Refração", "Combustão", "Convecção", "Fissão"], answer: 0,
    explanation: "A refração ocorre quando a luz muda de velocidade e pode mudar de direção ao atravessar meios diferentes."
  },
  {
    category: "Ciências", difficulty: "dificil",
    question: "Qual é a principal função das mitocôndrias?",
    options: ["Armazenar toda a informação hereditária da célula", "Produzir a parede celular em animais", "Fabricar luz solar", "Participar da produção de ATP na respiração celular"], answer: 3,
    explanation: "As mitocôndrias participam da respiração celular e da produção de ATP."
  },

  // ==========================================
  // CONHECIMENTOS GERAIS — 20 PERGUNTAS
  // ==========================================
  {
    category: "Conhecimentos Gerais", difficulty: "facil",
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Brasília", "Salvador", "Rio de Janeiro"], answer: 1,
    explanation: "Brasília é a capital federal do Brasil."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "facil",
    question: "Quantos dias tem uma semana?",
    options: ["5", "6", "7", "8"], answer: 2,
    explanation: "Uma semana convencional tem sete dias."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "facil",
    question: "Qual oceano banha o litoral leste do Brasil?",
    options: ["Atlântico", "Índico", "Ártico", "Antártico"], answer: 0,
    explanation: "O litoral brasileiro está voltado para o oceano Atlântico."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "facil",
    question: "Qual é a moeda oficial do Brasil?",
    options: ["Peso", "Euro", "Dólar", "Real"], answer: 3,
    explanation: "A moeda oficial brasileira é o real."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "facil",
    question: "Quantos lados tem um hexágono?",
    options: ["Cinco", "Seis", "Sete", "Oito"], answer: 1,
    explanation: "Um hexágono é um polígono de seis lados."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "facil",
    question: "Em qual continente fica o Egito?",
    options: ["Europa", "América do Sul", "África", "Oceania"], answer: 2,
    explanation: "O Egito fica principalmente no nordeste da África; a península do Sinai fica na Ásia."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "facil",
    question: "Qual idioma é predominante no Brasil?",
    options: ["Português", "Espanhol", "Francês", "Italiano"], answer: 0,
    explanation: "O português é a língua oficial e predominante no Brasil."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "medio",
    question: "Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Saturno", "Netuno", "Júpiter"], answer: 3,
    explanation: "Júpiter é o maior planeta do Sistema Solar."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "medio",
    question: "Qual é a capital de Portugal?",
    options: ["Porto", "Lisboa", "Coimbra", "Braga"], answer: 1,
    explanation: "Lisboa é a capital de Portugal."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "medio",
    question: "Qual é o maior bioma brasileiro em extensão territorial?",
    options: ["Pampa", "Pantanal", "Amazônia", "Caatinga"], answer: 2,
    explanation: "A Amazônia é o maior bioma brasileiro em extensão territorial."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "medio",
    question: "Quantos minutos há em duas horas?",
    options: ["120", "60", "90", "180"], answer: 0,
    explanation: "Cada hora tem 60 minutos; duas horas totalizam 120 minutos."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "medio",
    question: "Qual instrumento mede a temperatura?",
    options: ["Barômetro", "Higrômetro", "Anemômetro", "Termômetro"], answer: 3,
    explanation: "O termômetro é utilizado para medir temperatura."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "medio",
    question: "Qual é o resultado de 12 × 8?",
    options: ["88", "96", "108", "86"], answer: 1,
    explanation: "Doze multiplicado por oito é igual a 96."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "dificil",
    question: "Qual é a capital da Austrália?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2,
    explanation: "Canberra é a capital da Austrália."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "dificil",
    question: "Qual tratado é geralmente associado à criação da União Europeia em sua forma institucional moderna?",
    options: ["Tratado de Maastricht", "Tratado de Tordesilhas", "Tratado de Versalhes", "Tratado de Utrecht"], answer: 0,
    explanation: "O Tratado de Maastricht, assinado em 1992 e em vigor desde 1993, criou formalmente a União Europeia."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "dificil",
    question: "Qual é o menor número primo maior que 20?",
    options: ["21", "22", "25", "23"], answer: 3,
    explanation: "23 é primo; 21 é divisível por 3, 22 por 2 e 25 por 5."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "dificil",
    question: "Qual é a unidade básica de medida de corrente elétrica no SI?",
    options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 1,
    explanation: "A corrente elétrica é medida em amperes, símbolo A."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "dificil",
    question: "Qual país tem Lisboa como capital?",
    options: ["Espanha", "Itália", "Portugal", "Grécia"], answer: 2,
    explanation: "Lisboa é a capital de Portugal."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "dificil",
    question: "Qual é o valor decimal do número binário 1010?",
    options: ["10", "8", "12", "14"], answer: 0,
    explanation: "1010 em binário equivale a 8 + 2, ou seja, 10 em decimal."
  },
  {
    category: "Conhecimentos Gerais", difficulty: "dificil",
    question: "Qual continente possui o maior número de países soberanos?",
    options: ["Europa", "América do Sul", "Oceania", "África"], answer: 3,
    explanation: "A África possui o maior número de países soberanos entre os continentes."
  },

  // ==========================================
  // INTELIGÊNCIA ARTIFICIAL — 20 PERGUNTAS
  // ==========================================
  {
    category: "Inteligência Artificial", difficulty: "facil",
    question: "O que significa a sigla IA?",
    options: ["Internet Avançada", "Inteligência Artificial", "Interface Automática", "Informação Analógica"], answer: 1,
    explanation: "IA significa Inteligência Artificial."
  },
  {
    category: "Inteligência Artificial", difficulty: "facil",
    question: "Qual destes é um exemplo de IA generativa?",
    options: ["Uma calculadora simples", "Um cabo USB", "Um modelo que cria texto a partir de instruções", "Um interruptor"], answer: 2,
    explanation: "IA generativa pode produzir conteúdo novo, como texto, imagens ou áudio."
  },
  {
    category: "Inteligência Artificial", difficulty: "facil",
    question: "O que é um chatbot?",
    options: ["Um programa que conversa com usuários", "Um tipo de monitor", "Um cabo de rede", "Uma bateria"], answer: 0,
    explanation: "Um chatbot interage com pessoas por meio de mensagens ou voz."
  },
  {
    category: "Inteligência Artificial", difficulty: "facil",
    question: "Qual linguagem é bastante usada em projetos de Machine Learning?",
    options: ["HTML", "CSS", "XML", "Python"], answer: 3,
    explanation: "Python oferece bibliotecas e ferramentas amplamente usadas em Machine Learning."
  },
  {
    category: "Inteligência Artificial", difficulty: "facil",
    question: "O que é um dado em um projeto de IA?",
    options: ["Sempre um arquivo de áudio", "Uma informação usada para análise ou processamento", "Apenas um número inteiro", "Um tipo de teclado"], answer: 1,
    explanation: "Dados podem ser números, textos, imagens, áudio e outras informações processáveis."
  },
  {
    category: "Inteligência Artificial", difficulty: "facil",
    question: "O que significa treinar um modelo de Machine Learning?",
    options: ["Instalar um teclado", "Desenhar o logotipo", "Ajustar seus parâmetros usando dados", "Desligar o computador"], answer: 2,
    explanation: "Durante o treinamento, o algoritmo ajusta parâmetros para aprender padrões nos dados."
  },
  {
    category: "Inteligência Artificial", difficulty: "facil",
    question: "Para que serve um assistente virtual?",
    options: ["Ajudar a responder perguntas ou realizar tarefas", "Substituir toda a internet", "Aumentar fisicamente a memória", "Imprimir sem impressora"], answer: 0,
    explanation: "Assistentes virtuais ajudam com informações, comandos e tarefas compatíveis com suas capacidades."
  },
  {
    category: "Inteligência Artificial", difficulty: "medio",
    question: "O que é aprendizado supervisionado?",
    options: ["Aprender sem dados", "Guardar arquivos em pastas", "Executar apenas regras fixas", "Treinar com exemplos que possuem rótulos conhecidos"], answer: 3,
    explanation: "No aprendizado supervisionado, o modelo aprende usando exemplos com respostas ou rótulos conhecidos."
  },
  {
    category: "Inteligência Artificial", difficulty: "medio",
    question: "O que caracteriza o aprendizado não supervisionado?",
    options: ["Todos os dados têm respostas fornecidas", "Buscar padrões em dados sem rótulos fornecidos", "O computador não processa dados", "O programa só pode usar imagens"], answer: 1,
    explanation: "Métodos não supervisionados procuram estruturas ou padrões em dados sem rótulos conhecidos."
  },
  {
    category: "Inteligência Artificial", difficulty: "medio",
    question: "O que é uma rede neural artificial?",
    options: ["Uma rede física de cabos", "Um banco de dados sem relações", "Um modelo computacional formado por unidades conectadas", "Um sistema exclusivo para impressão"], answer: 2,
    explanation: "Redes neurais usam unidades computacionais conectadas para aprender relações nos dados."
  },
  {
    category: "Inteligência Artificial", difficulty: "medio",
    question: "O que é classificação em Machine Learning?",
    options: ["Prever uma categoria ou classe", "Ordenar arquivos apenas por nome", "Criar uma conexão de internet", "Formatar um disco rígido"], answer: 0,
    explanation: "Classificação prevê classes, como spam ou não spam."
  },
  {
    category: "Inteligência Artificial", difficulty: "medio",
    question: "O que é regressão em Machine Learning?",
    options: ["Traduzir qualquer texto", "Apagar dados duplicados sempre", "Criar uma conta de usuário", "Estimar um valor numérico"], answer: 3,
    explanation: "Modelos de regressão são usados para estimar valores numéricos."
  },
  {
    category: "Inteligência Artificial", difficulty: "medio",
    question: "O que é um prompt em IA generativa?",
    options: ["Uma peça de hardware", "Uma instrução ou entrada enviada ao modelo", "Um tipo de banco de dados", "Um antivírus"], answer: 1,
    explanation: "O prompt orienta o modelo sobre a tarefa ou o conteúdo desejado."
  },
  {
    category: "Inteligência Artificial", difficulty: "dificil",
    question: "O que é overfitting em Machine Learning?",
    options: ["O modelo não consegue ser treinado", "O modelo sempre prevê a média", "O modelo se ajusta demais aos dados de treino e generaliza mal", "O banco de dados não tem tabelas"], answer: 2,
    explanation: "Overfitting ocorre quando o modelo aprende detalhes específicos do treino que prejudicam o desempenho em dados novos."
  },
  {
    category: "Inteligência Artificial", difficulty: "dificil",
    question: "Por que se separa um conjunto de teste dos dados de treinamento?",
    options: ["Para avaliar o modelo em dados não usados no ajuste", "Para tornar todos os dados idênticos", "Para impedir qualquer previsão", "Para aumentar automaticamente o tamanho do modelo"], answer: 0,
    explanation: "Dados de teste ajudam a estimar o desempenho em exemplos não usados no treinamento."
  },
  {
    category: "Inteligência Artificial", difficulty: "dificil",
    question: "O que é uma matriz de confusão?",
    options: ["Uma lista de senhas", "Uma ferramenta de edição de imagem", "Um gráfico exclusivo de regressão", "Uma tabela que compara classes previstas com classes reais"], answer: 3,
    explanation: "A matriz de confusão resume acertos e erros de um classificador por classe."
  },
  {
    category: "Inteligência Artificial", difficulty: "dificil",
    question: "O que é um modelo de linguagem grande, ou LLM?",
    options: ["Um sistema operacional", "Um modelo treinado em grandes quantidades de dados para tarefas de linguagem", "Um cabo de alta velocidade", "Um formato de vídeo"], answer: 1,
    explanation: "LLMs aprendem padrões da linguagem e podem realizar tarefas como gerar e resumir textos."
  },
  {
    category: "Inteligência Artificial", difficulty: "dificil",
    question: "O que é uma alucinação em um modelo generativo?",
    options: ["Uma falha física do monitor", "Uma atualização de hardware", "Uma resposta inventada ou incorreta apresentada como se fosse verdadeira", "Uma cópia de segurança"], answer: 2,
    explanation: "Modelos generativos podem produzir informações falsas com aparência convincente."
  },
  {
    category: "Inteligência Artificial", difficulty: "dificil",
    question: "Qual é uma finalidade da regularização em Machine Learning?",
    options: ["Reduzir o risco de sobreajuste", "Garantir 100% de acerto", "Eliminar a necessidade de dados", "Impedir todo tipo de erro"], answer: 0,
    explanation: "A regularização limita a complexidade efetiva do modelo ou penaliza certos ajustes para ajudar na generalização."
  },
  {
    category: "Inteligência Artificial", difficulty: "dificil",
    question: "O que é aprendizado por reforço?",
    options: ["Treinar apenas com respostas escritas", "Armazenar dados em planilhas", "Classificar imagens sem avaliação", "Aprender por interação, usando recompensas ou penalidades"], answer: 3,
    explanation: "No aprendizado por reforço, um agente aprende estratégias com base nas consequências de suas ações."
  }
];
