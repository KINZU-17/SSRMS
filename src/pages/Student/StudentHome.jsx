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
      <div className="stats-grid">
        <Card>
          <span className="stat-label">Total Requests</span>
          <strong className="stat-value">{requests.length}</strong>
        </Card>
        <Card>
          <span className="stat-label">Pending</span>
          <strong className="stat-value pending">{pending}</strong>
        </Card>
        <Card>
          <span className="stat-label">Approved</span>
          <strong className="stat-value approved">{approved}</strong>
        </Card>
        <Card>
          <span className="stat-label">Rejected</span>
          <strong className="stat-value rejected">{rejected}</strong>
        </Card>
      </div>

      <Card className="action-panel">
        <div>
          <h2>Need help from campus services?</h2>
          <p>Create a request with the issue details and the team will review it.</p>
        </div>
        <Button onClick={() => navigate("/student/submit")}>Submit Request</Button>
      </Card>

      <Card>
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