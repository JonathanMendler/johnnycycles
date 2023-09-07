import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Content className="content" />
      <Footer />
    </div>
  );
}

export default App;
