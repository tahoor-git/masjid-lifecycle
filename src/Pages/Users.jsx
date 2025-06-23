import React, { useState } from "react";

export const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { name: "Ahmed Khan", role: "Admin", email: "ahmed@masjid.org" },
    { name: "Fatima Zahra", role: "Volunteer", email: "fatima@masjid.org" },
    { name: "Bilal Rehman", role: "Staff", email: "bilal@masjid.org" },
    { name: "Yusuf Siddiqi", role: "Volunteer", email: "yusuf@masjid.org" },
    { name: "Ayesha Noor", role: "Admin", email: "ayesha@masjid.org" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-amber-700">Masjid Users</h1>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg">
          ➕ Add User
        </button>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* User Table */}
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-amber-100 text-gray-700">
            <tr>
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Role</th>
              <th className="py-3 px-6 text-left font-semibold">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                        user.role === "Admin"
                          ? "bg-red-500"
                          : user.role === "Staff"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
