// import './App.css';
import style from './App.module.css'
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Banner/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
