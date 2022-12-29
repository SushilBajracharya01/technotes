import { Routes, Route } from 'react-router-dom';

//
import Layout from './components/Layout';

//
import Login from './pages/Login';
import Notes from './pages/Notes';
import Users from './pages/Users';
import Public from './pages/Public';
import Welcome from './pages/Welcome';
import EditUser from './pages/Users/EditUser';
import Prefetch from './pages/Prefetch/Prefetch';
import DashLayout from './components/DashLayout';
import NewUserForm from './pages/Users/NewUserForm';
import EditNote from './pages/Notes/EditNote';
import NewNote from './pages/Notes/NewNote';

/**
 * 
 */
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<Prefetch />}>
          <Route path="dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />

            <Route path="notes">
              <Route index element={<Notes />} />
              <Route path={`:id`} element={<EditNote />} />
              <Route path={`new`} element={<NewNote />} />
            </Route>

            <Route path="users">
              <Route index element={<Users />} />
              <Route path={`:id`} element={<EditUser />} />
              <Route path={`new`} element={<NewUserForm />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
