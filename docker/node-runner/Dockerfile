# Uses the official lightweight Node.js image based on 
# Alpine Linux, which keeps the container size small.
FROM node:18-alpine

# Sets the working directory inside the container to /usr/src/app.
WORKDIR /usr/src/app

# Copies run.js (your runner script) into the container.
COPY run.js .

# Sets the default command to run run.js when the container starts.
CMD ["node", "run.js"]
