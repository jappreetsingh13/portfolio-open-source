import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Rate limiting store
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // === Rate Limiting (3 requests per 15 minutes) ===
    const now = Date.now();
    const userLimit = rateLimit.get(ip);

    if (userLimit) {
      if (now < userLimit.resetTime) {
        if (userLimit.count >= 2) {
          return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 },
          );
        }
        userLimit.count++;
      } else {
        rateLimit.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 });
      }
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 });
    }

    // Validate data
    const { name, email, message } = contactSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Change this after domain verification
      to: process.env.MY_EMAIL!, // Your personal email
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
  <div style="
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f4f7fb;
    padding: 40px 20px;
    color: #1f2937;
  ">
    <div style="
      max-width: 620px;
      margin: auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      border: 1px solid #e5e7eb;
    ">
      
      <!-- Header -->
      <div style="
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        padding: 28px;
        text-align: center;
        color: white;
      ">
        <h1 style="
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        ">
          📩 New Contact Form Submission
        </h1>

        <!-- Highlighted Subject -->
        <div style="
          margin-top: 16px;
          display: inline-block;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
        ">
          SUBJECT: Portfolio Contact Request
        </div>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">
        
        <div style="margin-bottom: 20px;">
          <p style="
            margin: 0 0 6px;
            font-size: 13px;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          ">
            Name
          </p>

          <div style="
            background: #f9fafb;
            padding: 14px;
            border-radius: 10px;
            border: 1px solid #e5e7eb;
            font-size: 16px;
            font-weight: 600;
          ">
            ${name}
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="
            margin: 0 0 6px;
            font-size: 13px;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          ">
            Email
          </p>

          <div style="
            background: #f9fafb;
            padding: 14px;
            border-radius: 10px;
            border: 1px solid #e5e7eb;
            font-size: 16px;
          ">
            <a href="mailto:${email}" style="
              color: #2563eb;
              text-decoration: none;
              font-weight: 600;
            ">
              ${email}
            </a>
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <p style="
            margin: 0 0 6px;
            font-size: 13px;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          ">
            Message
          </p>

          <div style="
            background: #f9fafb;
            padding: 18px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            white-space: pre-wrap;
            line-height: 1.7;
            font-size: 15px;
          ">
            ${message}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div style="
        border-top: 1px solid #e5e7eb;
        padding: 18px 24px;
        background: #fafafa;
        font-size: 12px;
        color: #6b7280;
        text-align: center;
      ">
        <div style="margin-bottom: 4px;">
          🌐 IP: ${ip}
        </div>

        <div>
          🕒 ${new Date().toLocaleString()}
        </div>
      </div>

    </div>
  </div>
`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
