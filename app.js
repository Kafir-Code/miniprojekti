import { Application } from "./deps.js";
import * as middlewares from "./middlewares/middlewares.js";
import routes from "./routes/routes.js";
import { configure } from "./deps.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const app = new Application();

app.use(middlewares.errorMiddleware);
app.use(routes);
app.use(middlewares.serveStaticMiddleware);

export { app };
