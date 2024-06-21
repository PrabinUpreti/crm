import {
  createBrowserRouter,
  RouterProvider,
  // useParams,
} from "react-router-dom";

import { createRoutes } from "./createRoutes.tsx";
import { routes } from "./routes.tsx";

// const ROLE: IROLE = {
//   ADMIN: "admin",
//   MANAGER: "manager",
//   USER: "user",
// };

export function MainRoute() {
  // const params = useParams();
  console.log(createRoutes(routes), "routes");
  const router = createBrowserRouter(createRoutes(routes));
  return <RouterProvider router={router} />;
}
