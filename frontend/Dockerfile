# ------- BUILD -------

# imagem com Node, chamada de "build" para poder usar depois
FROM node:20-alpine AS build

# pasta de trabalho dentro do contêiner front
WORKDIR /app

# copia só os arquivos de dependências (aproveita o cache do Docker)
COPY package*.json ./

# instala as dependências.
RUN npm ci

# copia o código do React.
COPY . .

# gera a versão de produção. Cria a pasta "dist" com HTML/JS/CSS.
RUN npm run build




# ------ SERVIDOR -------

# nova imagem, só com Nginx, que é um servidor web leve
FROM nginx:alpine

# porta padrão que o Render define PORT na hora de rodar (geralmente 10000)
ENV PORT=10000

# copia a config do Nginx como "template"
# depois a imagem do Nginx troca ${PORT} pelo valor real quando o contêiner inicia.
COPY nginx.conf /etc/nginx/templates/default.conf.template

# pega SÓ a pasta "dist" da build e coloca onde o Nginx serve
COPY --from=build /app/dist /usr/share/nginx/html

# copia o script para uma pasta especial da imagem do Nginx. Tudo que está lá roda automaticamente quando o contêiner liga, antes do servidor subir.
# na proxima linha o comando dá permissão de execução ao script. Sem isso, o Nginx ignora o arquivo.
COPY env.sh /docker-entrypoint.d/40-env.sh
RUN chmod +x /docker-entrypoint.d/40-env.sh

# documenta a porta (a real vem do Render).
EXPOSE 10000


# sem CMD, pois a imagem do Nginx já tem o comando de iniciar o servidor