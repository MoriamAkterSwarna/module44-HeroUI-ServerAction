"use server";

import { revalidatePath } from "next/cache";
import { tasks } from "./task";


export async function addTask(prevState, formData) {
  if (!(formData instanceof FormData)) {
    return { success: false, message: "Invalid form submission" };
  }

  try {
        const title = formData.get("title");
  const description = formData.get("description");
  const priority = formData.get("priority");
  const status = formData.get("status");

  // Validation
  if (!title || title.trim() === "") {
    return { success: false, message: "Task title is required" };
  }

  if (title.length > 100) {
      return { success: false, message: "Title must be under 100 characters" };
    }

    

  
  const newTask = {
    id: Math.floor(Math.random() * 97 + 4).toString(),
    title:title.toString().trim(),
    description: description ? description.toString().trim() : "",
    priority:  "low" || "medium" || "high"  ,
    status:   "pending" || "in-progress" || "completed" ,
    createdAt: new Date().toISOString().split("T")[0],

  };

  tasks.push(newTask);

  revalidatePath("/");

// console.log(newTask, "new task ")

  return { success: true, message: "Task added successfully!", task: newTask };
  } catch (error) {
    console.error("Error adding task:", error);
    return { success: false, message: "An error occurred while adding the task" };
  }

  
}


export async function completeTask(id ) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.status = "completed";
  revalidatePath("/");
  return { success: true };
}

export async function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) tasks.splice(index, 1);
  revalidatePath("/");
  return { success: true };
}