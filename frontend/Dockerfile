# Imagem de Origem
FROM node:13-alpine

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
RUN npm install

COPY . /app

EXPOSE 3000

# Inicializa a aplicação
CMD ["npm", "start"]