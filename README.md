# Data Lovers

## Índice

- [Data Lovers](#data-lovers)
  - [Índice](#índice)
  - [1. Resumo do projeto](#1-resumo-do-projeto)
  - [2. Histórias de usuário](#2-histórias-de-usuário)
  - [3. Feedback de teste de usabilidade](#3-feedback-de-teste-de-usabilidade)


***

## 1. Resumo do projeto

Nosso projeto trata-se de  **uma _página web_** desenvolvida para os fãs de Pokémon que desejarem obter mais dados e informações sobre os eles. O usuário poderá visualizar os dados, ordena-los e fazer alguns cálculos de informações relevantes, tais como médias, valores máximos e mínimos, etc.

 **Ferramentas e tecnologias utilizadas**

* **Figma** para o desenho do [prótipo de baixa fidelidade](https://www.figma.com/file/JP7AoZGHkFIvsGbb5NyDFc/data-lovers?type=design&node-id=0-1&t=nlMkHIDMdTdB5uDD-0).

* **GitHubPages** para hospedagem de [site](https://helouiseitokazo.github.io/SAP010-data-lovers/) estático .

* **GitHub** para armazenar o repositório do projeto.

* **CSS/HTML/JS** para estilização, marcação de texto e linguagem de programação, respectivamente.

## 2. Histórias de usuário

O usuário acessará a página web, este acesso pode ser realizado de diversos dispositivos com tamanhos distintos, tais como (desktop, tablet, celular e etc.), visto que o site conta com a resposividade para se adaptar ao contexto do usuário.

A primeira página exibirá os campos de busca para que o usuário possa inserir os dados que deseja pesquisar, além de escolher as formas de ordenação para a exibição do resultado. E, também contara com seletores para que ele possa fazer cálculos que tragam informações relevantes sobre os pokémons.

Além disso logo na primeira página serão exibidos os cards com um resumo das informações de todos os Pokemons. Ao inserir o nome do Pokémon que deseja obter mais informações, o mesmo será exibido na tela trazendo consigo as próximas evoluções se houver.

Caso o usuário digite um nome inexistente na base de dados, o mesmo será notificado com uma mensagem. Desta forma o usuário terá a oportunidade de revisar o dado inputado para que ele tenha o acesso as informações desejadas.

Além de pesquisar por nome o usuário também poderá pesquisar o pokemon desejado filtrando pelo tipo dele. Estes dados poderão ser ordenados de alfabeticamente de forma crescente ou decrescente.

O usuário poderá cliclar sobre o card do pokemon na qual deseja saber mais informações e será redirecionado para uma nova página onde todos os dados sobre este pokemon serão exibidos detalhamente.

Através do menu de navegação, o usuário poderá escolher se deseja retornar para a página principal, ou para a página de estátisticas.

Recomendamos usuário utilize o navegador do **Google Chrome** para traduzir o conteúdo se assim desejar.

## 3. Feedback de teste de usabilidade

Abaixo descrevo o feedback de um usuário ao testar o MVP1, cada item mencionado abaixo será um requisito para melhorar no MVP2:

1. O usuário se incomodou, pois o alinhamento dos selects não estão perfeitamente alinhados com a lagura do input.
2. O usuário achou que a cor da barra de Menu está fora de contexto, visto que todas as cores são escuras e a cor do menu ficou muito clara.
3. O usuário não entendeu o que é uma ordenação ASC e DESC.
4. O usuário constatou que não limite de caracteres no input.
5. O usuário disse que trazer a próxima evolução do Pokémon na busca fica confuso, e parece que está filtrando errado.
6. O usuário sugeriu desabilitar o botão de pesquisar caso o usuário não selecione o tipo de Pokémon.
7. O usuário sentiu falta de uma mensagem de erro quando os padrões de busca não são atendidos.

