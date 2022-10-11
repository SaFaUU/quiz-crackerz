import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Stats from './components/Stats/Stats';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/stats',
          element: <Stats></Stats>,
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>,
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>,
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
