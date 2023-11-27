import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { AppLayout } from "AppLayout";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
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
