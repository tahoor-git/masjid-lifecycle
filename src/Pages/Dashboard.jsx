import { Card } from "../components/Card";
import { ProgressSection } from "../components/ProgressSection";
import { TaskTable } from "../components/TaskTable";

export const Dashboard = () => {
  const pendingStatusItems = [
    { label: "High Priority", percentage: 75, color: "bg-red-500" },
    { label: "Medium Priority", percentage: 45, color: "bg-amber-500" },
    { label: "Low Priority", percentage: 30, color: "bg-blue-500" },
  ];

  const overallWorkItems = [
    { label: "Completed", percentage: 65, color: "bg-green-500" },
    { label: "In Progress", percentage: 25, color: "bg-blue-500" },
    { label: "Not Started", percentage: 10, color: "bg-gray-500" },
  ];

  const performanceItems = [
    { label: "On Time", percentage: 85, color: "bg-green-500" },
    { label: "Delayed", percentage: 12, color: "bg-amber-500" },
    { label: "Overdue", percentage: 3, color: "bg-red-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="New Tasks"
          count="12"
          icon="/src/assets/Icons/newTask.png"
          bgColor="bg-amber-200"
          textColor="text-amber-800"
          countColor="text-amber-600"
          className=""
        />

        <Card
          title="Pending Tasks"
          count="8"
          icon="/src/assets/Icons/pendingTask.png"
          bgColor="bg-blue-200"
          textColor="text-blue-800"
          countColor="text-blue-600"
          className=""
        />

        <Card
          title="Cancelled Tasks"
          count="3"
          icon="/src/assets/Icons/cancelTask.png"
          bgColor="bg-red-200"
          textColor="text-red-800"
          countColor="text-red-600"
          className=""
        />

        <Card
          title="Completed Tasks"
          count="24"
          icon="/src/assets/Icons/completedTask.png"
          bgColor="bg-green-200"
          textColor="text-green-800"
          countColor="text-green-600"
          className=""
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProgressSection title="Pending by Status" items={pendingStatusItems} />
        <ProgressSection title="Overall Work" items={overallWorkItems} />
        <ProgressSection title="Performance" items={performanceItems} />
      </div>

      <TaskTable />
    </div>
  );
};
