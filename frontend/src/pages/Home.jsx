import React from "react";
import { Search, Plus, User } from "lucide-react";

export default function Home() {
  const taskLists = [
    {
      title: "Project Ngoding",
      tasks: [
        { name: "Fitur Login", time: "Today At 16:45", id: 1 },
        { name: "Fitur Tambah Data", time: "Today At 18:20", id: 2 },
        { name: "Fitur Filter", time: "Today At 08:15", id: 3 },
      ],
    },
    {
      title: "Tugas Sekolah",
      tasks: [
        { name: "Tugas Matematika", time: "Today At 16:45", id: 1 },
        { name: "Tugas Konsentrasi keahlian", time: "Today At 18:20", id: 2 },
        { name: "Tugas PKK", time: "Today At 08:15", id: 3 },
      ],
    },
    {
      title: "Jadwal Ngabuburit",
      tasks: [
        { name: "Sama teman SMK", time: "Today At 16:45", id: 1 },
        { name: "Sama Pacar", time: "Today At 18:20", id: 2 },
        { name: "Bukber Keluarga Besar", time: "Today At 08:15", id: 3 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white p-6">
      <header className="flex items-center justify-between border-b border-secondary pb-6">
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <div className="w-10 h-10 p-2 rounded-full bg-gray-700 overflow-hidden">
          <User className="w-full h-full" />
        </div>
      </header>

      <div className="bg-secondary p-6 rounded-2xl mt-[2rem]">
        <div className="flex items-center gap-4 ">
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary transition">
            <Plus size={18} /> List
          </button>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-white" size={18} />
            <input
              type="text"
              placeholder="Search for your list..."
              className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {taskLists.map((list, index) => (
            <div key={index} className="bg-background p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">{list.title}</h2>
                <button className="bg-secondary px-3 py-1 rounded-md text-sm text-gray-300">
                  Today ⌄
                </button>
              </div>

              <div className="space-y-3">
                {list.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between bg-secondary p-3 rounded-lg">
                    <div>
                      <p className="text-white">{task.name}</p>
                      <p className="text-sm text-white">{task.time}</p>
                    </div>
                    <span className="px-2 py-1 border border-white rounded-md text-sm">
                      {task.id}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition">
                  <Plus size={16} /> Task
                </button>
                <input
                  type="text"
                  placeholder="Search for your tasks..."
                  className="flex-1 px-3 py-2 bg-background rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
