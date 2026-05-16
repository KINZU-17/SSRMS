import { useEffect, useState } from "react";
import Card from "../../components/Card";
import PortalLayout from "../../components/PortalLayout";

function AllRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch(() => setRequests([]));
  }, []);

  return (
    <PortalLayout
      role="admin"
      title="All Requests"
      subtitle="Review every student service request in the system."
    >
      <Card>
        <div className="table-wrap">
          <table className="request-table">
            <thead>
              <tr>
                <th>Request</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>
                    <strong>{request.title}</strong>
                    <span>{request.description}</span>
                  </td>
                  <td>{request.category || "General"}</td>
                  <td>{request.priority || "Normal"}</td>
                  <td>
                    <span className={`status ${(request.status || "Pending").toLowerCase()}`}>
                      {request.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {requests.length === 0 && <p className="empty-state">No requests found.</p>}
        </div>
      </Card>
    </PortalLayout>
  );
}

export default AllRequests;