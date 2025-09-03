import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type TGridList<T> = {
    record: T[];
    renderItems: (record: T) => React.ReactNode;
    emptyMessage: string;
}

type hasId ={
    id?: number
};

const GridList = <T extends hasId>({record, renderItems, emptyMessage}: TGridList<T>) => {
    const categoriesList = record.length > 0 ? (record.map((category) => 
    (
    <Col xs={3} key={category.id} className="d-flex justify-content-center mb-5 mt-2">
      {renderItems(category)}
    </Col>
    ))
  )
  : (<LottieHandler type="empty" message={emptyMessage}/>);

  return <Row>{categoriesList}</Row>;
}

export default GridList;