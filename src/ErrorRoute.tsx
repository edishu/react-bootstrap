import { useRouteError } from "react-router-dom";

export const ErrorRoute = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
};
