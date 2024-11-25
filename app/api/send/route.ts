import { emailTemplate } from "@/components/ui/email-template";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { username, subject, email, content } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gako0918@gmail.com"],
      subject: subject,
      react: emailTemplate({
        username,
        email,
        content,
      }) as React.ReactElement,
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
