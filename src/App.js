import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dragons from './components/Dragons/Dragons';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Dragons />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/Dragons" element={<Dragons />} />
      <Route path="/my-profile" element={<Profile />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;