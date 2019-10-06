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

siga as instruções pelo terminal a dentro da pasta ***/backend***

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

siga as instruções pelo terminal a dentro da pasta ***/frontend***

  - para executar o app web execute:
  ```bash
  yarn start
  ```

## Mobile:
App Configurado para usar o Simulador do IOS pelo mac. Caso não esteja usando o simulador do xcode será necessário ajustar a porta de acesso a api. [./mobile/src/services/api.js](./mobile/src/services/api.js)
Embora os procedimentos para funcionar no android segundo as documentações das bibliotecas respectivas foram seguidas e alteradas nos arquivos em java, este app não foi testado em android.

É necessário ter instalado o [cocoapods](https://cocoapods.org/) para carregar as dependencias do app.

siga as instruções pelo terminal a dentro da pasta ***/mobile***


  - para executar o app pelo simulador do IOS
  ```bash
  cd ios
  pod install
  cd ..
  react-native run-ios
  ```

### Erros comuns
Executar o cocoapods (`pod install`) pode alterar arquivos na pasta ios. Se a build for quebrada verifique se o arquivo [project.pbxproj](./mobile/ios/mobile.xcodeproj/project.pbxproj) foi alterado e retorne ele ao estado que se encontra neste repositório.

A lib react-native-vector-icons foi a única que necessitou link manual. Caso apareça o erro quanto ao carregamento do "Material Icons" será necessário executar o comando:
```bash
react-native link react-native-vector-icons
```
e desfazer as alterações sofridas no arquivo [project.pbxproj](./mobile/ios/mobile.xcodeproj/project.pbxproj). para depois executar:
```bash
react-native run-ios
```






