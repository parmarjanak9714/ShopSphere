import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "../../../../../lib/mongodb";
import User from "../../../../../models/User";

export async function POST(request) {
  try {
    await connectDB();

    const { firstName, lastName, email, password } =
      await request.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
  console.error("REGISTER ERROR:", error);

  return NextResponse.json(
    {
      message: error.message,
    },
    {
      status: 500,
    }
  );
}
}