"use server";
import { EmailTemplate } from "@/components/EmailTemplate";
import { validateString } from "@/utils/utils";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  // Validación del mensaje (longitud máxima: 5000 caracteres)
  if (!validateString(message, 5000)) {
    return {
      error: 'Message is too long',
    };
  }

  // Validación del email (longitud máxima: 100 caracteres)
  if (!validateString(email, 100)) {
    return {
      error: 'Email is too long',
    };
  }

  // Envío del correo electrónico con formato HTML
  await resend.emails.send({
    from: "portfolio-v3-nu-ten.vercel",
    to: ['ludwingarmijosaavedra@gmail.com'],
    subject: 'Contact Form Submission',
    replyTo: email as string,
    text: message as string,
    react: EmailTemplate({ name: name as string, email: email as string, phone: phone as string, message: message as string }),

  });
};
