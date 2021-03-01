# Projeto de API Bots - Especilista.

Projeto criado utitilizando NodeJS, com as bibliotecas Express e Mongoose; Banco de dados MongoDB.

A busca 

Para executar: 
```
node server.js <url-de-conexão-mongodb>/bots <porta-nodejs>
```

## Endpoints
* /bots - API de bots.
* /messages - API de menssagens.
* /doc - Swagger das APIs.

## Arquitetura e desenvolvimento
A aplicação foi desenvolvida com utilizando NodeJS, com Express e Mongoose, e banco de dados MongoDB.

Apesar do NodeJS dar a possibilidade de balanceamento de carga, é preferível criar uma arquitetura de containers, em um ambiente Kubernets, possibilitando assim, aumentar a arquitetura horizontalmente, além de criar zonas de DR.

As figuras são uma demonstração desta Arquitetura:

![Overview](/images/Overview.png)

![Resiliência](/images/Overview2.png)

O que não está presente:

* Testes: Sou a favor de usar o TDD (Test-Driven-Development). Neste caso específico, eu utilizario os módulos *Mocha* para automatização e o *supertest* para as realizar as chamadas HTTP.
