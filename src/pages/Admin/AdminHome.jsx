import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import PortalLayout from "../../components/PortalLayout";

function AdminHome() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch(() => setRequests([]));
  }, []);

  const pending = requests.filter((request) => request.status === "Pending").length;
  const approved = requests.filter((request) => request.status === "Approved").length;
  const rejected = requests.filter((request) => request.status === "Rejected").length;

  return (
    <PortalLayout
      role="admin"
      title="Admin Dashboard"
      subtitle="Monitor service demand and resolve student requests from one workspace."
    >
       <div className="stats-grid">
         <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
           <span className="stat-label">Total Requests</span>
           <strong className="stat-value">{requests.length}</strong>
         </Card>
         <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
           <span className="stat-label">Awaiting Review</span>
           <strong className="stat-value pending">{pending}</strong>
         </Card>
         <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
           <span className="stat-label">Approved</span>
           <strong className="stat-value approved">{approved}</strong>
         </Card>
         <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
           <span className="stat-label">Rejected</span>
           <strong className="stat-value rejected">{rejected}</strong>
         </Card>
       </div>

       <Card className="action-panel bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h2>Requests waiting for a decision</h2>
          <p>Open the management queue to approve, reject, or delete requests.</p>
        </div>
        <Button onClick={() => navigate("/admin/manage")}>Open Queue</Button>
      </Card>
    </PortalLayout>
  );
}

export default AdminHome;