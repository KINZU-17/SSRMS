import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/'  },
    { name: 'New Request', path: '/submit' },
    { name: 'Admin Panel', path: '/admin' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        Student<span className="text-blue-400">Hub</span>
      </div>
      
      <nav className="flex-1 mt-6">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center px-6 py-4 transition-colors ${
              location.pathname === link.path 
                ? 'bg-blue-600 border-r-4 border-white' 
                : 'hover:bg-slate-800'
            }`}
          >
            <span className="mr-3">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="p-6 text-xs text-slate-500 border-t border-slate-700">
         2026 Student Services v1.0
      </div>
    </aside>
  );
};

export default Sidebar;
