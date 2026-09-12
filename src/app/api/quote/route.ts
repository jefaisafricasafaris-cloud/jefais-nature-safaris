import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

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

    // Namecheap Private Email SMTP credentials
    const smtpUser = process.env.NAMECHEAP_EMAIL;
    const smtpPassword = process.env.NAMECHEAP_EMAIL_PASSWORD;

    if (!smtpUser || !smtpPassword) {
      console.error('Namecheap SMTP credentials are missing.');

      return NextResponse.json(
        {
          success: false,
          error: 'Namecheap email settings are not configured.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: `JE FAIS NATURE SAFARIS <${smtpUser}>`,

      // IMPORTANT:
      // Quote requests go to the official site email.
      // Namecheap forwards this mailbox to Gmail.
      to: 'info@jefaisnaturesafari.com',

      // Replies go directly to the customer.
      replyTo: email,

      subject: `New Safari Quote Request — ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

          <h2>New Safari Quote Request</h2>

          <h3>Contact Details</h3>

          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone / WhatsApp:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Country:</strong> ${country}</p>

          <h3>Safari Details</h3>

          <p>
            <strong>Package:</strong>
            ${selectedPackage || 'Tailor-made / Not specified'}
          </p>

          <p>
            <strong>Travel Date:</strong>
            ${travelDate || 'Not specified'}
          </p>

          <p>
            <strong>Total Travellers:</strong>
            ${numTravellers || 'Not specified'}
          </p>

          <p>
            <strong>Adults:</strong>
            ${numAdults || 'Not specified'}
          </p>

          <p>
            <strong>Children:</strong>
            ${numChildren || 'Not specified'}
          </p>

          <p>
            <strong>Accommodation:</strong>
            ${accommodationLevel || 'Not specified'}
          </p>

          <h3>Experiences</h3>

          <p>
            <strong>Safari Interests:</strong>
            ${
              Array.isArray(safariInterests) &&
              safariInterests.length
                ? safariInterests.join(', ')
                : 'Not specified'
            }
          </p>

          <p>
            <strong>Gorilla Trekking:</strong>
            ${gorillaTrekking || 'Not specified'}
          </p>

          <p>
            <strong>Chimpanzee Trekking:</strong>
            ${chimpanzeeTrekking || 'Not specified'}
          </p>

          <p>
            <strong>Wildlife Interests:</strong>
            ${wildlifeInterests || 'Not specified'}
          </p>

          <p>
            <strong>Cultural Experiences:</strong>
            ${culturalExperiences || 'Not specified'}
          </p>

          <p>
            <strong>Special Requests:</strong>
            ${specialRequests || 'None'}
          </p>

          <h3>Customer Message</h3>

          <p>
            ${message || 'No additional message provided.'}
          </p>

          <hr />

          <p>
            This enquiry was submitted through the
            JE FAIS NATURE SAFARIS website.
          </p>

        </div>
      `,
    });

    console.log('Namecheap SMTP: quotation email sent successfully.');

    return NextResponse.json(
      {
        success: true,
        message: 'Quotation email sent successfully.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Namecheap SMTP quote error:', error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Unable to send quotation email.',
      },
      { status: 500 }
    );
  }
}
