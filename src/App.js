import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Stats from './components/Stats/Stats';
import Topics from './components/Topics/Topics';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>,
        },
        {
          path: '/stats',
          element: <Stats></Stats>,
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>,
        },
      ],
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
