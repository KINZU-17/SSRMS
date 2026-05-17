import { NavLink, useNavigate } from "react-router-dom";

const navItems = {
  student: [
    { label: "Dashboard", to: "/student/dashboard" },
    { label: "Submit Request", to: "/student/submit" },
    { label: "My Requests", to: "/student/requests" },
  ],
  admin: [
    { label: "Dashboard", to: "/admin/dashboard" },
    { label: "All Requests", to: "/admin/all" },
    { label: "Manage Requests", to: "/admin/manage" },
  ],
};

function PortalLayout({ role, title, subtitle, children }) {
  const navigate = useNavigate();
  const isAdmin = role === "admin";

  return (
    <div className="portal-shell">
      <aside className="sidebar">
        <button className="brand" type="button" onClick={() => navigate("/")}>
          <span className="brand-mark">KI</span>
          <span>
            <strong>KINCHIN INSTITUTE</strong>
            <small>{isAdmin ? "Admin workspace" : "Student portal"}</small>
          </span>
        </button>

        <nav className="side-nav">
          {navItems[role].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="btn btn-ghost sidebar-exit" type="button" onClick={() => navigate("/")}>
          Switch Portal
        </button>
      </aside>

      <main className="workspace">
        <header className="page-header">
          <div>
            <p className="eyebrow">{isAdmin ? "Kinchin Admin" : "Kinchin Student"}</p>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}

export default PortalLayout;
