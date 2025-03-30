import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { from, subject, message } = await request.json();

  if (!from || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const formattedMessage = `
    <p>From: ${from}</p>
    <p>Message: ${message}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: "portfolio@resend.dev",
    to: "sbsilagadze@gmail.com",
    subject,
    html: formattedMessage,
  });

  if (error) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
