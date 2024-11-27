import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import styles from './App.module.scss';

const App = () => {
  return (
    <div>
      <header>
        <h1 className={styles.visuallyHidden}>Room Homepage</h1>
        <Nav />
      </header>
      <main>
        <section>
          <h2 className={styles.visuallyHidden}>Home Section</h2>
          <Home>
            <section>
              <h3 className={styles.visuallyHidden}>Shop Section</h3>
              <Shop />
            </section>
          </Home>
        </section>
        <section>
          <h2 className={styles.visuallyHidden}>About Section</h2>
          <About>
            <section>
              <h3 className={styles.visuallyHidden}>Contact Section</h3>
              <Contact />
            </section>
          </About>
        </section>
      </main>
    </div>
  );
};

export default App;
