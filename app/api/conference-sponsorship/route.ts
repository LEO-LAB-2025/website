import { NextResponse } from 'next/server';
import { sendConferenceSponsorshipEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const result = await sendConferenceSponsorshipEmail(data);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}