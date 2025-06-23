import { Link, useLocation } from "react-router-dom";

export const DashboardMenu = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/users", label: "Users" },
    { path: "/events", label: "Events" },
    { path: "/agency", label: "Agency" },
    { path: "/quotation", label: "Quotation" },
    { path: "/donations", label: "Donation" },
    { path: "/configurations", label: "Configurations" },
    { path: "/reports", label: "Reports" },
  ];

  return (
    <div className="h-full p-4 shadow-md bg-gray-800 font-sans">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-4 py-3 rounded-md text-sm md:text-base transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-amber-500 text-gray-700 font-bold"
                  : "text-gray-300 hover:bg-gray-700 font-medium"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
