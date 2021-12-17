const errorMiddleware = async (context, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e);
  }
};

const serveStaticMiddleware = async (context) => {
  await context.send({
    root: `${Deno.cwd()}/static`,
  });
};

export { errorMiddleware, serveStaticMiddleware };
