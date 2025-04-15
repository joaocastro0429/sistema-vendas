# 📦 Sistema de Vendas - NestJS

Projeto de backend para gerenciamento de produtos e vendas, com autenticação JWT e documentação Swagger.

---

## ✅ Funcionalidades

- [x] **CRUD de Produtos**
- [x] **Cadastro e login de usuários com JWT**
- [x] **Registro de Vendas**
- [x] **Listagem de Vendas**
- [x] **Relatório de Vendas**
- [x] **Rotas protegidas com autenticação**
- [x] **Documentação com Swagger**

---

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) ou outro banco relacional
- [JWT](https://jwt.io/) para autenticação
- [Swagger](https://swagger.io/) para documentação da API
- [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Estrutura do Projeto

src/ ├── auth/ # Módulo de autenticação (JWT) ├── users/ # Cadastro e login de usuários ├── products/ # CRUD de produtos ├── sales/ # Registro e listagem de vendas ├── prisma/ # Serviço Prisma ├── dto/ # DTOs usados nos módulos └── main.ts # Ponto de entrada da aplicação



---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sistema-vendas.git
cd sistema-vendas

# Instale as dependências
npm install

# Crie o arquivo .env com as variáveis de ambiente
cp .env.example .env

# Execute as migrações (após configurar o banco no .env)
npx prisma migrate dev --name init

# Inicie o projeto
npm run start:dev
