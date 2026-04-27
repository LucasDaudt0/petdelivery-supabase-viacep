# 📦 Sistema de Agendamentos com Supabase + ViaCEP

Este projeto demonstra a integração de **JavaScript puro (ES6+)** com o **Supabase** e a API **ViaCEP**, permitindo o cadastro de clientes, endereços e gerenciamento de agendamentos.

A aplicação valida automaticamente o CEP e restringe os serviços à cidade de **Macaé**, garantindo consistência nos dados.

---

## 🚀 Funcionalidades

- Cadastro de clientes  
- Cadastro automático de endereço via CEP  
- Validação de cidade (apenas Macaé)  
- Criação de agendamentos  
- Listagem de agendamentos (com filtro opcional)  
- Exclusão de agendamentos  

---

## 🛠 Tecnologias Utilizadas

- JavaScript (ES6+ / Async-Await)  
- Supabase (PostgreSQL + REST API)  
- API ViaCEP  
- Fetch API  

---

## 📁 Estrutura das Tabelas (Supabase)

### **clientes**
| Campo     | Tipo        |
|----------|------------|
| id       | integer (PK) |
| nome     | text       |
| telefone | text       |

### **enderecos_clientes**
| Campo       | Tipo        |
|------------|------------|
| id         | integer (PK) |
| cliente_id | integer (FK) |
| cep        | text       |
| rua        | text       |
| bairro     | text       |
| cidade     | text       |

### **agendamentos**
| Campo       | Tipo        |
|------------|------------|
| id         | integer (PK) |
| cliente_id | integer (FK) |
| servico    | text       |
| data       | date       |

---

## ⚙️ Configuração

Antes de rodar o projeto, configure suas credenciais do Supabase:

```javascript
const SUPABASE_URL = 'SUA_URL_AQUI';
const SUPABASE_KEY = 'SUA_CHAVE_AQUI';
