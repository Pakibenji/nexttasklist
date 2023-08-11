"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
export default function Home() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify({ name: task }),
      });
      const data = await res.json();
      if (res.ok) {
        setTask("");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
    </>
  );
}
