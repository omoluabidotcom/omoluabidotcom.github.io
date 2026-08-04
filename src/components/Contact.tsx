import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { SOCIAL } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Static site (no backend): hand off to the user's mail client with a
    // prefilled message so the form actually delivers something.
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:${SOCIAL.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white dark:bg-white/5 border ${
      errors[field] ? 'border-red-500' : 'border-slate-300 dark:border-white/10'
    } rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500`;

  const channels = [
    { icon: Mail, label: 'Email', value: SOCIAL.email, href: `mailto:${SOCIAL.email}`, external: false },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yahaya-yusuf', href: SOCIAL.linkedin, external: true },
    { icon: Github, label: 'GitHub', value: 'github.com/omoluabidotcom', href: SOCIAL.github, external: true },
  ];

  return (
    <section id="contact" className="py-24 bg-canvas-light dark:bg-canvas-dark">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="08" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or
              potential collaborations. Feel free to reach out through any of the channels
              below.
            </p>

            <div className="space-y-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card group flex items-center gap-4 p-4 hover:-translate-y-0.5"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="p-3 rounded-lg bg-accent-500/10 group-hover:scale-110 transition-transform">
                    <Icon className="text-accent-500" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {label}
                    </div>
                    <div className="text-slate-900 dark:text-white font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { id: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Inquiry' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {label} *
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    className={inputClass(id)}
                    placeholder={placeholder}
                    aria-required="true"
                    aria-invalid={!!errors[id]}
                    aria-describedby={errors[id] ? `${id}-error` : undefined}
                  />
                  {errors[id] && (
                    <p id={`${id}-error`} className="mt-1 text-sm text-red-500" role="alert">
                      {errors[id]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass('message')} resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-accent-600 text-white'
                    : 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 hover:-translate-y-0.5'
                }`}
                aria-label="Send message"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 size={20} />
                    Opening your mail app…
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
