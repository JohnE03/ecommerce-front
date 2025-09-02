import { NavLink } from 'react-router-dom'; //router so that links work
import {HeaderBasket, HeaderWishlist} from '../../eCommerce';
import styles from './styles.module.css'
import {Badge, Nav, Navbar, Container} from 'react-bootstrap';

const {headerContainer, headerLogo, headerLeftBar} = styles;

export default function Header() {
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}><span>Our</span><Badge bg='info'>Ecom</Badge></h1>
            <div className={headerLeftBar}>
                <HeaderWishlist />
                <HeaderBasket />
            </div>
        </div>
        <div>
            <Navbar expand="lg" className="bg-primary rounded" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="about-us">About us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="Login">Log-in</Nav.Link>
                    <Nav.Link as={NavLink} to="Register">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    </header>
  )
}
