import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/database/database";
import Enquiries from "@/models/enquiriesModel";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;

sendgrid.setApiKey(SENDGRID_API_KEY);

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
    await sendgrid.send({
      to: "arohaeventplanners@gmail.com", // Your email where you'll receive emails
      from: "ajayaj0302@gmail.com", // your website email address here
      subject: `You have got new enquiry from ${name}`,
      html: `<div>
        <h3 style="margin-bottom: 8px;">You've got a new enquiry from ${name}, their email is: ✉️${email}, their mobile number is: ${mobile}</h3>
        <p>Enquiry:</p>
        <p>${description}</p>
      </div>`,
    });
    return NextResponse.json(
      {
        message:
          "Your enquiry has been received. We will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
