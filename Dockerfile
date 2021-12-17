FROM denoland/deno:alpine-1.16.3

EXPOSE 3000

WORKDIR /app

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-read", "--allow-env", "--no-check", "app-launch.js" ]
