import { Container } from "react-bootstrap";
import {Header, Footer} from '@components/common';
import styles from './styles.module.css';
const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        Hello world from ecommerce main layout
      </div>
      <Footer />
    </Container>
  )
}

export default MainLayout
