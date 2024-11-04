import './assets/styles/App.css';
import Header from "./components/Header/Header.jsx"
import Values from "./components/Values/Values.jsx"
import Projects from "./components/Projects/Projects.jsx"
import CompanyDescribing from './components/CompanyDescribing/CompanyDescribing.jsx';
import CreatexForm from './components/Form/CreatexForm.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <>
      <Header/>
      <CompanyDescribing/>
      <Values/>
      <Projects/>
      <CreatexForm/>
      <Footer/>
    </>
  );
}

export default App;
