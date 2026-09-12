import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      email,
      phone,
      country,
      selectedPackage,
      travelDate,
      numTravellers,
      numAdults,
      numChildren,
      accommodationLevel,
      safariInterests,
      gorillaTrekking,
      chimpanzeeTrekking,
      wildlifeInterests,
      culturalExperiences,
      specialRequests,
      message,
    } = data;

    if (!fullName || !email || !country) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide your name, email and country.',
        },
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: 'RESEND_API_KEY is missing from the Vercel environment variables.',
        },
        { status: 500 }
      );
    }

    const emailResponse = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'JE FAIS NATURE SAFARIS <quotes@jefaisnaturesafari.com>',

          // IMPORTANT:
          // Keep this as the official site email.
          // Namecheap should forward this address to Gmail.
          to: ['info@jefaisnaturesafari.com'],

          // Customer receives replies directly.
          reply_to: email,

          subject: `New Safari Quote Request — ${fullName}`,

          html: `
            <h2>New Safari Quote Request</h2>

            <h3>Contact Details</h3>

            <p><strong>Full Name:</strong> ${fullName}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Phone / WhatsApp:</strong> ${
              phone || 'Not provided'
            }</p>

            <p><strong>Country:</strong> ${country}</p>

            <h3>Safari Details</h3>

            <p><strong>Package:</strong> ${
              selectedPackage || 'Tailor-made / Not specified'
            }</p>

            <p><strong>Travel Date:</strong> ${
              travelDate || 'Not specified'
            }</p>

            <p><strong>Total Travellers:</strong> ${
              numTravellers || 'Not specified'
            }</p>

            <p><strong>Adults:</strong> ${
              numAdults || 'Not specified'
            }</p>

            <p><strong>Children:</strong> ${
              numChildren || 'Not specified'
            }</p>

            <p><strong>Accommodation:</strong> ${
              accommodationLevel || 'Not specified'
            }</p>

            <h3>Experiences</h3>

            <p><strong>Safari Interests:</strong> ${
              Array.isArray(safariInterests) &&
              safariInterests.length
                ? safariInterests.join(', ')
                : 'Not specified'
            }</p>

            <p><strong>Gorilla Trekking:</strong> ${
              gorillaTrekking || 'Not specified'
            }</p>

            <p><strong>Chimpanzee Trekking:</strong> ${
              chimpanzeeTrekking || 'Not specified'
            }</p>

            <p><strong>Wildlife Interests:</strong> ${
              wildlifeInterests || 'Not specified'
            }</p>

            <p><strong>Cultural Experiences:</strong> ${
              culturalExperiences || 'Not specified'
            }</p>

            <p><strong>Special Requests:</strong> ${
              specialRequests || 'None'
            }</p>

            <h3>Customer Message</h3>

            <p>${
              message || 'No additional message provided.'
            }</p>

            <hr />

            <p>
              This enquiry was submitted through the
              JE FAIS NATURE SAFARIS website.
            </p>
          `,
        }),
      }
    );

    // Read Resend's response
    const responseText = await emailResponse.text();

    // TEMPORARY DIAGNOSTIC RESPONSE
    if (!emailResponse.ok) {
      console.error('RESEND ERROR:', responseText);

      return NextResponse.json(
        {
          success: false,
          message: 'RESEND REJECTED THE EMAIL',
          resendStatus: emailResponse.status,
          resendResponse: responseText,
        },
        { status: 500 }
      );
    }

    // Successful Resend response
    console.log('RESEND SUCCESS:', responseText);

    return NextResponse.json(
      {
        success: true,
        message: 'RESEND ACCEPTED THE EMAIL',
        resendResponse: responseText,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('QUOTE ROUTE ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'QUOTE ROUTE ERROR',
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}
