import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
// import { ThemeSwitch } from "./components/ThemeSwitch";
import { getTasks } from "./lib/task";
import AddTaskForm from './components/AddTaskForm';




export default async function Home() {

  const tasks = await getTasks();

  return (
    <div >
      
       {/* <ThemeSwitch /> */} 
       <Navbar />

        <main className="mx-auto mt-10 max-w-5xl px-6">
          <h1 className="text-4xl font-bold">Welcome to ACME Dashboard</h1>
          
          
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
