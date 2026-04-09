# Prova 1 — Sistema de Autenticação Básico

Aplicação web com sistema de login desenvolvida com Node.js, Express e JavaScript puro.

## Sobre o Projeto

O sistema permite que o usuário faça login através de um formulário HTML. As credenciais são enviadas ao servidor via `fetch`, que valida os dados e retorna sucesso ou erro.

## Tecnologias Utilizadas

- **Node.js** — ambiente de execução do servidor
- **Express** — framework para criar o servidor web
- **body-parser** — leitura do corpo das requisições JSON
- **CORS** — permite comunicação entre frontend e backend local
- **HTML/CSS/JavaScript** — interface do usuário

## Estrutura do Projeto

```
prova1-login/
├── index.html        # Tela de login
├── styles.css        # Estilos da página
├── server.js         # Servidor Node.js
├── package.json      # Dependências do projeto
└── .gitignore        # Ignora node_modules
```

## Como Rodar

1. Instalar dependências:
```bash
npm install
```

2. Iniciar o servidor:
```bash
node server.js
```

3. Abrir o `index.html` no navegador

> O servidor roda em `http://localhost:3000`

## Usuários de Teste

| Usuário | Senha |
|---------|-------|
| admin   | 123   |
| user    | 456   |

## Funcionalidades

- Login com validação de usuário e senha
- Proteção contra injeção de código (bloqueia o caractere `;`)
- Retorno de status HTTP corretos:
  - `200` — login bem-sucedido
  - `400` — entrada inválida
  - `401` — credenciais incorretas
- Exibição de mensagens de erro e sucesso no frontend
