import { useState } from "react";
import type { ContactFormData } from "../../types";
import styles from "./Contact.module.css";
function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className={styles.section}>
        <p className={styles.success}>
          ✅ Thanks, {form.name}! I'll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
