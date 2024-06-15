import ContactForm from "@/components/contactForm";
import { Container } from "@/components/shared/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <Container className="my-10">
      <section className="space-y-8 sm:space-y-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-200">
            If you have any questions, feel free to reach out!
          </p>
        </div>
        <ContactForm />
      </section>
    </Container>
  );
};

export default Contact;
