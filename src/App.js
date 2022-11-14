
import { Routes, Route } from 'react-router-dom'
import IssueDetails from "./components/IssueDetails"
import Home from './components/Home';


function App() {
  return (
    <Routes className= "container">
        <Route path='/' element={ <Home/> } />
        <Route path='/issues/:id' element={ <IssueDetails/> } />
      </Routes>
    
  );
}

export default App;
