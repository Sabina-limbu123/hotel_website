import { Route,Routes } from "react-router";
import Home from "./page/Home";
import PublicLayout from "./layout/PublicLayout";

export const App = () => {
  return (
   <Routes>
    <Route path ="/" element={<PublicLayout/>}>
    <Route index element={<Home/>}/>
   
    </Route>
   </Routes>
  );
};
export default App;