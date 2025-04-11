import React, { useEffect, useState } from "react";
import { Search, Plus, User, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "@/store/thunks/listThunk";
import { getTaks } from "@/store/thunks/taksThunk";

export default function Home() {
  const [taskLists, setTaskLists] = useState([
    { id: 1, title: "Project Ngoding" },
    { id: 2, title: "Tugas Sekolah" },
  ]);

  const [tasks, setTasks] = useState([
    {
      list_id: 1,
      name: "Fitur Login",
      status: "Doing",
      priority: "High",
      date: "2025-03-19",
    },
    {
      list_id: 2,
      name: "Tugas Matematika",
      status: "Done",
      priority: "Medium",
      date: "2025-03-18",
    },
  ]);

  const [addingTaskIndex, setAddingTaskIndex] = useState(null);
  const [newTask, setNewTask] = useState({
    name: "",
    status: "Doing",
    priority: "Low",
    date: new Date().toISOString().split("T")[0],
  });

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList({ token }));
    dispatch(getTaks({ token }));
  }, []);

  const handleAddTask = (listId) => {
    if (!newTask.name.trim()) return;
    setTasks([...tasks, { ...newTask, list_id: listId }]);
    setNewTask({
      name: "",
      status: "Doing",
      priority: "Low",
      date: new Date().toISOString().split("T")[0],
    });
    setAddingTaskIndex(null);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status =
      updatedTasks[index].status === "Done" ? "Doing" : "Done";
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-background text-white p-6">
      <header className="flex items-center justify-between border-b border-secondary pb-6">
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <div className="w-10 h-10 p-2 rounded-full bg-gray-700 overflow-hidden">
          <User className="w-full h-full" />
        </div>
      </header>

      <div className="bg-secondary p-6 rounded-2xl mt-8">
        <div className="flex items-center gap-4">
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
            <div
              key={list.id}
              className="bg-background p-4 rounded-xl shadow-lg max-h-96 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">{list.title}</h2>
                <button className="bg-secondary px-3 py-1 rounded-md text-sm text-gray-300">
                  Today ⌄
                </button>
              </div>

              <div className="space-y-3">
                {tasks
                  .filter((task) => task.list_id === list.id)
                  .map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center bg-secondary p-3 rounded-lg">
                      <input
                        type="checkbox"
                        checked={task.status === "Done"}
                        onChange={() => toggleTaskStatus(i)}
                        className="mr-3 w-5 h-5 cursor-pointer"
                      />
                      <div className="flex-1">
                        <p
                          className={`text-white ${
                            task.status === "Done"
                              ? "line-through opacity-50"
                              : ""
                          }`}>
                          {task.name}
                        </p>
                        <p className="text-sm text-gray-300">{task.date}</p>
                      </div>
                      <div className="text-sm text-white flex gap-2">
                        <span
                          className={`px-2 py-1 rounded-md ${
                            task.status === "Done"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}>
                          {task.status}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-md ${
                            task.priority === "High"
                              ? "bg-red-500"
                              : task.priority === "Medium"
                              ? "bg-orange-500"
                              : "bg-blue-500"
                          }`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>

              {addingTaskIndex === index ? (
                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Task name"
                    value={newTask.name}
                    onChange={(e) =>
                      setNewTask({ ...newTask, name: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <select
                      value={newTask.status}
                      onChange={(e) =>
                        setNewTask({ ...newTask, status: e.target.value })
                      }
                      className="w-1/3 px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white">
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                    <select
                      value={newTask.priority}
                      onChange={(e) =>
                        setNewTask({ ...newTask, priority: e.target.value })
                      }
                      className="w-1/3 px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white">
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                    <input
                      type="date"
                      value={newTask.date}
                      onChange={(e) =>
                        setNewTask({ ...newTask, date: e.target.value })
                      }
                      className="w-1/3 px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddTask(list.id)}
                      className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary-dark transition">
                      Add
                    </button>
                    <button
                      onClick={() => setAddingTaskIndex(null)}
                      className="text-white hover:text-red-400">
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setAddingTaskIndex(index)}
                  className="mt-4 flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition">
                  <Plus size={16} /> Task
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
