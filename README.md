<div align="center">

# 📚 LendoMais — Operação Nuvem Literária

Deploy em nuvem de uma aplicação de catálogo de livros (React, Node.js e PostgreSQL) utilizando Docker, Docker Hub, Render e GitHub Actions.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

</div>

---

## 🚧 Maior desafio técnico

...

---

## 🔗 Links

| 🌐 Recurso | Endereço |
|---|---|
| 🖥️ Frontend | https://lendomais-web.onrender.com |
| ⚙️ API | https://lendomais-api-v1.onrender.com/api/books |
| 🐳 Imagem Docker (API) | https://hub.docker.com/r/leandrami/lendomais-api |
| 🐳 Imagem Docker (Frontend) | https://hub.docker.com/r/leandrami/lendomais-web |

> ⏳ O Render utiliza plano gratuito: a primeira requisição após um período de inatividade pode levar cerca de 1 minuto.

---

## 🏗️ Arquitetura

- 🖥️ **Frontend:** React (Vite) servido por Nginx
- ⚙️ **Backend:** API Node.js (Express) com PostgreSQL
- 🐳 **Registro de imagens:** Docker Hub
- ☁️ **Hospedagem:** Render (Existing Image)
- 🔄 **CI/CD:** GitHub Actions

---

## 🔄 Pipeline CI/CD

A cada push na branch `main`, o workflow [`ci-cd.yml`](.github/workflows/ci-cd.yml) valida o build, gera as imagens Docker, publica no Docker Hub e aciona o deploy no Render.

---

## ⚙️ Variáveis de ambiente

| Serviço | Variável | Função |
|---|---|---|
| ⚙️ API | `DATABASE_URL` | Conexão com o PostgreSQL |
| ⚙️ API | `FRONTEND_URL` | Origem permitida pelo CORS |
| 🖥️ Frontend | `VITE_API_URL` | URL base da API |

---

## 💡 Aprendizados

- 🐳 Containerização com Dockerfile e build em múltiplos estágios
- 🔧 Gerenciamento de variáveis de ambiente, CORS e porta dinâmica
- 🚀 Automação de build, publicação e deploy com CI/CD
- 🔐 Gestão de segredos fora do código-fonte e das imagens
