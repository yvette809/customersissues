
import { Routes, Route } from 'react-router-dom'
import IssuesRegistration from "./components/IssuesRegistration";
import Issues from "./components/Issues";
import IssueDetails from "./components/IssueDetails"


function App() {
  return (
    <Routes className= "container">
        <Route path='/' element={ <IssuesRegistration /> } />
        <Route path='/' element={ <Issues/> } />
        <Route path='/issues/:id' element={ <IssueDetails/> } />
      </Routes>
    
  );
}

export default App;
