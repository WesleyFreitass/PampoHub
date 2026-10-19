# ==========================================
# Stage 1: Build da aplicação React / Vite
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar manifesto de dependências
COPY package.json ./

# Instalar dependências limpas
RUN npm install --no-audit --no-fund

# Copiar todo o código-fonte
COPY . .

# Executar build de produção
RUN npm run build

# ==========================================
# Stage 2: Servir aplicação com Nginx Alpine
# ==========================================
FROM nginx:1.27-alpine AS runner

# Remover configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copiar configuração customizada do Nginx com fallback de SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar o build estático gerado no Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta 80 do container
EXPOSE 80

# Iniciar servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
