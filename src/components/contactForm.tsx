"use client";
import { Field, Label } from "@/components/shared/fieldset";
import { Input } from "@/components/shared/input";
import { Textarea } from "@/components/shared/textarea";
import clsx from "clsx";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const ContactForm = () => {
  const { pending } = useFormStatus();
  console.log("pending", pending);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log("submit");
    setLoading(true);
    fetch("https://formsubmit.co/135dc66ef37572bac69259939fd3a433", {
      method: "POST",
    }).then(() => setLoading(false));
  };

  return (
    <form action={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      {/* Redirect them after submission */}
      <input
        type="hidden"
        name="_next"
        value="https://legionofmarycalgary.com/contact/submitted"
      />
      {/* Subject line */}
      <input type="hidden" name="_subject" value="LOM Contact" />
      {/* Spam pattern to filter out if we need */}
      <input
        type="hidden"
        name="_blacklist"
        value="spammy pattern, banned term, phrase"
      />
      {/* disables captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Honey pot to filter spam  */}
      <input type="text" name="_honey" className="hidden" />

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <Field>
          <Label>First name</Label>
          <Input
            required
            id="first-name"
            name="First name"
            autoComplete="given-name"
          />
        </Field>
        <Field>
          <Label>Last name</Label>
          <Input
            required
            id="last-name"
            name="Last name"
            autoComplete="family-name"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field>
            <Label>Email</Label>
            <Input
              required
              id="email"
              type="email"
              name="Email"
              autoComplete="email"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field>
            <Label>Message</Label>
            <Textarea id="message" name="Message" rows={4} />
          </Field>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className={clsx(
            "delay-300focus-visible:outline block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
            "bg-sky-500 text-white hover:bg-sky-400 focus-visible:outline-sky-400",
            "dark:bg-sky-600 dark:text-white dark:hover:bg-sky-500 dark:focus-visible:outline-sky-500"
          )}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
