# Conheça os personagens da série Breaking Bad :cook:

Breaking Bad é uma série de televisão americana criada e produzida por Vince Gilligan. Ambientado e produzido em Albuquerque, Novo México, segue a história de Walter White, um professor de química que é diagnosticado com câncer de pulmão inoperável. Walter se volta para uma vida de crime produzindo e distribuindo metanfetamina ao lado de um ex-aluno, Jesse Pinkman, a fim de arrecadar dinheiro suficiente para o futuro de sua família após sua morte inevitável.

---

Para este projeto, desenvolvemos uma aplicação responsiva que fornece dados sobre a série Breaking Bad e um conteúdo extra da série Better Call Saul.  A aplicação possui recursos de ordenação alfabética, filtro dos personagens por temporada e filtragem por nome.

***

## Índice

* [1. Resumo do projeto](#1-Resumo_do_projeto) 
* [2. História do Usuário](#2-História_do_Usuário)
* [3. Protótipo](#3-Protótipo)
* [4. Interface](#Interface)
* [5. Responsividade](#5-Responsividade)
* [6. Testes Unitários](#6-Testes_Unitários)
* [7. Equipe do Projeto](#7-Equipe_do_Projeto)
* [8. Checklist](#8-Checklist)


***

## 1. Resumo do projeto :notebook:

O objetivo desse projeto é construir uma página web que permita visualizar, filtrar, ordenar e realizar cálculos agregados do conjunto de dados da série Breaking Bad. Além disso, atender as necessidades do usuário, fornecendo informações relevantes e uma interface intuitiva.

## 2. História do Usuário

Fazendo uma investigação (pesquisa) sobre as informações que nossos usuários podem precisar, descobrimos que os dados de maior interesse são:

1. Informações sobre os personagens como nome, apelido, ocupação e nome da atriz ou ator que o interpreta.

2. Além dessas informações, Breaking Bad coexiste com Better Call Saul; para nossos usuários é importante poder ver a lista de personagens que aparecem em cada uma das séries.

Para isso, adicionamos dois filtros, um para ordenar de A-Z ou Z-A e outro para filtrar da temporada 1 a 5, mais uma opção de selecionar para visualizar quais personagens aparecem na série Better Call Soul. Além disso, adicionamos uma barra de pesquisa e dois botões para direcionar o usuário para outra guia com o trailer das séries (breaking Bad e Better Call Soul).

## 3. Protótipo :pen:

Em uma folha de papel, criamos o esboço inicial do design, considerando todos os elementos e funcionalidades que gostaríamos de incorporar. Em seguida, utilizamos o **Figma** e desenvolvemos um protótipo de alta fidelidade para apresentar o que consideramos o ideal para o nosso usuário.


![Protótipo de baixa fidelidade](src/img/imagem%20prototipo.jpg)![Protótipo de Alta Fidelidade](src/img/Prot%C3%B3tipo%20de%20alta%20fidelidade.jpg)


## 4. Interface :computer:

A interface criada considerou todas as recomendações recebidas pelos usuários em nossa pesquisa de campo, juntamente com as narrativas de usuários elaboradas.

1. Na primeira tela, convidamos os nossos usuários a conhecer melhor os personagens da série. 

![Tela 1](src/img/interface%201.jpg)

2. Na página seguinte, exibimos por meio de cards, todos os protagonistas da série "Breaking Bad" com a possibilidade de pesquisar pelo nome, classificar e filtrar por temporada. Adicionalmente, disponibilizamos a funcionalidade de filtrar os personagens da série "Better Call Saul", o que é uma informação relevante para nossos usuários. Além disso, há links adicionais para os trailers das séries, que redirecionam os usuários para o YouTube.

![Tela 2](src/img/interface%202.jpg)

3. Ao clicar no card, ele gira e no verso, apresenta algumas informações adicionais, como data de aniversário, o status do personagem, nome do protagonista, entre outros. 

![Tela 3](src/img/interface%203.jpg)

## 5. Responsividade :iphone:

Criamos uma interface responsiva que poderá ser visualizada sem problemas a partir de diversos tamanhos de tela: celulares, tablets, notebooks, etc.



## 6. Testes Unitários :ok_hand:

Elaboramos nossos testes unitários para as funções encarregadas de processar, filtrar e ordenar os dados, assim como calcular estatísticas. 
Nossos testes cobriram 100% de statements (sentenças), functions (funções), lines (linhas), e branches (ramos) do arquivo src/data.js.

![NPM Test](src/img/imagem%20test.jpg)

## 7. Equipe do Projeto :busts_in_silhouette:

<div align="center">
  

  <br>
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img align="center" alt="Jest" height="30" width="40" src="https://www.svgrepo.com/show/353930/jest.svg" />
  <br>

  Desenvolvido por 
  <br>
   Myllena M. Martins <br>
  [Linkedin](https://www.linkedin.com/in/myllenamirandamartins/) | [Github](https://github.com/myllenammartins)
  <br>
  Nívia Miranda <br> 
  [Linkedin](https://www.linkedin.com/in/niviacristina/) | [Github](https://github.com/Nivicris)
  </div>



***

## 8. Checklist :white_check_mark:

* [:star: ] Usar VanillaJS.
* [:star: ] Passa pelo linter (`npm run pretest`)
* [:star: ] Passa pelos testes (`npm test`)
* [:star: ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [:star: ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [:star: ] Inclui histórias de usuário no `README.md`.
* [:star: ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [:star: ] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [:star: ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [:star: ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [:star: ] UI: Permite filtrar dados com base em uma condição.
* [:star: ] UI: É _responsivo_.
