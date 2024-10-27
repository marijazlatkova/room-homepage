import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Nav />
      <Home>
        <Shop />
      </Home>
      <About>
        <Contact />
      </About>
    </div>
  );
};

export default App;
