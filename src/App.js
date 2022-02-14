import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   localStorage.setItem(
  //     "jwt_shop",
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZW1haWwuY29tIiwidXNlcklkIjoiNjE4OWY4YTZhOTRkNmM2ODM5Yjk4YmMwIiwibmFtZSI6Ikhvw6BuZyBUaOG6vyAgS2jhuqNpIiwicm9sZSI6IkFkbWluIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjQ0MDI3Nzg2LCJleHAiOjE2NDQxMTQxODZ9.EZJkuykVZYhDi6NPCRWs1MWN8x-m9o56gmlFWgQoRys"
  //   );
  // }, []);

  let element = useRoutes(routes);
  return element;
}

export default App;
