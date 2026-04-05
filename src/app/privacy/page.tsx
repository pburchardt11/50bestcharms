import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for 50bestcharms.com — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl text-[#f5f0e8] leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 text-zinc-400 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">1. Introduction</h2>
          <p>
            50 Best Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company registered in
            Hong Kong, operates 50bestcharms.com (the &ldquo;Website&rdquo;). This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit the Website. Please read this
            policy carefully. By using the Website, you consent to the practices described herein.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">2. Information We Collect</h2>

          <h3 className="text-lg text-[#f5f0e8] mt-6 mb-3">2.1 Information Collected Automatically</h3>
          <p className="mb-3">When you visit the Website, certain information is collected automatically, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and approximate geographic location</li>
            <li>Browser type, version, and language preferences</li>
            <li>Operating system and device type</li>
            <li>Pages visited, time spent on pages, and navigation paths</li>
            <li>Referring website or search terms used to find the Website</li>
            <li>Date and time of your visit</li>
          </ul>

          <h3 className="text-lg text-[#f5f0e8] mt-6 mb-3">2.2 Cookies and Tracking Technologies</h3>
          <p className="mb-3">The Website uses cookies and similar technologies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-zinc-300">Essential cookies:</strong> Required for basic Website functionality, such as language preferences.</li>
            <li><strong className="text-zinc-300">Analytics cookies:</strong> Help us understand how visitors interact with the Website. We may use services such as Vercel Analytics for this purpose.</li>
            <li><strong className="text-zinc-300">Advertising cookies:</strong> Used by our advertising partners (including Google AdSense) to serve relevant advertisements and measure their effectiveness.</li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling certain cookies may affect your
            experience on the Website.
          </p>

          <h3 className="text-lg text-[#f5f0e8] mt-6 mb-3">2.3 Information You Provide</h3>
          <p>
            If you contact us via email, we collect the information you voluntarily provide, including your email
            address and the content of your message. We do not require account registration to use the Website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">3. How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate, maintain, and improve the Website</li>
            <li>Analyse usage patterns to enhance user experience</li>
            <li>Display relevant advertisements through third-party advertising networks</li>
            <li>Respond to your enquiries and communications</li>
            <li>Comply with legal obligations and protect our rights</li>
            <li>Detect and prevent fraud, abuse, or security issues</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">4. Third-Party Services</h2>

          <h3 className="text-lg text-[#f5f0e8] mt-6 mb-3">4.1 Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads
            based on your prior visits to the Website and other websites. You can opt out of personalised
            advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </p>

          <h3 className="text-lg text-[#f5f0e8] mt-6 mb-3">4.2 Google Translate</h3>
          <p>
            The Website integrates Google Translate to provide multi-language support. When you use the translation
            feature, your request is processed by Google. Please refer to{" "}
            <a href="https://policies.google.com/privacy" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>{" "}
            for information on how Google handles your data.
          </p>

          <h3 className="text-lg text-[#f5f0e8] mt-6 mb-3">4.3 Hosting and Infrastructure</h3>
          <p>
            The Website is hosted on Vercel. Vercel may collect server logs and performance data as part of their
            hosting services. Please refer to{" "}
            <a href="https://vercel.com/legal/privacy-policy" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors" target="_blank" rel="noopener noreferrer">
              Vercel&apos;s Privacy Policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">5. Data Sharing and Disclosure</h2>
          <p className="mb-3">We do not sell your personal information. We may share information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-zinc-300">Service providers:</strong> Third-party companies that help us operate the Website (hosting, analytics, advertising).</li>
            <li><strong className="text-zinc-300">Legal requirements:</strong> When required by law, regulation, or legal process.</li>
            <li><strong className="text-zinc-300">Protection of rights:</strong> When necessary to protect the rights, property, or safety of 50 Best Limited, our users, or others.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">6. Data Retention</h2>
          <p>
            We retain automatically collected data for as long as necessary to fulfil the purposes described in
            this policy. Email correspondence is retained for a reasonable period to handle your enquiry and for
            our records. You may request deletion of your personal data by contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">7. Your Rights</h2>
          <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@50bestcharms.com" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
              info@50bestcharms.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">8. Children&apos;s Privacy</h2>
          <p>
            The Website is not directed at children under 13 years of age. We do not knowingly collect personal
            information from children. If you believe we have inadvertently collected information from a child,
            please contact us and we will promptly delete it.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">9. Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect the information we collect.
            However, no method of transmission over the Internet or electronic storage is completely secure, and
            we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an
            updated revision date. Your continued use of the Website after any changes constitutes acceptance of
            the revised policy.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">11. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@50bestcharms.com" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
              info@50bestcharms.com
            </a>.
          </p>
          <p className="mt-4 text-zinc-600 text-sm">
            50 Best Limited, Hong Kong
          </p>
        </section>

        <div className="pt-6 border-t border-[#2a2825] flex gap-4 text-sm">
          <Link href="/terms" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
            Terms of Use
          </Link>
          <Link href="/about" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
