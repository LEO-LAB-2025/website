import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendConferenceSponsorshipEmail(data: any) {
  try {
    const { name, email, companyName, sponsorshipTier, message } = data;
    
    const emailContent = `
      New Conference Sponsorship Interest
      ---------------------------------
      Name: ${name}
      Email: ${email}
      Company: ${companyName}
      Sponsorship Tier: ${sponsorshipTier}
      Message: ${message || 'No message provided'}
    `;

    const response = await resend.emails.send({
      from: 'LEO Conference <onboarding@resend.dev>',
      to: 'sher.singh.ug23@plaksha.edu.in',
      subject: 'New Conference Sponsorship Interest',
      text: emailContent,
    });

    return { success: true, data: response };
  } catch (error) {
    return { success: false, error };
  }
}