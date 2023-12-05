import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // console.log("path params: ", params);    // {id:3}
  // console.log("search params: ", searchParams.toString());  // name=Alice&age=25
  // console.log("name: ", searchParams.get("name"));         // Alice
  // console.log("location: ", location)

  return <p>User {params.id}</p>;
};

export default UserDetail;
