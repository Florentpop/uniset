import "./App.css";
import {
  Navbar,
  Header,
  About,
  Services,
  Footer,
  Value,
  Banner,
  BannerDown,
} from "./components";

function App() {
  return (
    <main>
      <div className="nav">
        <Navbar />
      </div>
      <header className="header-bg">
        <Header />
      </header>
      <Value />
      <About />
      <Banner />
      <Services />
      <BannerDown />
      <Footer />
    </main>
  );
}

export default App;
