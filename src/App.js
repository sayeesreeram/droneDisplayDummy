import './App.css';
import RoutesComponent from './RoutesComponent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function App() {

  var perfEntries = performance.getEntriesByType("navigation");
  const location=useLocation();
  useEffect(()=>{

    if (perfEntries[0].type === "back_forward") {
        location.reload();
    }
  },[])
  return (
    <div style={{width:"100vw",overflowX:"hidden !important"}}>
      <RoutesComponent/>
    </div>
  );
}

export default App;
