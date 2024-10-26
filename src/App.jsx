import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";

const App = () => {
  return (
    <div>
      <Nav />
      <Home>
        <Shop />
      </Home>
    </div>
  );
};

export default App;
