#!/bin/bash

install_fastify() {

    if [[ ! -f ../package.json ]]; then
        echo "Initialisation du package.json"
        cd ..
        npm init --yes
        npm install --save-dev nodemon
        mkdir app
        cd app 
        touch server.js
        cd ..
        npm pkg set scripts.start="nodemon ./app/server" 
        npm install @fastify/middie 
        npm install @fastify/express   
        npm install @fastify/static   
    fi
        echo "Installation de fastify"
        npm install fastify
  

}

install_fastify