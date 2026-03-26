
'use server'

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const resendApiKey = process.env.RESEND_API_KEY;

export async function submitLead(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const projectType = formData.get('projectType') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !projectType) {
    return { success: false, error: 'Missing required fields' };
  }

  // Initialize Supabase
  if (!supabaseUrl || !supabaseKey) {
    return { success: false, error: 'Server configuration error: Missing Supabase keys' };
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  // 1. Save to Supabase
  const { data, error } = await supabase
    .from('leads')
    .insert([
      { name, email, phone, project_type: projectType, message, status: 'new' }
    ])
    .select()
    .single();

  if (error) {
    console.error('Supabase error:', error);
    return { success: false, error: 'Failed to save lead' };
  }

  // 2. Send Email (via Resend Direct Integration)
  try {
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Source Code Development <info@sourcecodes.co.za>', // Update with verified domain
        to: email,
        subject: 'We received your project request',
        html: `
          <h1>Hi ${name},</h1>
          <p>Thanks for reaching out about your <strong>${projectType}</strong> project.</p>
          <p>We've received your details and our team will review them shortly.</p>
          <p>If you have any urgent questions, feel free to call us at 072 541 3028.</p>
          <p>Best,<br/>Source Code Development Team</p>
        `
      });
    } else {
      console.warn('RESEND_API_KEY is missing, skipping email sending.');
    }
  } catch (err) {
    console.error('Email sending error:', err);
    // Don't fail the request if email fails, just log it
  }

  return { success: true, message: 'Lead submitted successfully' };
}
