# 🥦🍓 Fresh'n Fast API

Este é um projeto de backend desenvolvido com **NestJS** que simula um sistema de delivery de hortifruti. A aplicação oferece endpoints para autenticação, gerenciamento de usuários, produtos, pedidos e integração com documentação via Swagger.

---

## 📂 Como Clonar o Repositório

Clone o projeto usando o comando abaixo:

```bash
git clone https://github.com/Louvpiie/N2.WEB.git
cd N2.WEB
````

---

## 🚀 Tecnologias Utilizadas

* **NestJS** - Framework para construção de APIs escaláveis em Node.js
* **TypeORM + SQLite** - ORM com banco de dados leve para desenvolvimento local
* **JWT + Passport** - Autenticação segura com tokens
* **Swagger** - Documentação interativa da API

---

## 🔧 Instalação

Execute os seguintes comandos para instalar as dependências:

```bash
# Instala o núcleo do NestJS
npm install @nestjs/core

# Instala o módulo de configuração
npm install @nestjs/config

# Instala o CLI do NestJS globalmente
npm i -g @nestjs/cli

# Instala ORM com banco de dados SQLite
npm install @nestjs/typeorm typeorm sqlite3

# Instala pacotes de autenticação
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt

# Tipagens para desenvolvimento
npm install --save-dev @types/passport-jwt @types/bcrypt

# Suporte à documentação Swagger
npm install --save @nestjs/swagger
```

---

## ▶️ Como Executar

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

---

## 🌐 Acesso à API

Após iniciar o servidor, a API estará disponível no endereço:

👉 [http://localhost:3000/api](http://localhost:3000/api)

Você poderá visualizar e testar os endpoints via Swagger.

---

## 👨‍👩‍👧‍👦 Integrantes do Grupo

* Louie Nery Silva UC24101358
* João Filipe Alves de Albuquerque UC24102128
* Mateus Henrique Lacerda Lopes UC24102584
* Guilherme Souza Rocha UC24101057

