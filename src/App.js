import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Admin from './Pages/Admin/Admin';
import AdminLogin from './Pages/Admin/AdminLogin';
import Blog from './Pages/Blog/Blog';
import Donation from './Pages/Donation/Donation';
import Events from './Pages/Events/Events';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/donation' element={<Donation />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/registration/:eventId' element={<PrivateRoute><Registration /></PrivateRoute>} />
            <Route path='/events' element={<PrivateRoute><Events /></PrivateRoute>} />
            <Route path='adminLogin' element={<AdminLogin />} />
            <Route path='admin' element={<Admin />} />
            <Route path='*' element={<NotFound />}></Route>

          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
/* 
logos
https://i.ibb.co/CWm0rm7/cloud-upload-outline-1.png
https://i.ibb.co/ZGgQqRs/Group-1329.png
https://i.ibb.co/nm6Q0k6/plus-1.png
https://i.ibb.co/PT1wbkG/trash-2-9.png
https://i.ibb.co/vcmmM7f/users-alt-1.png
*/

/* 
https://i.ibb.co/C9TTxgQ/animal-Shelter.png
https://i.ibb.co/9GjkKGB/babySit.png
https://i.ibb.co/47MSd6G/bird-House.png
https://i.ibb.co/FqMZKDp/child-Support.png
https://i.ibb.co/ngxDM1b/clean-Water.png
https://i.ibb.co/BcMZTfL/clearn-Park.png
https://i.ibb.co/X4w0ZZz/cloth-Swap.png
https://i.ibb.co/0DbMPT9/drive-Safety.png
https://i.ibb.co/fCz7wyH/extra-Volunteer.png
https://i.ibb.co/TvDhJcz/food-Charity.png
https://i.ibb.co/j5Q8zH5/good-Education.png










*/