import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-[70vh]">
      <h1 className="font-bold text-3xl">OOps!</h1>
      <p className="text-lg text-zinc-400">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
