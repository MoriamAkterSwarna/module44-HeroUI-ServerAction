"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button, Skeleton } from "@heroui/react";



const TaskStats = dynamic(
    () => import("./TaskStats"),

  {
    loading: () => (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 rounded-xl border border-default-200">
            <Skeleton className="h-9 w-16 mx-auto mb-2 rounded" />
            <Skeleton className="h-4 w-24 mx-auto rounded" />
          </div>
        ))}
      </div>
    ),
  }
);

export default function LazyTaskStats(props) {
  const [showStats, setShowStats] = useState(false);

  return (
    <section className="mb-6">
      {!showStats ? (
        <div className="mb-4 rounded-xl border border-default-200 bg-content1 p-4">
          
          <Button color="primary" variant="flat" onPress={() => setShowStats(true)}>
            Load Stats (Lazy)
          </Button>
        </div>
      ) : null}

      {showStats ? <TaskStats {...props} /> : null}
    </section>
  );
}
