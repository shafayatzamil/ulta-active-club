import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Question from './component/Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
