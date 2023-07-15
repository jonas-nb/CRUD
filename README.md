# CRUD Simples para Fins de Estudo

O CRUD Simples para Fins de Estudo é uma aplicação desenvolvida com o objetivo de auxiliar no aprendizado e prática dos fundamentos básicos de desenvolvimento web. A aplicação permite a criação, leitura, atualização e exclusão de registros em um banco de dados, seguindo o padrão CRUD (Create, Read, Update, Delete).

## Recursos Principais

- Criação de Registros: Os usuários podem criar novos registros fornecendo informações relevantes por meio de um formulário simples. Os dados inseridos serão armazenados no banco de dados.

- Leitura de Registros: Os registros existentes são exibidos em uma visualização organizada, permitindo que os usuários leiam as informações de forma clara e acessível.

- Atualização de Registros: Os usuários podem editar os registros existentes, modificando as informações previamente inseridas. As alterações são salvas no banco de dados, garantindo a consistência dos dados.

- Exclusão de Registros: Os usuários têm a opção de remover registros indesejados. Ao confirmar a exclusão, os registros correspondentes são removidos do banco de dados.

## Tecnologias Utilizadas

- Linguagem de Programação: JavaScript
- Ambiente de Execução: Node.js
- Framework Web: Express.js
- Banco de Dados: PostgreSQL (Postgres)
- Template Engine: Mustache
- Estilização: CSS puro

## Objetivos de Aprendizado

- Compreender os conceitos do padrão CRUD e sua aplicação em projetos web.
- Familiarizar-se com o ambiente de desenvolvimento Node.js e a criação de servidores com o framework Express.js.
- Adquirir conhecimento sobre manipulação básica de bancos de dados utilizando o PostgreSQL.
- Praticar a construção de formulários de entrada de dados e a exibição de dados em uma interface amigável ao usuário.
- Desenvolver habilidades de estilização básica usando CSS.

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Faça o download do projeto ou clone-o do repositório.

3. Abra o terminal ou prompt de comando e navegue até a pasta raiz do projeto.

4. Execute o seguinte comando para instalar as dependências do projeto:

<code>npm install</code>

5. Certifique-se de ter o PostgreSQL instalado e configurado em sua máquina.

6. No arquivo `.env`, configure as variáveis de ambiente relacionadas ao banco de dados de acordo com a sua configuração local.

7. Execute o seguinte comando para criar as tabelas no banco de dados:

<code>npx sequelize-cli db:migrate</code>

8. Por fim, execute o seguinte comando para iniciar o servidor de desenvolvimento:

<code>npm run start-dev</code>

9. A aplicação estará disponível em `http://localhost:4000`.

Certifique-se de ter todas as dependências e configurações necessárias para garantir o correto funcionamento da aplicação.

## Agora você pode explorar o projeto e praticar o CRUD básico, aprimorando seus conhecimentos em desenvolvimento web.

---
