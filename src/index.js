import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie from "./pages/Movie"
import MovieShow from "./pages/MovieShow"
import TvShow from "./pages/TvShow"
import Tv from "./pages/Tv"
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 - Page not found</div>,
    children: [
      { index: true, element: <Home /> },
      { path: 'movie', element: <Movie /> },
      { path: 'tv', element: <Tv /> },
      { path: 'movie/:id', element: <MovieShow /> },
      { path: 'tv/:id', element: <TvShow /> },
      
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
