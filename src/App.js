
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import RouteConfiger from './Component/Auth/RouteConfiger';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <RouteConfiger/>
      </BrowserRouter>

     
      
    </div>
  );
}

export default App;
