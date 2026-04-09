"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { tasks } from "./task";


export async function addTask(prevState, formData) {
  if (!(formData instanceof FormData)) {
    return { success: false, message: "Invalid form submission" };
  }

  const title = formData.get("title");
  const description = formData.get("description");
  const priority = formData.get("priority");
  const status = formData.get("status");

  // Validation
  if (!title || title.trim() === "") {
    return { success: false, message: "Task title is required" };
  }

  // Simulate saving to DB
  const newTask = {
    id: Date.now().toString(),
    title: String(title).trim(),
    description: String(description || "").trim(),
    status: status || "pending",
    priority: priority || "medium",
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

//   revalidatePath("/");
 revalidateTag("tasks");


  return { success: true, message: "Task added successfully!", task: newTask };
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