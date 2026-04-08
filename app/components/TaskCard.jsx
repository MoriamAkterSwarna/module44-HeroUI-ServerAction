import { Card, Chip, Button } from "@heroui/react";


export default function TaskCard({ task }) {
  return (
    <Card className="p-4 m-4">
      <Card.Header className="flex justify-between items-start">
        <div>
          <Card.Title className={task.status === "completed" ? "line-through text-default-400" : ""}>
            {task.title}
          </Card.Title>
          <Card.Description>{task.description}</Card.Description>
        </div>
        <Chip color={task.priority === "high" ? "danger" : task.priority === "medium" ? "warning" : "success"}  size="sm" variant="flat">
          {task.priority}
        </Chip>
      </Card.Header>

      <Card.Footer className="flex justify-between items-center mt-3">
        <Chip color={task.status === "completed" ? "success" : "warning"} variant="dot" size="sm">
          {task.status}
        </Chip>
        <div className="flex gap-2">
          <Button size="sm" color="success" variant="secondary">
            Complete
          </Button>
          <Button size="sm" color="danger" variant="ghost">
            Delete
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}