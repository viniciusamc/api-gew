# API - GEW

    Api para cadastro de pessoas, veja as dependencias do projeto:

- Git
- MySQL
- Yarn
- Insomnia/Postman/RapidApi/Etc

## Para instalar o projeto:

- Clone o repositório: `git clone git@github.com:viniciusamc/api-gew.git`

- Entre na pasta do projeto: `cd api-gew`

- Instale as dependências: `yarn install`

## Antes de executar o projeto, você precisa configurar as variáveis de ambiente no arquivo .env.

- DB_NAME = Nome do banco de dados que você precisa criar
- DB_HOST = Endereço do banco de dados, o padrão é `localhost`
- DB_PORT= Porta do banco de dados, o padrão é `3306`
- DB_USER= Nome do usuário do banco de dados
- DB_PASSWORD= Senha do banco de dados
- PORT = Porta que o projeto do projeto

## Para iniciar o projeto

- `yarn run dev`

### Rotas:

- Acesse a URL base: localhost:(porta escolhida no .env)/users
- Exemplo: `localhost:3000/users`

## JSON para o cadastro

    {
      "name": "",
      "email": "",
      "birth": "",
      "cep": "",
      "address": "",
      "city": "",
      "state": "",
      "password": "",
      "confirmPassword": ""
     }

### Validações

- Todos os campos são obrigatórios
- Emails são verificados
- Senhas possuem minimo de 8 caracteres e máximo de 256 caracteres
- Confirmação de senha
- Outras validações estão no arquivo: `./src/middlewares/validator/userValidator.ts`
