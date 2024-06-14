# Documentação da API - Postman Collection

## Descrição
Esta documentação descreve as APIs disponíveis na aplicação para gerenciamento de avaliações de produtos.

## Como Usar a API

### Autenticação
Antes de utilizar as APIs, você precisa obter um token de autenticação JWT. Para isso, utilize a rota `/auth/login` com o seu email e senha. Inclua o token JWT obtido nas requisições subsequentes no header Authorization.

### Rotas Disponíveis

1. **Autenticação**
   1.1 **Login**
      - **Método:** POST
      - **Endpoint:** `{{base_url}}/auth/login`
      - **Body:**
      ```json
      {
          "email": "seuemail@example.com",
          "senha": "suasenha"
      }
      ```
      - **Retorno de Sucesso:**
      ```json
      {
          "mensagem": "Usuário logado com sucesso!",
          "token": "seu_token_jwt"
      }
      ```

   1.2 **Registro de Usuário**
      - **Método:** POST
      - **Endpoint:** `{{base_url}}/auth/registrar`
      - **Body:**
      ```json
      {
          "nome": "Seu Nome",
          "email": "seuemail@example.com",
          "senha": "suasenha"
      }
      ```
      - **Retorno de Sucesso:**
      ```json
      {
          "mensagem": "Usuário cadastrado com sucesso!"
      }
      ```

2. **Avaliações**
   2.1 **Criar Avaliação**
      - **Método:** POST
      - **Endpoint:** `{{base_url}}/avaliacoes`
      - **Header:** Authorization: Seu_Token_JWT
      - **Body:**
      ```json
      {
          "idCliente": 1,
          "idProduto": 1,
          "nota": 4,
          "comentario": "Excelente produto!",
          "dataAvaliacao": "2024-07-15"
      }
      ```
      - **Retorno de Sucesso:**
      ```json
      {
          "mensagem": "Avaliação criada com sucesso!"
      }
      ```

   2.2 **Atualizar Avaliação**
      - **Método:** PUT
      - **Endpoint:** `{{base_url}}/avaliacoes/{id}`
      - **Header:** Authorization: Seu_Token_JWT
      - **Body:**
      ```json
      {
          "idCliente": 1,
          "idProduto": 1,
          "nota": 5,
          "comentario": "Muito bom!",
          "dataAvaliacao": "2024-07-15"
      }
      ```
      - **Retorno de Sucesso:**
      ```json
      {
          "mensagem": "Avaliação atualizada com sucesso!"
      }
      ```

   2.3 **Deletar Avaliação**
      - **Método:** DELETE
      - **Endpoint:** `{{base_url}}/avaliacoes/{id}`
      - **Header:** Authorization: Seu_Token_JWT
      - **Retorno de Sucesso:**
      ```json
      {
          "mensagem": "Avaliação deletada com sucesso!"
      }
      ```
