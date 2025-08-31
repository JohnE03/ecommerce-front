import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="notFound">
        <h1 className="notFound h1">Error 404:</h1>
        <p className="notFound p">Page not found</p>
        <Link to='/' replace={true}>Looks like you've reached a non existent page. <br />
        How about going back to safety
        </Link>
    </Container>
  )
}

export default Error
