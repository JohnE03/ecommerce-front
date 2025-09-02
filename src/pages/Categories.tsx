import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(()=>{
    if(!records.length){ //to avoid multiple requests
      dispatch(actGetCategories())
    }
  } ,[dispatch, records.length]
  );

  return (
    <>
    <Heading>
      <Container>
        <Loading status={loading} error={error}>
          <GridList record={records} renderItems = {(record) => <Category {...record}/>} />
        </Loading>
      </Container>
    </Heading>
    </>
  );
};

export default Categories;