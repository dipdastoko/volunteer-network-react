import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/registration/:eventId' element={<PrivateRoute><Registration /></PrivateRoute>} />
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