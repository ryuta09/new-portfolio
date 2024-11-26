import { emailTemplate } from "@/components/ui/email-template";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  const formData = await request.formData()

  const username = formData.get("username") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const content = formData.get("content") as string
  const file = formData.get("file") as File

  const buffer = Buffer.from(await file.arrayBuffer()); // バイナリデータをバッファーオブジェクトに変換
  
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
      attachments: [{ filename: file.name, content: buffer }], // これでファイルを添付できる
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
