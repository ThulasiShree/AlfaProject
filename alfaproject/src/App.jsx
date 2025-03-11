import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header"
import Brand from "./Pages/Brand"
import Collections from "./Pages/Collections"
import Events from "./Pages/Events"
import Findboutique from "./Pages/Findboutique"
import Home from "./Pages/Home"
import Luxurycollection from "./Pages/Luxurycollection"
import Newreleases from "./Pages/Newreleases"
import Newsmedia from "./Pages/Newsmedia"
import Residences from "./Pages/Residences"
import Searchproperties from "./Pages/Searchproperties"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/brand" element={<Brand/>} />
        <Route path="/residences" element={<Residences/>} />
        <Route path="/luxurycollection" element={<Luxurycollection/>} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/newreleases" element={<Newreleases/>} />
        <Route path="/searchproperties" element={<Searchproperties/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/newsmedia" element={<Newsmedia/>} />
        <Route path="/findboutique" element={<Findboutique/>} />
      </Routes>
    </Router>
  )
}

export default App
