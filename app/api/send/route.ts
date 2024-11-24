import { emailTemplate } from "@/components/ui/email-template";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const {} = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gako0918@gmail.com"],
      subject: "Form開発の相談",
      react: emailTemplate({
        username: "testuser",
        email: "test@gmail.com",
        content: "Form開発の相談です",
      }) as React.ReactElement,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
