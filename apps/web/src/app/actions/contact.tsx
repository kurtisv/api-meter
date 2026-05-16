"use server";

import { z } from "zod";

import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import { sendTransactionalEmail } from "@/lib/email/resend";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function sendContactMessage(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return;
  }

  await sendTransactionalEmail({
    to: parsed.data.email,
    subject: "API Meter inquiry received",
    react: <ContactConfirmationEmail name={parsed.data.name} />,
  });
}
