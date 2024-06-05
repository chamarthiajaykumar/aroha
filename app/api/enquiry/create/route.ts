import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/database/database";
import Enquiries from "@/models/enquiriesModel";

export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const body = await req.json();
    const { name, email, mobile, description } = body;
    if (!name || !description || !mobile || !email) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    await connectToDB();
    const enquirydetails = new Enquiries({
      name,
      email,
      mobile,
      description,
    });
    await enquirydetails.save();
    return NextResponse.json(
      { message: "Your query has been submitted successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
