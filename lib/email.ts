import { Resend } from 'resend';


const resend = new Resend(re_jMMTmNjm_4moPYmG6RqHFTajyeTLDEeX3);


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
      to: 'sherpartap1101@gmail.com',
      subject: 'New Conference Sponsorship Interest',
      text: emailContent,
    });

    return { success: true, data: response };
  } catch (error) {
    return { success: false, error };
  }
}
