import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import useCategories from "@hooks/useCategories";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Categories = () => {
  const {loading, error, records} = useCategories();

  return (
    <>
    <Heading title = 'Categories' />
      <Container>
        <Loading status={loading} error={error} type="category">
          <GridList record={records} renderItems = {(record) => <Category {...record}/>} />
        </Loading>
      </Container>
    </>
  );
};

export default Categories;