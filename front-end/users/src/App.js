import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js';
import UserContent from './components/Content/Users/UsersContent';
import GroupsContent from './components/Content/Groups/GroupsContent';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Header />
      <Routes>
      <Route path='users/' element={<UserContent />} />
      <Route path='groups/' element={<GroupsContent />} />

      </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;
