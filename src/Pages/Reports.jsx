import { ProgressSection } from "../components/ProgressSection";

export const Reports = () => {
  const donationData = {
    title: "Donation Progress",
    items: [
      { label: "Ramadan 2024", percentage: 80, color: "bg-green-500" },
      { label: "New Building Fund", percentage: 45, color: "bg-blue-500" },
      { label: "Zakat", percentage: 95, color: "bg-yellow-500" },
    ],
  };

  const eventData = {
      title: "Event Attendance",
      items: [
        { label: "Eid Prayer", percentage: 90, color: "bg-purple-500" },
        { label: "Community Iftar", percentage: 75, color: "bg-indigo-500" },
        { label: "Youth Program", percentage: 60, color: "bg-pink-500" },
      ],
    };

  const taskData = {
      title: "Volunteer Task Completion",
      items: [
        { label: "Setup for Iftar", percentage: 100, color: "bg-green-500" },
        { label: "Cleaning after Taraweeh", percentage: 85, color: "bg-blue-500" },
        { label: "Website Update", percentage: 50, color: "bg-yellow-500" },
      ],
    };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
        Reports
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgressSection title={donationData.title} items={donationData.items} />
        <ProgressSection title={eventData.title} items={eventData.items} />
        <div className="md:col-span-2">
            <ProgressSection title={taskData.title} items={taskData.items} />
        </div>
      </div>
    </div>
  );
}; 