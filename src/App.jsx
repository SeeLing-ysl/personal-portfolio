import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import css from './styles/app.module.scss'

const App = () => {
  return <div className={`bg-primary ${css.container}`}> {/* backquote with dollar sign: kind of JS obj like constant */}
    <Header/>
    <Home/>
    <About/>
    <Experiences/>
  </div>
};

export default App;
