import "./App.css";
import { Navbar, Header, About, Services, Footer } from "./components";

function App() {
  return (
    <main>
      <div className="nav">
        <Navbar />
      </div>
      <header className="header-bg">
        <Header />
      </header>
      <About />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
