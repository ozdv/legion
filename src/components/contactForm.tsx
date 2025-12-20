"use client";
import { Field, Label } from "@/components/shared/fieldset";
import { Input } from "@/components/shared/input";
import { Textarea } from "@/components/shared/textarea";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

// const CAMS_ACCESS_KEY = "bf03f3da-599a-4c6b-8ac5-2528dd56a001";
const MICHAELS_ACCESS_KEY = "dd78ba39-7441-4522-a1ef-631e12db03e3";

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", MICHAELS_ACCESS_KEY);
    setLoading(true);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((request) => request.json())
      .then((response) => {
        if (!response.success) throw new Error("Error submitting");
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false);
        router.push("/contact/submitted");
      });
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
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
        <input
          type="hidden"
          name="subject"
          value="Contact submission from Legion"
        />

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
