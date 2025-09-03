import {LottieHandler} from "@components/feedback";
import { Container } from "react-bootstrap";
// import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  // const error = useRouteError(); // Get the error object from the route
  // let errorStatus: number;
  // let errorStatusText: string;
  // if (isRouteErrorResponse(error)) {
  //   errorStatus = error.status;
  //   errorStatusText = error.statusText;
  // }
  // else {
  //   errorStatus = 404;
  //   errorStatusText = "Page Not Found";
  // }

  return (
    <Container>
      <div className="d-flex flex-column align-items-center" style={{marginTop: "15%"}}>
        <LottieHandler type="notFound"/>
        <Link to='/' replace={true}>Looks like you've reached a non existent page. <br />
        How about going back to safety
        </Link>
      </div>
    </Container>
  )
}

export default Error
