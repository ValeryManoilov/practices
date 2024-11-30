import './assets/styles/App.css';
import Header from "./components/Header/Header.jsx"
import Values from "./components/Values/Values.jsx"
import Projects from "./components/Projects/Projects.jsx"
import CompanyDescribing from './components/CompanyDescribing/CompanyDescribing.jsx';
import CreatexForm from './components/Form/CreatexForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import Video from './components/Video/Video.jsx';
import SecondForm from './components/SecondForm/SecondForm.jsx';
import Services from './components/Services/Services.jsx';
import ClientFeedBack from './components/ClientsOpinion/ClientsOpinion.jsx';
import Support from './components/Support/Support.jsx';

function App() {
  return (
    <>
      <Header/>
      <CompanyDescribing/>
      <Video/>
      <Values/>
      <SecondForm/>
      <Support></Support>
      <ClientFeedBack></ClientFeedBack>
      <Projects/>
      <Services/>
      <CreatexForm/>
      <Footer/>
    </>
  );
}

export default App;
