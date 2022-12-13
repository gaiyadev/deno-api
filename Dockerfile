FROM denoland/deno

WORKDIR  /app

COPY . /app

EXPOSE 3000

CMD ["deno", "run", "-A --watch" "main.ts"]