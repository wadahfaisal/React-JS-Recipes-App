import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Recipes,
  Contact,
  TagTemplate,
  SingleRecipe,
  Error,
  Tags,
} from "./pages";
import { Navbar, Footer } from "./components";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tags" element={<Tags />} />

        <Route path="/tags/:tag" element={<TagTemplate />} />
        {/* <Route path="/single-recipe" element={<SingleRecipe />} /> */}
        <Route path="/single-recipe/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
