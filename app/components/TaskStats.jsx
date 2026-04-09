"use client";

import { Card } from "@heroui/react";


export default function TaskStats({ total, completed, pending, inProgress }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card className="p-4 text-center">
        <p className="text-3xl font-bold text-primary">{total}</p>
        <p className="text-sm text-default-500">Total Tasks</p>
      </Card>
      <Card className="p-4 text-center">
        <p className="text-3xl font-bold text-success">{completed}</p>
        <p className="text-sm text-default-500">Completed</p>
      </Card>
      <Card className="p-4 text-center">
        <p className="text-3xl font-bold text-warning">{pending}</p>
        <p className="text-sm text-default-500">Pending</p>
      </Card>
      <Card className="p-4 text-center">
        <p className="text-3xl font-bold text-secondary">{inProgress}</p>
        <p className="text-sm text-default-500">In Progress</p>
      </Card>
    </div>
  );
}