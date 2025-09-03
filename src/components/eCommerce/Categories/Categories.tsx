import type { TCategory } from "@types";
import { Link } from "react-router-dom"; 
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

// interface ICategoryProps {
//   title: string;
//   prefix: string;
//   img: string;
// }

const Category = ({title, prefix, img}: TCategory) => { //id here isn't needed so we add ? in the custom Type file to mark it optional
  return (
    <div className={category}>
      <Link to={`/products/${prefix}`}>
        <div className={categoryImg}>
          <img
            src={img}
            alt={title}
          />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;