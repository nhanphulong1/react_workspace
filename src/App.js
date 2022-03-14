import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page_addWorkspace from './pages/page-addWorkspace/Page_addWorkspace';
import Page_DashBoard from './pages/page-dashboard/Page_DashBoard';

import Page_Login from './pages/page-login/Page-Login';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Page_Login />} exact />
                <Route path="/dashboard" element={<Page_DashBoard />} />
                <Route path="/add" element={<Page_addWorkspace />} />
            </Routes>
        </div>
    );
}

export default App;
