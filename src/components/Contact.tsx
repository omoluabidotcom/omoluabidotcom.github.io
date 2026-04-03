import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-space-gray-50 dark:bg-space-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4 text-center">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-space-gray-700 dark:text-space-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:yyahaya222@yahoo.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-space-gray-900 rounded-lg border border-space-gray-200 dark:border-space-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                aria-label="Send email to yyahaya222@yahoo.com"
              >
                <div className="p-3 bg-space-gray-100 dark:bg-space-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-black dark:text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-space-gray-600 dark:text-space-gray-400 font-medium">Email</div>
                  <div className="text-black dark:text-white font-semibold">yyahaya222@yahoo.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/yahaya-yusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-space-gray-900 rounded-lg border border-space-gray-200 dark:border-space-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                aria-label="Visit LinkedIn profile"
              >
                <div className="p-3 bg-space-gray-100 dark:bg-space-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="text-black dark:text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-space-gray-600 dark:text-space-gray-400 font-medium">LinkedIn</div>
                  <div className="text-black dark:text-white font-semibold">linkedin.com/in/yahaya-yusuf</div>
                </div>
              </a>

              <a
                href="https://github.com/omoluabidotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-space-gray-900 rounded-lg border border-space-gray-200 dark:border-space-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                aria-label="Visit GitHub profile"
              >
                <div className="p-3 bg-space-gray-100 dark:bg-space-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                  <Github className="text-black dark:text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-space-gray-600 dark:text-space-gray-400 font-medium">GitHub</div>
                  <div className="text-black dark:text-white font-semibold">github.com/omoluabidotcom</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-space-gray-700 dark:text-space-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-space-gray-900 border ${
                    errors.name ? 'border-red-500' : 'border-space-gray-300 dark:border-space-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors text-black dark:text-white`}
                  placeholder="John Doe"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-space-gray-700 dark:text-space-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-space-gray-900 border ${
                    errors.email ? 'border-red-500' : 'border-space-gray-300 dark:border-space-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors text-black dark:text-white`}
                  placeholder="john@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-space-gray-700 dark:text-space-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-space-gray-900 border ${
                    errors.subject ? 'border-red-500' : 'border-space-gray-300 dark:border-space-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors text-black dark:text-white`}
                  placeholder="Project Inquiry"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-space-gray-700 dark:text-space-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white dark:bg-space-gray-900 border ${
                    errors.message ? 'border-red-500' : 'border-space-gray-300 dark:border-space-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors text-black dark:text-white resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-black dark:bg-white hover:bg-space-gray-800 dark:hover:bg-space-gray-100 text-white dark:text-black shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
                aria-label="Send message"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
