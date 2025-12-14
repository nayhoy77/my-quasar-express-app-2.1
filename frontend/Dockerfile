# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy all project files first
COPY . .

# Install dependencies (skip postinstall scripts that need full project)
RUN npm ci --legacy-peer-deps --ignore-scripts

# Run postinstall scripts now that full project is available
RUN npm run postinstall

# Build Quasar SPA
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27-alpine
COPY --from=builder /app/dist/spa /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
