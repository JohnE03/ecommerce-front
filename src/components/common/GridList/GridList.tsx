import { Row, Col } from "react-bootstrap";
// import type { TCategory } from "@customTypes/category";
// import type { TProduct } from "@customTypes/product";

type TGridList<T> = {
    record: T[];
    renderItems: (record: T) => React.ReactNode;
}

type hasId ={
    id?: number
};

const GridList = <T extends hasId>({record, renderItems}: TGridList<T>) => {
    const categoriesList = record.length > 0 ? record.map((category) => 
    (
    <Col xs={3} key={category.id} className="d-flex justify-content-center mb-5 mt-2">
      {renderItems(category)}
    </Col>
    )
  )
  : "there are no categories";

  return <Row>{categoriesList}</Row>;
}

export default GridList;