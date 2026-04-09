"use client";

export default function TestForm({
  action,
}) {
  return (
    <form action={action} className="flex gap-2">
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="border px-3 py-2"
      />
      <button type="submit" className="bg-black text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}