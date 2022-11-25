import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  // https://new-ella-demo.myshopify.com/
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        theme="light"
      />
    </div>
  );
}

export default App;
