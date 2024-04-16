import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {

  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    return NextResponse(err);
  }

}