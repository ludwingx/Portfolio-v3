"use server";
import { EmailTemplate } from "@/components/EmailTemplate";
import { validateString } from "@/utils/utils";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
resend.apiKeys.create({ name: 'Production' });
export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  if (!validateString(message, 5000)) {
    return {
      error: 'Message is too long',
    };
  }

  if (!validateString(email, 100)) {
    return {
      error: 'Email is too long',
    };
  }

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ['ludwingarmijosaavedra@gmail.com'],
    subject: 'Contact Form Submission',
    replyTo: email as string,
    text: message as string,
    react: EmailTemplate({ name: name as string, email: email as string, phone: phone as string, message: message as string }),
  });
};
