import React from "react";

function App() {
  const teamMembers = ["Alice", "Bob", "Charlie", "David"];
  const tasks = [
    { task: "Design homepage", status: "In Progress" },
    { task: "Set up Django API", status: "Completed" },
    { task: "Integrate React frontend", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">📚 Group Project Dashboard</h1>
        
        <p className="text-gray-700 mb-6">
          Welcome to our collaborative project! Below you’ll find the team information and the progress of our key tasks.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">👥 Team Members</h2>
          <ul className="list-disc list-inside space-y-1">
            {teamMembers.map((member, index) => (
              <li key={index} className="text-gray-700">{member}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">✅ Project Tasks</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Task</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-4 py-2">{item.task}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 rounded text-sm ${
                        item.status === "Completed"
                          ? "bg-green-200 text-green-800"
                          : item.status === "In Progress"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
