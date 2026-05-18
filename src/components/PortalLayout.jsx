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
    <div className="portal-shell flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <aside className="sidebar w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <button className="brand flex items-center p-6" type="button" onClick={() => navigate("/")}>
          <span className="brand-mark text-xl font-bold text-indigo-600">KI</span>
          <span className="ml-3">
            <strong className="block text-gray-900 dark:text-gray-100">Kinchin Institute</strong>
            <small className="block text-sm text-gray-500 dark:text-gray-400">
              {isAdmin ? "Admin workspace" : "Student portal"}
            </small>
          </span>
        </button>

        <nav className="side-nav mt-4">
          {navItems[role].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 ${isActive ? "bg-indigo-50 dark:bg-indigo-900 text-indigo-600 border-l-4 border-indigo-500" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="btn btn-ghost sidebar-exit mt-auto p-4 text-left border-t border-gray-200 dark:border-gray-700" type="button" onClick={() => navigate("/")}>
          Switch Portal
        </button>
      </aside>

      <main className="workspace flex-1 p-10">
        <header className="page-header mb-8">
          <div className="space-y-2">
            <p className="eyebrow text-xs font-medium tracking-wider">{isAdmin ? "Kinchin Admin" : "Kinchin Student"}</p>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
            {subtitle && <p className="text-lg text-gray-500 dark:text-gray-400">{subtitle}</p>}
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}

export default PortalLayout;
