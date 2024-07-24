
import (createBrowserRouter, RouterProvider) from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom';




<div id="container">

<div id="navbar">
  <li>Home</li>
 <li>Red</li>
 <li>Blue</li>
</div>
<div id="main-section">
  <Routes>
     <Route path= "/blue" element={<h1>Blue</h1>}></Route>
     <Route path= "/red" element={<h1>Red</h1>}></Route>
     <Route path= "/home" element={<h1>Home</h1>}></Route>
  </Routes>
 

</div>
</div>

export default App;