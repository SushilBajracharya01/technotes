import './App.css';
import { Routes, Route } from 'react-router-dom';

//
import Layout from './components/Layout';

//
import Public from './pages/Public';
import Login from './pages/Login';
import DashLayout from './components/DashLayout';
import Welcome from './pages/Welcome';
import Notes from './pages/Notes';
import Users from './pages/Users';
import NewUserForm from './pages/Users/NewUserForm';
import EditUser from './pages/Users/EditUser';
import Prefetch from './pages/Prefetch/Prefetch';

function App() {
  return (
    <div className="App">
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
            </Route>

            <Route path="users">
              <Route index element={<Users />} />
              <Route path={`:id`} element={<EditUser />} />
              <Route path={`new`} element={<NewUserForm />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
