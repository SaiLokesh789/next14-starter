import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
};


export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleated");
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
};