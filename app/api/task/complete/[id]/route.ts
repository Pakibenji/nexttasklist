import Task from "@models/tasks";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from "@types";

export const PATCH = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDb();
    await Task.findByIdAndUpdate(params.id, { Completed: true });

    return NextResponse.json("task completed", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("error completing task", { status: 500 });
  }
};
