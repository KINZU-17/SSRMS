import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StudentDashboard from './pages/StudentDashboard';
import SubmitRequest from './pages/SubmitRequest';
import AdminPanel from './pages/AdminPanel';

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
              <Route path="/" element={<StudentDashboard />} />
              <Route path="/submit" element={<SubmitRequest />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App; 