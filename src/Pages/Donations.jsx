import React, { useState } from "react";

export const Donations = () => {
  const [donations, setDonations] = useState([
    { name: "Ahmed Khan", amount: "₹500.00", date: "2024-05-15" },
    { name: "Fatima Bano", amount: "₹250.00", date: "2024-05-20" },
    { name: "Mohammad Irfan", amount: "₹1000.00", date: "2024-05-22" },
    { name: "Ayesha Siddiqui", amount: "₹150.00", date: "2024-06-01" },
    { name: "Bilal Rehman", amount: "₹750.00", date: "2024-06-10" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({ name: "", amount: "", date: "" });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddDonation = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount || !form.date)
      return alert("Fill all fields");
    setDonations([
      ...donations,
      {
        name: form.name,
        amount: `₹${parseFloat(form.amount).toFixed(2)}`,
        date: form.date,
      },
    ]);
    setForm({ name: "", amount: "", date: "" });
  };

  const filteredDonations = donations.filter((donation) =>
    donation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-10">
      {/* Header & Search */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold text-amber-600">
          Donation Section
        </h2>

        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search by donor name"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-64"
          />
          <label className="text-gray-700 font-medium">Search</label>
        </div>
      </section>

      {/* Add Donation Form */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-green-700">
          Add New Donation
        </h2>
        <form
          onSubmit={handleAddDonation}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Donor Name"
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount (₹)"
            className="p-2 border rounded-md"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
          <button
            type="submit"
            className="md:col-span-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded"
          >
            Add Donation
          </button>
        </form>
      </section>

      {/* Donation Table */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold text-amber-600">
          Donation Records
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-amber-100">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Donor
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Amount
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDonations.length > 0 ? (
                filteredDonations.map((donation, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{donation.name}</td>
                    <td className="py-4 px-6 text-green-700 font-medium">
                      {donation.amount}
                    </td>
                    <td className="py-4 px-6">{donation.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-400">
                    No matching donor found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
