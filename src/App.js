import React from 'react'
import Quote from './components/Quote';
import './index.css'
import Abraham from './components/Abraham'
import Martin from './components/Martin'
import Albert from './components/Albert';
import Colin from './components/Colin';
import Joyce from './components/Joyce';
import Lao from './components/Lao';
import Nikola from './components/Nikola';
import Thomas from './components/Thomas';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <div className="container-1">
              <Quote />
              <h1 className="text-1">List of authors</h1>
              <div className="Authors m">
                <Link className={"main c-b card l l-1 m-1 s "} to="/Abraham Lincoln"> Abraham Lincoln</Link>
                <Link className={"main c-b card l l-1 m-1 s "} to="/Martin ">Martin Luther King Jr</Link>
                <Link className={"main c-b card l l-1 m-1 s "} to="/Albert ">Albert Einstein</Link>
                <Link className={"main c-b card l l-1 m-1 s "} to="/Colin ">Colin Powell</Link>
                <Link className={"main c-b card l l-1 m-1 s "} to="/Joyce ">Joyce Meyer</Link>
                <Link className={"main c-b card l l-1 m-1 s "} to="/Lao ">Lao Tzu</Link>
                <Link className={"main c-b card l l-1 m-1 s "} to="/Nikola ">Nikola Tesla</Link>
                <Link className={"main c-b card l l-1 m-1 s "} to="/Thomas ">Thomas Edison</Link>
              </div>
            </div>
          )}
        />
        <Route path="/Abraham Lincoln" element={<Abraham />} />
        <Route path="/Martin" element={<Martin />} />
        <Route path="/Albert" element={<Albert />} />
        <Route path="/Colin" element={<Colin />} />
        <Route path="/Joyce" element={<Joyce />} />
        <Route path="/Lao" element={<Lao />} />
        <Route path="/Nikola" element={<Nikola />} />
        <Route path="/Thomas" element={<Thomas />} />
      </Routes>
    </Router>


  )
}
export default App;
