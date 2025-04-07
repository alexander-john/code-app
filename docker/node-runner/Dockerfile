FROM node:18-alpine

WORKDIR /usr/src/app

# Copy runner script
COPY run.js .

# Default command (expects user-code.js to be mounted)
CMD ["node", "run.js"]
