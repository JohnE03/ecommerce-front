import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError(); // Get the error object from the route
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  }
  else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className="notFound">
        <h1 className="notFound h1">{errorStatus}</h1>
        <p className="notFound p">{errorStatusText}</p>
        <Link to='/' replace={true}>Looks like you've reached a non existent page. <br />
        How about going back to safety
        </Link>
    </Container>
  )
}

export default Error
