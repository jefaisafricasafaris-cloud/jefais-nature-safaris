import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();

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
    } = body;

    if (!fullName || !email || !country) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide your full name, email address and country.',
        },
        { status: 400 }
      );
    }

    const smtpUser = process.env.NAMECHEAP_EMAIL;
    const smtpPassword = process.env.NAMECHEAP_EMAIL_PASSWORD;

    if (!smtpUser || !smtpPassword) {
      return NextResponse.json(
        {
          success: false,
          error:
            'SMTP settings are missing. Please configure NAMECHEAP_EMAIL and NAMECHEAP_EMAIL_PASSWORD in Vercel.',
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

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2>New Safari Quote Request</h2>

        <h3>Traveller Details</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Country:</strong> ${country}</p>

        <h3>Safari Details</h3>
        <p><strong>Selected Package:</strong> ${selectedPackage || 'Not specified'}</p>
        <p><strong>Travel Date:</strong> ${travelDate || 'Not specified'}</p>
        <p><strong>Total Travellers:</strong> ${numTravellers || 'Not specified'}</p>
        <p><strong>Adults:</strong> ${numAdults || 'Not specified'}</p>
        <p><strong>Children:</strong> ${numChildren || 'Not specified'}</p>
        <p><strong>Accommodation:</strong> ${accommodationLevel || 'Not specified'}</p>

        <h3>Safari Interests</h3>
        <p><strong>Safari Interests:</strong> ${safariInterests || 'Not specified'}</p>
        <p><strong>Gorilla Trekking:</strong> ${gorillaTrekking || 'Not specified'}</p>
        <p><strong>Chimpanzee Trekking:</strong> ${chimpanzeeTrekking || 'Not specified'}</p>
        <p><strong>Wildlife Interests:</strong> ${wildlifeInterests || 'Not specified'}</p>
        <p><strong>Cultural Experiences:</strong> ${culturalExperiences || 'Not specified'}</p>

        <h3>Additional Information</h3>
        <p><strong>Special Requests:</strong><br/>
          ${specialRequests || 'None'}
        </p>

        <p><strong>Message:</strong><br/>
          ${message || 'None'}
        </p>

        <hr/>

        <p>
          <strong>Submitted through the JE FAIS NATURE SAFARIS website.</strong>
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `JE FAIS NATURE SAFARIS <${smtpUser}>`,

      // Quote requests are delivered here
      to: 'jefaisafricasafaris@gmail.com',

      // Reply directly to the traveller
      replyTo: email,

      subject: `New Safari Quote Request — ${fullName}`,

      html,
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request sent successfully.',
    });
  } catch (error: any) {
    console.error('QUOTE EMAIL ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        error: `Email sending failed: ${
          error?.message || 'Unknown error'
        }`,
      },
      { status: 500 }
    );
  }
}
