import { useAppSelector, useAppDispatch } from '@store/hooks';
import { authLogOut } from '@store/auth/authSlice';
import { NavLink } from 'react-router-dom'; //router so that links work
import styles from './styles.module.css'
import {Badge, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import HeaderLeftBar from './HeaderLeftBar/HeaderLeftBar';
const {headerContainer, headerLogo} = styles;

export default function Header() {
    const dispatch = useAppDispatch();
    const {accessToken, user} = useAppSelector((state)=>state.auth)
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}>
                <span>Our</span>
                <Badge bg='info'>eCom</Badge>
            </h1>
            <HeaderLeftBar />
        </div>
        <Navbar expand="lg" className="bg-body-tertiary rounded" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="about-us">About us</Nav.Link>
                </Nav>
                <Nav>
                    {!accessToken?
                    <>
                    <Nav.Link as={NavLink} to="Login">Log-in</Nav.Link>
                    <Nav.Link as={NavLink} to="Register">Register</Nav.Link></>
                    :<>
                    <NavDropdown title={`Welcome: ${user?.firstName} ${user?.lastName}`} id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item>
                            Orders
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                        as = {NavLink}
                        to = "/"
                        onClick={()=> dispatch(authLogOut())}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                    </>
                    }
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
