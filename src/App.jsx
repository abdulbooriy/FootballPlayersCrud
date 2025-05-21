import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <Form />
      {/* <Footer /> */}
    </>
  );
}

export default App;
