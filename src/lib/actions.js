"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs';

export const addPost = async (previousState,formData) => {

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export const deletePost = async (previousState,formData) => {

  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/blog")
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export const addUser = async (previousState,formData) => {

  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("Saved to db");
    revalidatePath("/admin")
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export const deleteUser = async (previousState,formData) => {

  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/admin")
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export const handleLogout = async () => {
  await signOut();
}

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Invalid match of Passwords" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    await newUser.save();
    return { success: true };

  } catch (err) {
    console.log(err)
    return { error: "Something went wrong!" };
  }
}

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {

    await connectToDb();
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid Password or Username" };
    }
    if (err.message.includes("NEXT_REDIRECT")) {
      throw err;
    }
    return { error: "Something went wrong!" };
  }
}

export const handleGithubLogin = async () => {
  "use server"
  await signIn("github");
}