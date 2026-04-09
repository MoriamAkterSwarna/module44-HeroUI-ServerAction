import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
// import { ThemeSwitch } from "./components/ThemeSwitch";
import { getTasks } from "./lib/task";
import AddTaskForm from "./components/AddTaskForm";
import LazyTaskStats from "./components/LazyTaskStats";

export default async function Home() {
  const tasks = await getTasks();

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "completed").length,
    pending: tasks.filter((t) => t.status === "pending").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
  };

  return (
    <div>
      {/* <ThemeSwitch /> */}
      <Navbar />

      <main className="mx-auto mt-10 max-w-5xl px-6">
        <h1 className="text-4xl font-bold">Welcome to ACME Dashboard</h1>

        <LazyTaskStats {...stats} />
        <AddTaskForm />

        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  );
}
