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
      <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Request History</h2>
            <p className="text-gray-600 dark:text-gray-300">Filter by status to quickly find what needs attention.</p>
          </div>

          <div className="flex flex-wrap gap-2">
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

          <div className="request-list space-y-4">
            {filteredRequests.map((request) => (
              <article className="request-row detailed bg-gray-50 dark:bg-gray-700 rounded-lg p-4" key={request.id}>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{request.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{request.description}</p>
                  <div className="meta-row flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{request.category || "General"}</span>
                    <span>{request.priority || "Normal"} Priority</span>
                  </div>
                </div>
                <span className={`status px-3 py-1 rounded-full text-xs font-medium ${
                  request.status === "Pending"
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                    : request.status === "Approved"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                }`}>
                  {request.status || "Pending"}
                </span>
              </article>
            ))}

            {filteredRequests.length === 0 && (
              <p className="empty-state text-center py-8 text-gray-500 dark:text-gray-400">
                No requests match this filter.
              </p>
            )}
          </div>
        </div>
      </Card>
    </PortalLayout>
  );
}

export default MyRequests;