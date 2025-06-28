FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# ✅ Install Keploy CLI inside the image
RUN curl -s https://keploy.io/install.sh | bash

COPY . .

EXPOSE 5000

CMD ["keploy", "record", "-c", "node app.js", "--record-timer", "30s"]
