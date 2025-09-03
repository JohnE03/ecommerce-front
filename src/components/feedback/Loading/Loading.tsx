//for loading images
import type { TLoading } from "@types";

interface ILoadingProps {
    status: TLoading;
    error: string | null;
    children: React.ReactNode; //tells react we will get nodesm .JSX.Element implies a single tag
}

const Loading = ({status, error, children}: ILoadingProps) => {
  if(status === "pending"){
    return <p>Loading please wait</p>
  }
  if(status === "failed"){
    return <p>{error}</p>
  }
  return <>{children}</>
}

export default Loading
