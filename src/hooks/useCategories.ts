import { actGetCategories, categoriesRecordsCleanUp } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";


const useCategories = () => {
    const dispatch = useAppDispatch();
    const {loading, error, records} = useAppSelector((state) => state.categories);

    useEffect(()=>{
        //to avoid multiple requests
        const promise=dispatch(actGetCategories())
    
        return ()=>{
            dispatch(categoriesRecordsCleanUp());
            promise.abort();
        }
    } ,[dispatch]
  );
  return {loading, error, records};
}

export default useCategories

