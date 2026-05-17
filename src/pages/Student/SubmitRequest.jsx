import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import PortalLayout from "../../components/PortalLayout";

const initialForm = {
  title: "",
  category: "IT Support",
  priority: "Normal",
  description: "",
};

function SubmitRequest() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await fetch("http://localhost:3001/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          status: "Pending",
          submittedBy: "Student",
          createdAt: new Date().toISOString(),
        }),
      });

      setForm(initialForm);
      setMessage("Request submitted successfully.");
    } catch {
      setMessage("Could not submit request. Make sure the JSON server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PortalLayout
      role="student"
      title="Submit Request"
      subtitle="Send a clear request so the service team can resolve it faster."
    >
      <Card className="form-card">
        <form onSubmit={handleSubmit} className="request-form">
          <Input
            label="Request Title"
            placeholder="Example: Hostel WiFi is not working"
            value={form.title}
            onChange={(event) => updateField("title", event.target.value)}
            required
          />

          <div className="form-grid">
            <label className="field">
              <span>Category</span>
              <select
                className="input"
                value={form.category}
                onChange={(event) => updateField("category", event.target.value)}
              >
                <option>IT Support</option>
                <option>Hostel</option>
                <option>Library</option>
                <option>Finance</option>
                <option>Academics</option>
              </select>
            </label>

            <label className="field">
              <span>Priority</span>
              <select
                className="input"
                value={form.priority}
                onChange={(event) => updateField("priority", event.target.value)}
              >
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </select>
            </label>
          </div>

          <Input
            label="Description"
            multiline
            rows="6"
            placeholder="Explain what happened, where it happened, and anything already tried."
            value={form.description}
            onChange={(event) => updateField("description", event.target.value)}
            required
          />

          {message && <p className="form-message">{message}</p>}

          <div className="form-actions">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate("/student/requests")}>
              View My Requests
            </Button>
          </div>
        </form>
      </Card>
    </PortalLayout>
  );
}

export default SubmitRequest;