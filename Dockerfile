# Stage 1: Build Astro site (estático em dist/client + servidor Node em dist/server)
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# No build, o header pergunta ao blog se há post publicado (pra decidir se o item
# "Blog" aparece nas páginas estáticas). Falha = sem item; o navegador confere depois.
ARG BLOG_API_URL=https://www.pixformance.com/blog/api/public
ENV BLOG_API_URL=$BLOG_API_URL
RUN npm run build

# Stage 2: páginas estáticas com nginx (o que sempre existiu)
FROM nginx:alpine AS static
COPY --from=builder /app/dist/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd /etc/nginx/.htpasswd
EXPOSE 80

# Stage 3: servidor Node só pras páginas do blog (/blog/*), chamado pelo nginx
FROM node:22-alpine AS ssr
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund
COPY --from=builder /app/dist ./dist
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
