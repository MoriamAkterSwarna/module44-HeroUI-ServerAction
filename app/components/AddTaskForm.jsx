"use client";
import { Input } from "@heroui/react";
import { Form } from "@heroui/react";
import { Label } from "@heroui/react";
import { ListBox } from "@heroui/react";
import { Card } from "@heroui/react";
import { Select } from "@heroui/react";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";
import { addTask } from "../lib/actions";

export default function AddTaskForm() {

    const [state, formAction] = useActionState(addTask, {
    success: false,
    message: "",
    });
  return (
    <Card className="m-4">
      <Card.Header className="flex flex-col items-start px-4 py-2 bg-content2">
        <h2 className="text-2xl font-bold">Add New Task</h2>
      </Card.Header>
      <Card.Content className="gap-4">
        <form  className="flex flex-col gap-4" action={formAction}>
          <Input
            type="text"
            label="Task Title"
            name="title"
            placeholder="Enter task title"
            required
          />

          <Input
            type="text"
            label="Description"
            name="description"
            placeholder="Enter task description"
            required
          />
          <div
            className="flex gap-4 justify-between
           items-center"
          >
            <Select
              label="Priority"
              name="priority"
              className="w-[256px]"
              placeholder="Select one"
            >
              <Label> Priority</Label>

              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item textValue="low" value="low">low</ListBox.Item>
                  <ListBox.Item textValue="medium" value="medium">medium</ListBox.Item>
                  <ListBox.Item textValue="high" value="high">high</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <Select
              label="Status"
              name="status"
              className="w-[256px]"
              placeholder="Select one"
            >
              <Label> Status</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item textValue="pending" value="pending">pending</ListBox.Item>
                  <ListBox.Item textValue="in-progress" value="in-progress">in-progress</ListBox.Item>
                  <ListBox.Item textValue="completed" value="completed">completed</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
            <SubmitButton label="Add Task" />
        </form>
      </Card.Content>
    </Card>
  );
}
