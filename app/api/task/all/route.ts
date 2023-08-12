import Task from "../../../../models/tasks";
import { connectToDb } from '@/utils/database';


import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        await connectToDb()

        const tasks = await Task.find({})
        return NextResponse.json(
            tasks,
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            "Something went wrong",
            { status: 500 }
        )
    }
}
