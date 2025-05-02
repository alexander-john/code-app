# Backend Dockerfile
FROM node:18
# WHY: Specifies the base image for the container. The `node:18` image includes Node.js version 18 and its dependencies.
# HOW: The `FROM` instruction sets the base image for the container. Docker pulls this image from Docker Hub if it is not already available locally.

WORKDIR /app
# WHY: Sets the working directory inside the container to `/app`. All subsequent commands will be executed relative to this directory.
# HOW: The `WORKDIR` instruction creates the directory if it doesn't exist and sets it as the current working directory.

COPY package*.json ./
# WHY: Copies the `package.json` and `package-lock.json` files into the container. These files are required to install the project's dependencies.
# HOW: The `COPY` instruction copies files from the host machine (current directory) to the specified path in the container (`./` in this case).

RUN npm install
# WHY: Installs the Node.js dependencies listed in `package.json` inside the container.
# HOW: The `RUN` instruction executes the `npm install` command, which installs the dependencies into the container's filesystem.

COPY . .
# WHY: Copies all the files from the current directory on the host machine to the working directory (`/app`) in the container.
# HOW: The `COPY` instruction recursively copies files and directories from the source (`.`) to the destination (`.`).

EXPOSE 5000
# WHY: Informs Docker that the container will listen on port 5000. This is used for documentation purposes and does not actually publish the port.
# HOW: The `EXPOSE` instruction specifies the port that the application inside the container will use.

CMD ["node", "server.js"]
# WHY: Specifies the command to run when the container starts. In this case, it starts the Node.js server using `server.js`.
# HOW: The `CMD` instruction defines the default command and arguments for the container. It uses an array format to avoid shell parsing issues.

ENV NODE_ENV=production
# WHY: Sets the `NODE_ENV` environment variable to `production`, which optimizes the application for production use (e.g., disables debugging features).
# HOW: The `ENV` instruction sets an environment variable inside the container. This variable is accessible to the application during runtime.