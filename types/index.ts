export interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleCreateTask: () => void;
}

export interface ITask {
  _id: string;
  task: string;
  Completed: boolean;
}

export interface TaskProps {
  individualTask: ITask;
  handleDeleteTask: (id: string) => void;
  handleCompleteTask: (id: string) => void;
}
