# Iot-asthma-dashboard

Este repositório se destina aos códigos utlilizados na parte do front-end do projeto Rippo. O projeto tem por objetivo prover um sistema de acompanhamento da Asma.

## Arquitetura 🔨

A arquitetura do projeto na parte do front-end se da por um PWA construido em React ultilizando o firebase realtime database para consumir os dados enviados pela esp8266 e facilitar a integração de futura features de iot.

## Rodando 🔥🔥

A primeira coisa antes de rodar esse projeto é configuarar o arquivo de environments do projeto, para isso você tem que criar um arquivo chamado `.env` na raiz do projeto.

Esse arquivo deve ser construido da seguinte forma:

```sh
REACT_APP_API_KEY="VALUE"
REACT_APP_AUTH_DOMAIN="VALUE"
REACT_APP_DATABASE_URL="VALUE"
REACT_APP_PROJECT_ID="VALUE"
REACT_APP_STORAGE_BUCKET="VALUE"
REACT_APP_SENDER_ID="VALUE"
REACT_APP_APP_ID="VALUE"
```

Pronto! agora o projeto já está pronto para ser usado, basta abrir um terminal e na pasta raiz do projeto rodar o comando `npm run start` e projeto vai ser executado.
