# Seminário C214 👋
Referente ao projeto desenvolvido para o seminário da disciplina de Engenharia de Software do Instituto Nacional de Telecomunicações - INATEL.


<h1 align="center">Projeto de Engenharia de Software</h1>

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/IagoCB/lab-c214)
![GitHub language count](https://img.shields.io/github/languages/count/IagoCB/lab-c214)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/IagoCB/lab-c214)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/IagoCB/lab-c214)

</div>

<div>
<h2>Menu de Navegação</h2>

- <a href="#ideia">Ideia</a>
- <a href="#app">Aplicação</a>
- <a href="#framework">Framework</a>
  - <a href="#angular">Angular</a>
  - <a href="#instal">Instalação</a>
- <a href="#requirements">Pré-requisitos</a>
- <a href="#testes">Testes</a>
- <a href="#howTo">Como executar</a>
</div>

# <div id=ideia>Ideia 💡</div>	
Consiste em desenvolver uma aplicação básica a fim de praticar e consolidar o que foi visto nas aulas teóricas da matéria.

# <div id=app>Aplicação 💻</div>
Trata-se, basicamente, de uma lista de compras simples. O objetivo principal é testar os recursos do <a href="#angular">framework</a> escolhido e aplicar, na prática, os conceitos de teste vistos em sala de aula.


# <div id=framework>Framework 🔗</div>
## <div id=angular>Angular</div>
O <a href="https://angular.io/">Angular</a> é um framework JavaScript reativo mantido pelo Google, utilizado para o desenvolvimento de aplicações web modernas. Foi construído com TypeScript e sua arquitetura se baseia em "componentes", que são pequenos grupos de funcionalidades isoladas e independentes.

  <img align="right" alt="Node" height="65" width="75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png">

## <div id=instal>Instalação</div>
Não é necessária a instalação, pode ser inserido via <a href="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">API do google</a>, diretamente no <a href="https://github.com/jvoliveirag/Seminario-C214/blob/main/src/main/index.html">script</a> do HTML, por exemplo. Mas, caso queira conferir, basta <a href="https://angular.io/guide/setup-local">clicar aqui</a> para acessar a documentação.

Mas, basicamente a instalação e criação de um projeto Angular pode ser feita seguindo os seguites passos:

1. Instale o Angular cli:
```
npm i -g @angular/cli
```
2. Crie um projeto
```
ng new <nome do projeto>
```

# <div id=requirements>Pré requisitos ✅</div>
É necessário ter o <a href="https://nodejs.org/en/">Node Js</a> instalado, é ele quem será o responsável pelo gerenciamento das dependências do projeto. No mais, todo o restante será gerido pelo próprio Angular, dentro do projeto.

# <div id=testes>Testes - Jasmine 🧪</div>

Podemos instalar o Jasmine pelo terminal com o seguinte comando:
```
npm i jasmine
```
E em seguida, inciá-lo.
```
jasmine init
```
A execução será mostrada a seguir.
Obs.: documentação do Jasmine pode ser encontrada clicando <a href="https://jasmine.github.io/pages/getting_started.html">aqui</a>.

OBS.: Os testes que foram executados durante a apresentação em sala de aula podem ser encontrados <a href="https://github.com/jvoliveirag/Seminario-C214/tree/main/testes_apresentados">aqui</a>, e sua execução se dá conforme descrito abaixo.

# <div id=howTo>Como executar ⚙️</div>

## Executando a aplicação
1. Clone este repositório em sua máquina;
2. Em seguida, digite o comando abaixo no terminal:
```
npm init
```
3. Na sequência, siga com o procedimento conforme indicado no terminal;
4. Após isso, digite:

```
npm i express
```
5. Com o express instalado, a aplicação já estará pronta para executar, então basta rodar o comando a seguir:
```
node server.js
```
6. No terminal será exibida a mensagem "Server running...", indicando que a aplicação está sendo executada, sendo assim basta <a href="http://localhost:8080">clicar aqui</a> para exibi-la no navegador.

Com o ambiente já configurado, é hora de rodar os testes.
## Executando os testes (no terminal)

1. Basta estar no diretório raiz da aplicação e executar o seguinte comando no terminal: 
```
npm test
```
2. Os testes serão exibidos em seguida mostrando seus respectivos resultados.

## Testes com o Karma no Browser

Dentro do diretório da aplicação execute o seguinte comando:
```
ng test
```
Uma página do seu navegador padrão abrirá e serão exibidos os testes e seus resultados.
Além disso os resultados também são exibidos em tempo real no terminal, ou seja, mesmo enquanto estão sendo feitas alterações no código é possível ver se o teste passa ou não.

