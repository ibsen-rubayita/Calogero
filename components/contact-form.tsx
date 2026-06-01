"use client";

import { FormEvent, useState } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";

const serviceOptions = [
  "Engineering consulting",
  "Construction tool rentals",
  "Property sales or rentals",
  "Project recovery",
  "Partnership"
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [personType, setPersonType] = useState("");
  const [otherServiceText, setOtherServiceText] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ["name", "email", "personType", "message", "service"];
    const missing = required.some((field) => !String(form.get(field) || "").trim());

    if (missing) {
      setError("Please complete every field before sending.");
      return;
    }

    setError("");
    setLoading(true);
    const formElement = event.currentTarget;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          personType: form.get("personType"),
          message: form.get("message"),
          service: form.get("service"),
          serviceOther: form.get("serviceOther"),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send form");
      }

      setLoading(false);
      setSent(true);
      formElement.reset();
      setServiceValue("");
      setPersonType("");
      setOtherServiceText("");
    } catch (err) {
      setLoading(false);
      setError(err instanceof Error ? err.message : "Failed to send form. Please try again.");
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="surface rounded-lg p-5 md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input name="name" required className="min-h-12 rounded-md border border-black/10 bg-white px-4 text-ink dark:border-white/10 dark:bg-ink dark:text-white" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input name="email" type="email" required className="min-h-12 rounded-md border border-black/10 bg-white px-4 text-ink dark:border-white/10 dark:bg-ink dark:text-white" />
        </label>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          You are
          <select name="personType" value={personType} onChange={(e) => setPersonType(e.target.value)} required className="min-h-12 rounded-md border border-black/10 bg-white px-4 text-ink dark:border-white/10 dark:bg-ink dark:text-white">
            <option value="">Select one</option>
            <option value="company">Company</option>
            <option value="individual">Individual</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Service Interest
          <select name="service" value={serviceValue} onChange={(e) => setServiceValue(e.target.value)} required className="min-h-12 rounded-md border border-black/10 bg-white px-4 text-ink dark:border-white/10 dark:bg-ink dark:text-white">
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      {serviceValue === "Other" ? (
        <label className="mt-4 grid gap-2 text-sm font-bold">
          Please describe the other service
          <input name="serviceOther" value={otherServiceText} onChange={(e) => setOtherServiceText(e.target.value)} className="min-h-12 rounded-md border border-black/10 bg-white px-4 text-ink dark:border-white/10 dark:bg-ink dark:text-white" />
        </label>
      ) : null}
      <label className="mt-4 grid gap-2 text-sm font-bold">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-md border border-black/10 bg-white px-4 py-3 text-ink dark:border-white/10 dark:bg-ink dark:text-white"
        />
      </label>
      {error ? <p className="mt-4 text-sm font-bold text-red-600 dark:text-red-300">{error}</p> : null}
      {sent ? (
        <p className="mt-4 flex items-center gap-2 text-sm font-bold text-sage dark:text-gold">
          <FiCheckCircle /> Message prepared. We will respond shortly.
        </p>
      ) : null}
      <button type="submit" disabled={loading} className="btn-secondary mt-6 w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
        {loading ? "Sending..." : "Send Request"} <FiSend />
      </button>
    </form>
  );
}
