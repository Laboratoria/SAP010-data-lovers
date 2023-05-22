# Data Lovers - Breaking Bad

  <p align="center">Clique aqui para acessar o projeto</p>
  <p align="center">Status do projeto: em desenvolvimento</p>

<div align="center">
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white//https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
[![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white//https://developer.mozilla.org/en-US/docs/Web/CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
[![GIT](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white//https://git-scm.com/)](https://git-scm.com/)
[![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white//https://github.com//)](https://github.com/)
[![JEST](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white//https://jestjs.io/pt-BR/)](https://jestjs.io/pt-BR/)
[![FIGMA](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white//https://figma.com/)](https://figma.com/)
[![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white//https://nodejs.org/en)](https://nodejs.org/en)
</div>

## Índice

- [1. Resumo do projeto](#1-resumo-do-projeto)
- [2. Histórias de usuários](#2-histórias-de-usuário)
- [3. Desenho de interface do usuário](#3-desenho-de-interface-do-usuário)
- [4. Testes de usabilidade](#4-testes-de-usabilidade)
- [5. Testes unitários](#5-testes-unitários)
- [6. Objetivos alcançados](#6-objetivos-alcançados)
- [7. Desenvolvedoras](#7-desenvolvedoras)

---

## 1. Resumo do projeto

Desenvolvido no bootcamp da [Laboratória](https://www.laboratoria.la/br), o projeto Data Lovers teve como objetivo principal a construção de uma página web que permitisse ao usuário visualizar dados, filtrá-los, ordená-los e fazer algum cálculo agregado, conforme a sua necessidade.

O tema escolhido foi Breaking Bad, e o site é destinado aos fãs da série. Nele, os fãs podem fazer pesquisas sobre os seus principais personagens,

## 2. Histórias de usuário

**História do usuário 1:**
_"Sou um fã da série, e gostaria de saber que personagens aparecem nas duas séries (Breaking Bad e Better Call Saul), e quais só aparecem em uma delas."_

A partir desta necessidade do usuário, foi criado o filtro por séries, no qual ele pode selecionar os personagens buscando pelas séries em que atuam.

**História do usuário 2:**
_"Como fã da série, gostaria de relembrar quais personagens ainda estão vivos e quais não estão mais."_

A partir desta história, foi criado o filtro por status, que retorna quais personagens estão vivos e quais estão falecidos ou presumidamente falecidos.

## 3. Desenho de interface do usuário

O protótipo do site foi feito primeiramente à mão, para que, posteriormente, pudesse ser feito na plataforma Figma. Houveram algumas adequações ao longo do projeto para que houvesse uma melhor experiência do usuário. Por exemplo, os filtros foram adequados para que o usuário pudesse navegar mais facilmente entre eles:

#### Protótipo de baixa fidelidade

![Alt text](src/img/prot%C3%B3tipo%20-%20baixa%20fidelidade.jpeg)

Os filtros de "apelido", "ocupação" e "status" foram substituídos por "status" e "série". Os dois últimos correspondem a um número maior de personagens, permitindo ao usuário fazer uma busca que fosse mais abrangente. Além disso, o filtro por séries permite ao usuário ver em quais séries o personagem atua. Veja os protótipos abaixo, feitos no Figma:

#### Protótipo de alta fidelidade versão desktop

![Alt text](src/img/Prot%C3%B3tipo%20de%20alta%20fidelidade%20-%20desktop.png)

#### Protótipo de alta fidelidade versão mobile

![Alt text](src/img/Prot%C3%B3tipo%20de%20alta%20fidelidade%20-%20mobile.png)

## 4. Testes de usabilidade

O usuário realizou o Teste de interface e a Reavaliação do design do produto, identificou que a navegabilidade é de fácil entendimento, na primeira página, após ler a apresentação, entendeu que era para clicar na van, e por ela se tornar opaca deu maior destaque a função dela.

Ao navegar na página de contém os cards identificou que a navegabilidade também era de fácil entendimento, gostou da posição do logo e estética dos cards, e pontuou possíveis melhorias, como o botão “clear” poderia ter seu nome alterado para “reset”, e que ele mudasse de forma ou de lugar, pois está exatamente igual aos outros, o que pode causar confusão, e ele estando na mesma linha dos botões de filtro, pode parecer que seja só para limpar aquela linha, quando na verdade ele também limpa a pesquisa da busca por personagem.

Ainda nos botões, percebeu que o botão “back” possuía uma tonalidade de cor diferente dos demais. Conforme abaixo:

![Alt text](src/img/header%20e%20botoes.png)

No espaço de pesquisa por personagem, acrescentar o “...character name”, pois a busca é somente pelo nome do personagem, caso tente procurar por “nickname” não conseguirá.

Pontuou que o “corte” entre o header e os cards estava estranho, sugerindo que pudesse colocar outra tonalidade de preto, ou que o fundo dos cards a acompanhasse até em cima.

E por fim, apesar de ter assistido a série inteira, o usuário informou que poderia conter um aviso que a pesquisa de “status” poderia conter spoiler.

O tempo de pesquisa e entendimento foi considerado dentro dos limites estipulados.

## 5. Testes unitários

Conforme estabelecido no Projeto os testes unitários devem ter cobertura mínima de 70% de statements (sentenças), functions (funções), lines (linhas), e branches (ramos) do arquivo src/data.js, que irá conter as funções, o nosso projeto cobriu 100%.

Lembrando que todos os teste foram escritos por nós.

![Alt text](src/img/testesUnitarios.png)

## 6. Objetivos alcançados

- [x] Usar VanillaJS.
- [x] Passa pelo linGIter (`npm run pretest`)
- [x] Passa pelos testes (`npm test`)
- [x] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
      branches.
- [x] Inclui uma _definição de produto_ clara e informativa no `README.md`.
- [x] Inclui histórias de usuário no `README.md`.
- [x] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
- [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no
      `README.md`.
- [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
- [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
- [x] UI: Permite filtrar dados com base em uma condição.
- [ ] UI: É _responsivo_.

## 7. Desenvolvedoras

Geane Ramos

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/geanemr)](https://github.com/geanemr) [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/geane-moraes-ramos/)](https://www.linkedin.com/in/geane-moraes-ramos/)

Marina Braz

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/maahnbraz)](https://github.com/maahnbraz) [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://https://www.linkedin.com/in/marinanbraz/)](https://www.linkedin.com/in/marinanbraz/)
