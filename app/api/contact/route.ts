import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, organization, problem } = body;

    if (!name || !email || !organization || !problem) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (in production, this would send to email/CRM)
    console.log("=== New ATLAS Deployment Request ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Organization:", organization);
    console.log("Problem:", problem);
    console.log("Timeline:", body.timeline);
    console.log("Budget:", body.budget);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    // TODO: In production, integrate with:
    // - Email service (SendGrid, AWS SES, etc.)
    // - CRM (Salesforce, HubSpot, etc.)
    // - Slack notification for immediate team alert

    // For now, we'll just return success
    // You can integrate with email services like this:
    /*
    await sendEmail({
      to: "deploy@projectatlas.io",
      subject: `New Deployment Request from ${organization}`,
      body: `
        Name: ${name}
        Email: ${email}
        Organization: ${organization}
        Timeline: ${body.timeline}
        Budget: ${body.budget}

        Problem:
        ${problem}
      `
    });
    */

    return NextResponse.json(
      { message: "Request received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
