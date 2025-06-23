import React from "react";

export const Events = () => {
  const events = [
    {
      title: "Eid-ul-Adha Gathering",
      date: "2025-06-28",
      time: "10:00 AM",
      location: "Masjid Main Hall",
      description:
        "Community prayer followed by refreshments and Qurbani announcement.",
    },
    {
      title: "Qur'an Recitation Program",
      date: "2025-07-05",
      time: "6:00 PM",
      location: "Masjid Basement",
      description: "Youth-led evening of Tilawat and Hadith sharing.",
    },
  ];

  const announcements = [
    "Friday Khutbah this week will be delivered by Sheikh Imran.",
    "Masjid renovation work will start from July 10.",
    "Volunteers needed for Eid arrangements.",
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-amber-700">
        Masjid Events & Programs
      </h1>

      {/* Announcements */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-green-700">
          📢 Announcements
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {announcements.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Events */}
      <section className="bg-white p-6 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-semibold text-blue-700">
          📅 Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-amber-800">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600">
                🗓️ {event.date} | 🕓 {event.time}
              </p>
              <p className="text-sm text-gray-600">📍 {event.location}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Call-to-Action */}
      <section className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-xl font-semibold text-purple-700">
          Want to Volunteer?
        </h2>
        <p className="text-gray-600 mb-4">
          Join hands in helping during events and serving the community.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg">
          Register as Volunteer
        </button>
      </section>
    </div>
  );
};
