FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build || npx tsc
EXPOSE 4006
CMD ["node", "dist/index.js"]