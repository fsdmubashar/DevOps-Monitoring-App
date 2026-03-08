# Base image: NodeJS 18 ka lightweight version
FROM node:18-alpine

# Container ke andar working directory
WORKDIR /app

# Pehle package.json copy karo (dependencies ke liye)
COPY package*.json ./

# Dependencies install karo
RUN npm install --production

# Baaki sara code copy karo
COPY . .

# App kis port pe chalti hai
EXPOSE 3000

# Container start hone pe yeh command chalega
CMD ["node", "app.js"]
