# Build phase
FROM node:18 AS build
WORKDIR /app

# Copy only dependency manifests first
COPY package*.json ./

# Install Linux-native modules (no esbuild mismatch)
RUN npm install

# Now copy in the rest of your app
COPY . .

# No rebuild needed — this was causing failure
# RUN npm rebuild esbuild  ❌ REMOVE THIS

RUN npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
