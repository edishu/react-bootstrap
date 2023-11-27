import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { AppLayout } from "AppLayout";
import { ErrorRoute } from "ErrorRoute";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />} errorElement={<ErrorRoute />}>
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center h-screen">
              Hello world
            </div>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
