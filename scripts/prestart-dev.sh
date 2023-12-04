#! /bin/bash
PATH=$(npm bin):$PATH
export NODE_ENV=development

function initialize_back_end () {
  printf "\n> ASYNC: Instalando dependencias do back-end\n"
  (
    cd ./backEnd
    npm install
  )
}

function initialize_front_end() {
  printf "\n> ASYNC: Instalando dependencias do front-end\n"
  (
    cd ./frontEnd
    npm install
  )
}

function initialize_full() {
  printf "\n> ASYNC: Instalando dependencias gerais"
  (
    npm install
  )
}

initialize_back_end & initialize_front_end & initialize_full

printf "\n> Script terminado\n\n"
