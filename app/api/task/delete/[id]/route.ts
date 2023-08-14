import Task from "@models/tasks";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from "@types";

export const DELETE = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDb();
    await Task.findByIdAndDelete(params.id);

    return NextResponse.json("task deleted", { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json("error deleting task", { status: 500 });
  }
};
