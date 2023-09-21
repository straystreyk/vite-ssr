import ReactDOMServer from "react-dom/server";
import { Request } from "express";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { routes } from "./routes";
import { createFetchRequest } from "./request";

interface IRenderProps {
  req: Request;
}

export const render = async ({ req }: IRenderProps) => {
  const { query, dataRoutes } = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);
  const context = await query(fetchRequest);

  const router = createStaticRouter(dataRoutes, context);

  return ReactDOMServer.renderToString(
    <StaticRouterProvider router={router} context={context} />
  );
};
