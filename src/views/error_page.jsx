import { useRouteError } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
    <CustomNavbar></CustomNavbar>
      <div class="position-absolute top-50 start-50 translate-middle">
        <div className="text-center text-white">
            <img src="/assets/icons/404_ast.svg" alt="" width={180}/>
          <h1 className="f-i-bold">Oops !</h1>
          <p>Sorry, page not found.</p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
