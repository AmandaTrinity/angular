FROM node:22 AS builder

#Salvar os arquivos da nossa aplicação dentro do nosso container
WORKDIR /app

#Copia os arquivos de dependência e instala os pacotes.
COPY package*.json ./
RUN npm install

# Copia o restante do código-fonte da aplicação.
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/landing-page/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
