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
        <section id="home" aria-labelledby="home-section">
          <Home>
            <section id="shop" aria-labelledby="shop-section">
              <Shop />
            </section>
          </Home>
        </section>
        <section id="about" aria-labelledby="about-section">
          <About>
            <section id="contact" aria-labelledby="contact-section">
              <Contact />
            </section>
          </About>
        </section>
      </main>
    </div>
  );
};

export default App;
