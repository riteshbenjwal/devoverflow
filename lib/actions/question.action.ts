"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    console.log(params);
    connectToDatabase();
  } catch (error) {}
}
