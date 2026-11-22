# imagem base. É o "sistema pronto" onde o app vai rodar
# "alpine" = versão pequena do Linux (imagem menor = deploy mais rápido)
FROM node:20-alpine

# define a pasta de trabalho DENTRO do contêiner
# se não existir, o Docker cria e os próximos comandos rodam aqui
WORKDIR /app

# copia SÓ os arquivos de dependências primeiro
# Por quê? O Docker guarda cache por camada: se o package.json não mudou,
# ele pula o "npm ci" e o build fica MUITO mais rápido
COPY package*.json ./

# instala as dependências.
# "npm ci" instala exatamente o que está no package-lock.json (mais previsível que npm install)
RUN npm ci

# PASSO 5: agora copia o resto do código-fonte
COPY . .

# define a variável PORT padrão.
# O Render sobrescreve isso com a porta dele; localmente usa 3001
ENV PORT=3001

# documentação, "este contêiner escuta na porta 3001"
# mas não abre a porta de verdade (quem abre é o 'docker run -p' ou o Render)
EXPOSE 3001

# comando que roda quando o contêiner INICIA.
# formato de lista, ou seja, executa direto, sem shell (encerra bem com Ctrl+C)
CMD ["node", "src/server.js"]