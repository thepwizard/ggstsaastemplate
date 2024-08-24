# Use a Node.js image to run Prisma CLI
FROM node:18-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Install Prisma CLI
RUN npm install -g prisma

# Copy the Prisma schema
COPY prisma ./prisma

# Install Prisma client dependencies
RUN npm install @prisma/client

# Set the command to run migrations
CMD ["npx", "prisma", "migrate", "deploy"]
