# Projeto API Rick and Morty
<p align="center">
<img src="https://i.imgur.com/2RQPs8z.png" alt="image" width="480" height="300">
  <br>
  <a href="https://rick-and-morty-ten-indol.vercel.app/index.html">Link do Projeto</a>
</p>

# Rick and Morty Character Browser

Este é um aplicativo da web que permite aos usuários procurar e filtrar personagens da série de animação "Rick and Morty". Ele consome a API pública fornecida em [https://rickandmortyapi.com/api/](https://rickandmortyapi.com/api/).

## Funcionalidades

- Pesquisa de personagens por nome.
- Filtragem por espécie, gênero e status.
- Carregar mais personagens à medida que você rola a página.
- Clique em um personagem para ver mais detalhes em uma página separada.

## Tecnologias Utilizadas

- JavaScript
- HTML
- CSS

## Responsividade
O Codigo é inteiramente responsivo, sem utilizar sequer uma media query, tudo graças a estruturação feita desde o HTML até o CSS, utilizando porcentagens e medidas que se adequam a diferentes tamanhos como rem.

## Como Iniciar o Projeto
1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/SmallCityProgrammer/Rick-and-Morty
```

2. Navegue até o diretório do projeto:

```bash
cd Rick-and-Morty
```

3. Abra o arquivo `index.html` em seu navegador da web para começar a usar o aplicativo.

## Estrutura do Código

- `index.html`: A página inicial do aplicativo.
- `charPage.html`: A página que exibe detalhes do personagem quando clicado.
- `script.js`: O arquivo JavaScript que controla a funcionalidade do aplicativo.
- `style.css`: O arquivo CSS que estiliza o aplicativo.

## Funcionalidades no Código

- O código usa JavaScript assíncrono para buscar e renderizar os personagens da API.
- Os filtros por espécie, gênero e status atualizam a lista de personagens em tempo real.
- O botão "Carregar Mais" permite carregar mais personagens à medida que você rola a página.
- Ao clicar em um personagem, seus detalhes são armazenados no `localStorage`, e você é redirecionado para a página `charPage.html` para ver mais informações.

## Autor

Eliezer Castro - [Github](https://github.com/SmallCityProgrammer)
