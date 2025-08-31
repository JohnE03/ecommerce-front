import { Container } from "react-bootstrap";
import Header from '../../components/common/Header/Header';
import styles from './styles.module.css';
const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        Hello world from ecommerce main layout
      </div>
    </Container>
  )
}

export default MainLayout
