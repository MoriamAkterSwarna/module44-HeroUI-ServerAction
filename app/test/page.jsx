import TestForm from "../components/TestForm";


async function testAction(formData) {
  "use server";

  const name = formData.get("name");
  console.log("Server Action Triggered:", name);
}

export default function TestPage() {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Server Action Test</h1>

      <TestForm action={testAction} />
    </div>
  );
}