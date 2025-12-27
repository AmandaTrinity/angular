# Angular Landing Page - Tech Consult

Esta é uma landing page simples desenvolvida como um projeto de prática para aprofundar os conhecimentos em Angular.

## 🎯 Objetivo

O foco principal deste projeto foi aplicar conceitos do Angular, como:
- Componentização
- Data Binding (`@Input`)
- Diretivas (`ngSrc` para `NgOptimizedImage`)
- Estilização responsiva com SCSS

## 🌐 Live Demo

Você pode ver o projeto em ação aqui: https://landing-page-tech-consult.vercel.app/

## 🚀 Como Executar o Projeto

Para visualizar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run start
    ```
    Abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## 🐳 Como Executar com Docker (Produção)

O projeto está configurado para ser "containerizado" com Docker. Embora o uso de Docker para uma landing page simples possa ser considerado um exagero, a implementação foi feita como um exercício prático para aprender e aplicar os conceitos de containerização, criando uma imagem de produção otimizada com Nginx.

1.  **Construa a imagem Docker:**
    ```bash
    docker build -t landing-page-angular .
    ```

2.  **Execute o contêiner:**
    ```bash
    docker run --rm -p 8080:80 landing-page-angular
    ```
    Abra seu navegador e acesse `http://localhost:8080/`.

## 🤖 Sobre os Assets (Imagens e Logo)

As imagens e o logo utilizados nesta página foram gerados com o auxílio de Inteligência Artificial. A decisão foi tomada para permitir um foco maior no desenvolvimento, na lógica e na estruturação do código com Angular, em vez de dedicar tempo à criação de assets gráficos.
