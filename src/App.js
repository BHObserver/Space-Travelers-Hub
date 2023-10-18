import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RocketList from './components/rocket/RocketList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<RocketList />} />
      <Route path="/missions" element={<RocketList />} />
      <Route path="/Dragons" element={<RocketList />} />
      <Route path="/my-profile" element={<RocketList />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
