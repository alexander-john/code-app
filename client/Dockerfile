FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && VITE_BACKEND_URL=http://138.68.239.252:8000 npm run build

# Use nginx to serve the built files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]