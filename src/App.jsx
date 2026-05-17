import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Admin Pages
import AdminHome from './pages/Admin/AdminHome.jsx';
import AllRequests from './pages/Admin/AllRequests.jsx';
import ManageRequests from './pages/Admin/ManageRequests.jsx';

// Student Pages
import StudentHome from './pages/Student/StudentHome.jsx';
import SubmitRequest from './pages/Student/SubmitRequest.jsx';
import MyRequests from './pages/Student/MyRequests.jsx';
import RoleSelector from './pages/Student/RoleSelector.jsx';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* The fixed Sidebar takes up 64 units of width (16rem) */}
        <Sidebar />

        {/* Main Content Area: Offset by the width of the sidebar */}
        <main className="flex-1 ml-64 p-10 bg-gray-50 min-h-screen">
          <div className="max-w-5xl mx-auto">
            <Routes>
              {/* Student Routes */}
              <Route path="/" element={<StudentHome />} />
              <Route path="/submit" element={<SubmitRequest />} />
              <Route path="/my-requests" element={<MyRequests />} />
              <Route path="/role-select" element={<RoleSelector />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin/all-requests" element={<AllRequests />} />
              <Route path="/admin/manage" element={<ManageRequests />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Admin Pages
import AdminHome from './pages/Admin/AdminHome.jsx';
import AllRequests from './pages/Admin/AllRequests.jsx';
import ManageRequests from './pages/Admin/ManageRequests.jsx';

// Student Pages
import StudentHome from './pages/Student/StudentHome.jsx';
import SubmitRequest from './pages/Student/SubmitRequest.jsx';
import MyRequests from './pages/Student/MyRequests.jsx';
import RoleSelector from './pages/Student/RoleSelector.jsx';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* The fixed Sidebar takes up 64 units of width (16rem) */}
        <Sidebar />

        {/* Main Content Area: Offset by the width of the sidebar */}
        <main className="flex-1 ml-64 p-10 bg-gray-50 min-h-screen">
          <div className="max-w-5xl mx-auto">
            <Routes>
              {/* Student Routes */}
              <Route path="/" element={<StudentHome />} />
              <Route path="/submit" element={<SubmitRequest />} />
              <Route path="/my-requests" element={<MyRequests />} />
              <Route path="/role-select" element={<RoleSelector />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin/all-requests" element={<AllRequests />} />
              <Route path="/admin/manage" element={<ManageRequests />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
