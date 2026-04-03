import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the 50 Best Charms team — for general enquiries, partnership opportunities, content corrections, or just to say hello.",
  openGraph: {
    title: "Contact 50 Best Charms",
    description:
      "Reach out to our team for enquiries, partnerships, or content feedback.",
  },
};

const contactChannels = [
  {
    title: "General Enquiries",
    email: "info@50bestcharms.com",
    description:
      "Questions about the site, our rankings, or anything else? We read every message.",
    emoji: "✉️",
  },
  {
    title: "Partnerships",
    email: "partners@50bestcharms.com",
    description:
      "Interested in advertising, sponsored content, or a collaboration? Let's talk.",
    emoji: "🤝",
  },
  {
    title: "Content & Corrections",
    email: "content@50bestcharms.com",
    description:
      "Spotted a factual error or have expert knowledge to share? We welcome corrections.",
    emoji: "✏️",
  },
];

const faq = [
  {
    question: "How are the 50 best charms selected and ranked?",
    answer:
      "Our rankings are based on five weighted criteria: cultural significance, global recognition, historical importance, breadth of use across cultures, and contemporary relevance. Each charm is researched independently and scored against these criteria. No charm's ranking is influenced by commercial relationships.",
  },
  {
    question: "Can I submit a charm that isn't on your list?",
    answer:
      "Absolutely. If you believe we've overlooked a culturally significant lucky charm, we'd love to hear about it. Send the charm's name, its origin, and a brief explanation of its cultural significance to our content team. We review all submissions and update our rankings periodically.",
  },
  {
    question: "Do you accept sponsored content or paid placements?",
    answer:
      "We maintain a strict editorial independence policy. Our rankings and editorial content are never influenced by commercial relationships. If we ever publish sponsored material, it will be clearly labelled as such. We do not accept payment to rank a charm more highly.",
  },
  {
    question: "Are you available for media interviews or expert commentary?",
    answer:
      "Yes. Our team has deep knowledge of global charm traditions, folklore, and cross-cultural beliefs around luck. We're happy to speak with journalists, documentary makers, and podcasters. Reach out via our partnerships email.",
  },
  {
    question: "I found a factual error in one of your articles. What should I do?",
    answer:
      "Please contact us immediately at content@50bestcharms.com with the article title, the specific error, and a source for the correct information. We take accuracy seriously and typically address corrections within 48 hours.",
  },
  {
    question: "Do you ship or sell lucky charms?",
    answer:
      "No — 50 Best Charms is a purely editorial and informational site. We do not sell any physical products. Some of our articles may link to retailers as a convenience to readers, but we are not a shop.",
  },
  {
    question: "How often is the ranking updated?",
    answer:
      "We conduct a full review of our rankings once per year, incorporating new research, reader feedback, and shifts in global cultural patterns. Minor updates and corrections happen on a rolling basis throughout the year.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto">
            We're a small editorial team with a big passion for the world's
            lucky traditions. We read every message and reply to most.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {/* Contact channels */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-8">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {contactChannels.map((channel) => (
              <div
                key={channel.email}
                className="flex flex-col gap-4 p-6 bg-[#121210] border border-[#2a2825] rounded-xl"
              >
                <span
                  className="text-3xl leading-none select-none"
                  role="img"
                  aria-label={channel.title}
                >
                  {channel.emoji}
                </span>
                <div>
                  <h3 className="font-heading text-lg text-[#f5f0e8] mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-3">
                    {channel.description}
                  </p>
                  <a
                    href={`mailto:${channel.email}`}
                    className="text-gold hover:text-[#d4bc96] transition-colors text-sm font-medium break-all"
                  >
                    {channel.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-[#0c0c0a] border border-[#2a2825] rounded-xl">
            <p className="text-zinc-400 text-sm leading-relaxed">
              <span className="text-zinc-300 font-medium">Response time:</span>{" "}
              We aim to respond to all enquiries within 2–3 business days.
              During high-volume periods (particularly around major cultural
              holidays and Lunar New Year), this may extend to 5 business days.
              We do not have a telephone number.
            </p>
          </div>
        </section>

        {/* Social / location note */}
        <section className="p-6 bg-[#121210] border border-[#2a2825] rounded-xl text-center">
          <h2 className="font-heading text-xl text-[#f5f0e8] mb-2">
            Based Everywhere
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
            Our editorial team works remotely across multiple time zones, which
            means we're always close to the cultural traditions we cover. We
            have no physical office address.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faq.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#121210] border border-[#2a2825] rounded-xl"
              >
                <h3 className="font-heading text-lg text-[#f5f0e8] mb-3 leading-snug">
                  {item.question}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-zinc-500 text-sm text-center">
            Didn't find your answer?{" "}
            <a
              href="mailto:info@50bestcharms.com"
              className="text-gold hover:text-[#d4bc96] transition-colors"
            >
              Email us directly
            </a>{" "}
            and we'll get back to you.
          </p>
        </section>

        {/* Explore links */}
        <section className="pt-4 border-t border-[#2a2825]">
          <p className="text-zinc-500 text-sm text-center mb-4">
            While you're here
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/"
              className="text-gold hover:text-[#d4bc96] transition-colors"
            >
              View Rankings
            </Link>
            <span className="text-zinc-700">·</span>
            <Link
              href="/blog"
              className="text-gold hover:text-[#d4bc96] transition-colors"
            >
              Read the Blog
            </Link>
            <span className="text-zinc-700">·</span>
            <Link
              href="/about"
              className="text-gold hover:text-[#d4bc96] transition-colors"
            >
              About Us
            </Link>
            <span className="text-zinc-700">·</span>
            <Link
              href="/country"
              className="text-gold hover:text-[#d4bc96] transition-colors"
            >
              Browse Countries
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
