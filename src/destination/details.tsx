import {useParams} from "react-router-dom";

export const Details = () => {
  const {id} = useParams();

  return (
    <div>
      <div>{`you are welcome ${id}`}</div>
    </div>
  );
};
