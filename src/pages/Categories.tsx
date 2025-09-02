import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories, categoriesRecordsCleanUp } from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Categories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(()=>{
    //to avoid multiple requests
    dispatch(actGetCategories())
    
    return ()=>{
      dispatch(categoriesRecordsCleanUp());
    }
  } ,[dispatch]
  );

  return (
    <>
    <Heading title = 'Categories' />
      <Container>
        <Loading status={loading} error={error}>
          <GridList record={records} renderItems = {(record) => <Category {...record}/>} />
        </Loading>
      </Container>
    </>
  );
};

export default Categories;