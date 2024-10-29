import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <header aria-labelledby="nav-section">
        <Nav />
      </header>
      <main>
        <section aria-labelledby="home-section">
          <Home>
            <section aria-labelledby="shop-section">
              <Shop />
            </section>
          </Home>
        </section>
        <section aria-labelledby="about-section">
          <About>
            <section aria-labelledby="contact-section">
              <Contact />
            </section>
          </About>
        </section>
      </main>
    </div>
  );
};

export default App;
