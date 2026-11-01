"use client";

import { type FormEvent } from "react";
import { ExternalLink, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";

const EMAIL = "hello@rizlabs.my.id"; // Change this if needed.

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      String(subject),
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="mt-20 w-full scroll-mt-24 pb-16">
      {/* Section heading */}
      <div className="flex items-center gap-4 pb-2">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal sm:text-4xl">
          Contact Me
        </h2>

        <div className="h-[3px] flex-1 bg-black" />
      </div>

      {/* Content */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact information */}
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Let's work together!
            </h3>

            <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              Have a project idea, job opportunity, or just want to connect?
              Feel free to send me a message. I'd be happy to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex w-fit items-center gap-3 border-2 border-black bg-[#FFE66D] px-4 py-3 font-semibold shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Mail size={20} />
              <span className="break-all text-sm sm:text-base">{EMAIL}</span>
            </a>

            <a
              href="https://github.com/Rizaldy653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-3 border-2 border-black bg-white px-4 py-3 font-semibold shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <ExternalLink size={20} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="border-2 border-black bg-white p-5 shadow-[6px_6px_0px_0px_#000] sm:p-7"
        >
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Your Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Your Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                />
                <FieldDescription>
                  I'll use this email to get back to you.
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="subject">Subject</FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  className="min-h-32 resize-y"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Button
            type="submit"
            className="mt-6 w-full gap-2 border-2 border-black bg-[#FFE66D] font-bold text-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Send Message
            <Send size={16} />
          </Button>
        </form>
      </div>
    </section>
  );
}
