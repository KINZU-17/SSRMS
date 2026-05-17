import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import PortalLayout from "../../components/PortalLayout";

function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch(() => setRequests([]));
  }, []);

  const filteredRequests =
    statusFilter === "All"
      ? requests
      : requests.filter((request) => request.status === statusFilter);

  return (
    <PortalLayout
      role="student"
      title="My Requests"
      subtitle="Track the status of every request you have submitted."
    >
      <Card>
        <div className="section-heading">
          <div>
            <h2>Request History</h2>
            <p>Filter by status to quickly find what needs attention.</p>
          </div>

          <div className="segmented">
            {["All", "Pending", "Approved", "Rejected"].map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "primary" : "secondary"}
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        <div className="request-list">
          {filteredRequests.map((request) => (
            <article className="request-row detailed" key={request.id}>
              <div>
                <h3>{request.title}</h3>
                <p>{request.description}</p>
                <div className="meta-row">
                  <span>{request.category || "General"}</span>
                  <span>{request.priority || "Normal"} Priority</span>
                </div>
              </div>
              <span className={`status ${(request.status || "Pending").toLowerCase()}`}>
                {request.status || "Pending"}
              </span>
            </article>
          ))}

          {filteredRequests.length === 0 && (
            <p className="empty-state">No requests match this filter.</p>
          )}
        </div>
      </Card>
    </PortalLayout>
  );
}

export default MyRequests;