import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import PortalLayout from "../../components/PortalLayout";

function StudentHome() {
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
      role="student"
      title="Student Dashboard"
      subtitle="Submit requests, track progress, and see updates from the service team."
    >
        <div className="stats-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
            <span className="stat-label text-sm font-medium text-gray-500 dark:text-gray-400">Total Requests</span>
            <strong className="stat-value block mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">{requests.length}</strong>
          </Card>
          <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
            <span className="stat-label text-sm font-medium text-gray-500 dark:text-gray-400">Pending</span>
            <strong className="stat-value block mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">{pending}</strong>
          </Card>
          <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
            <span className="stat-label text-sm font-medium text-gray-500 dark:text-gray-400">Approved</span>
            <strong className="stat-value block mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">{approved}</strong>
          </Card>
          <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
            <span className="stat-label text-sm font-medium text-gray-500 dark:text-gray-400">Rejected</span>
            <strong className="stat-value block mt-1 text-2xl font-bold text-rose-600 dark:text-rose-400">{rejected}</strong>
          </Card>
        </div>

        <Card className="action-panel bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
         <div className="space-y-4">
           <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Need help from campus services?</h2>
           <p className="text-gray-600 dark:text-gray-300">Create a request with the issue details and the team will review it.</p>
         </div>
         <Button onClick={() => navigate("/student/submit")}>Submit Request</Button>
       </Card>

       <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
         <div className="section-heading">
           <div>
             <h2>Recent Requests</h2>
             <p>Your latest service request activity.</p>
           </div>
           <Button variant="secondary" onClick={() => navigate("/student/requests")}>
             View All
           </Button>
         </div>

         <div className="request-list">
           {requests.slice(0, 3).map((request) => (
             <article className="request-row" key={request.id}>
               <div>
                 <h3>{request.title}</h3>
                 <p>{request.description}</p>
               </div>
               <span className={`status ${(request.status || "Pending").toLowerCase()}`}>
                 {request.status || "Pending"}
               </span>
             </article>
           ))}

           {requests.length === 0 && <p className="empty-state">No requests yet.</p>}
         </div>
       </Card>
    </PortalLayout>
  );
}

export default StudentHome;