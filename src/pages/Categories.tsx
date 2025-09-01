import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(()=>{
    if(!records.length){ //to avoid multiple requests
      dispatch(actGetCategories())
    }
  } ,[dispatch, records.length]
  );

  const categoriesList = records.length > 0 ? records.map((category) => 
  (<Col xs={3} key={category.id} className="d-flex justify-content-center mb-5 mt-2">
    <Category {...category} />
  </Col>)
  )
  : "there are no categories";
  return (
      <Container>
        <Loading status={loading} error={error}>
          <Row>
            {categoriesList}
          </Row>
        </Loading>
      </Container>
  );
};

export default Categories;