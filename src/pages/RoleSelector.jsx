import { useNavigate } from "react-router-dom";

function RoleSelector() {
  const navigate = useNavigate();

  return (
    <main className="landing">
      <div className="landing-topbar">
        <span className="brand-mark large"></span>
        <div>
          <strong></strong>
          <small></small>
        </div>
      </div>

      <section className="landing-panel">
        <div className="landing-copy">
          <p className="eyebrow">Campus Support Portal</p>
          <h1>KINCHIN INSTITUTE</h1>
          <p>
            A modern service request management system for student support,
            campus operations, approvals, and request tracking.
          </p>
          <div className="landing-metrics" aria-label="Service desk highlights">
            <span>Academic Support</span>
            <span>Hostel Services</span>
            <span>IT Helpdesk</span>
          </div>
        </div>

        <div className="portal-options">
          <button className="portal-card" type="button" onClick={() => navigate("/student/dashboard")}>
            <small>For enrolled students</small>
            <span>Student Portal</span>
            <p>Submit a service request, follow progress, and see decisions from the administration.</p>
          </button>

          <button className="portal-card admin" type="button" onClick={() => navigate("/admin/dashboard")}>
            <small>For service administrators</small>
            <span>Admin Portal</span>
            <p>Review queues, approve or reject requests, and keep campus support work organized.</p>
          </button>
        </div>
      </section>
    </main>
  );
}

export default RoleSelector;
