# MeetApp
Projeto de conclusão do bootcamp da rocketseat

Projetos feitos durante as semanas do curso:

[backend](https://github.com/nennogabriel/rsbcMeetapp)
[frontend](https://github.com/nennogabriel/rsbcMeetappWeb)
[mobile](https://github.com/nennogabriel/rsbcMeetappMobile)

porém os arquivos deste repositório que está lendo contém todo o conteúdo necessário e revisões que fiz enquanto organizava.

# Instruções de Instalação:

App desenvolvido com as tecnologias NodeJS, ReactJS e React Native.
Necessário a instalação do `yarn` como gerenciador de pacotes.

## Backend:
O projeto foi feito com ***postgress*** e ***redis*** em ***docker*** local

siga as instruções a partir da pasta ***./backend/***

  - para carregar as dependencias execute:
    ```bash
    yarn
    ```
  - crie o arquivo ***.env*** usando o arquivo ***.env.example*** por base.
  - com o postgress e redis configurados (e executados se usar pelo docker) execute:
    ```bash
    yarn sequelize db:migrate
    ```
  - para executar o servidor da api execute:
    ```bash
    yarn dev
    ```
  - para executar a fila de jobs abra outro terminal na pasta e execute:
    ```bash
    yarn queue
    ```

## Frontend:
App React JS. Apenas desenvolvimento local. Ele usa o backend para a api em http://localhost:3333 portanto deve estar na mesma maquina. Caso queira usar em outra maquina ou em produção altera a rota no arquivo [./frontend/src/services/api.js](./frontend/src/services/api.js)
  - para executar o servidor da api execute:
    ```bash
    yarn start
    ```
## Mobile:





