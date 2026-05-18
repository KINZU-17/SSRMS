import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import PortalLayout from "../../components/PortalLayout";

function ManageRequests() {
  const [requests, setRequests] = useState([]);

  const loadData = () => {
    fetch("http://localhost:3001/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch(() => setRequests([]));
  };

  useEffect(() => {
    loadData();
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:3001/requests/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    loadData();
  };

  const deleteRequest = async (id) => {
    await fetch(`http://localhost:3001/requests/${id}`, {
      method: "DELETE",
    });

    loadData();
  };

  return (
    <PortalLayout
      role="admin"
      title="Manage Requests"
      subtitle="Approve, reject, or remove submitted student requests."
    >
      <div className="request-list">
        {requests.map((request) => (
           <Card className="management-card bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700" key={request.id}>
            <div className="management-main">
              <div>
                <h2>{request.title}</h2>
                <p>{request.description}</p>
                <div className="meta-row">
                  <span>{request.category || "General"}</span>
                  <span>{request.priority || "Normal"} Priority</span>
                </div>
              </div>
              <span className={`status ${(request.status || "Pending").toLowerCase()}`}>
                {request.status || "Pending"}
              </span>
            </div>

            <div className="management-actions">
              <Button variant="success" onClick={() => updateStatus(request.id, "Approved")}>
                Approve
              </Button>
              <Button variant="warning" onClick={() => updateStatus(request.id, "Rejected")}>
                Reject
              </Button>
              <Button variant="danger" onClick={() => deleteRequest(request.id)}>
                Delete
              </Button>
            </div>
          </Card>
        ))}

         {requests.length === 0 && (
           <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
             <p className="empty-state">No requests are waiting in the queue.</p>
           </Card>
         )}
      </div>
    </PortalLayout>
  );
}

export default ManageRequests;