import styles from './styles.module.css'
import {Badge, Nav, Navbar, Container} from 'react-bootstrap';

const {headerContainer, headerLogo, headerh1, headerSpan} = styles;

export default function Header() {
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}><span>Our</span><Badge bg='info'>Ecom</Badge></h1>
            {/* Basket */}
        </div>
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Categories</Nav.Link>
                    <Nav.Link href="#link">About us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">Log-in</Nav.Link>
                    <Nav.Link href="#link">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    </header>
  )
}
