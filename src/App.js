import "./Styles/app.css";
import { Experiences } from "./components/Experiences";
import { Profile } from './components/Profile';

const App = () => {
  return (<div className="container">
    <Profile />
    <Experiences />
  </div>)
} 

export default App;
