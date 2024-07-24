import { useState } from 'react'
import ReactDom from 'react-dom/client';
import (createBrowserRouter, RouterProvider) from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom';
import Blue from './Blue';
import Red from './Red';
import Home from './home'

const router = createBrowserRouter([

  path: '/',
]);

<div id="container">

<div id="navbar">

</div>
<div id="main-section">
  <Routes>
     <Route path= "/blue" element={<h1>Blue</h1>}></Route>
     <Route path= "/red" element={<h1>Red</h1>}></Route>
     <Route path= "/home" element={<h1>Home</h1>}></Route>
  </Routes>
 

</div>
</div>