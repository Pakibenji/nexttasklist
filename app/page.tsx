"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import { ITask } from "../types";
import { TbFidgetSpinner } from "react-icons/tb"
import NoTask from "@/components/NoTask";
import Task from "@/components/Task";
export default function Home() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);

  const handleCreateTask = async() => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: task,
        }),
      });
      if(response.ok) {
        setTask('')
        fetchTasks()
      }
      else {
        console.log('error')
      }
    }
    catch(error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const handleCompleteTask = async(id: string) => {
  }

  const handleDeleteTask = async(id: string) => {
  }
  const fetchTasks = async() => {
    try {
      const response = await fetch("/api/task/all")
      const data = await response.json()
      setAllTasks(data)
      setIsLoading(false)
    }
    catch (error) {
      console.log("Error fetching tasks:", error)
    }
  }

    useEffect(() => {
      fetchTasks()
    }, [])

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <div className="spinner"><TbFidgetSpinner/></div>
      ) : (
        <div className="task-list">
          {allTasks.length > 0 ? (
            allTasks.map((individualTask: ITask) => (
              <Task key={individualTask._id} individualTask={individualTask} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask} />
            ))
          ) : (
            <NoTask />
          )}
        </div>
      )}

    </>
  );
}
