import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using 50bestcharms.com.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl text-[#f5f0e8] leading-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-zinc-500 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 text-zinc-400 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using 50bestcharms.com (the &ldquo;Website&rdquo;), you accept and agree to be bound by
            these Terms of Use. If you do not agree to these terms, please do not use the Website. The Website is
            operated by 50 Best Limited, a company registered in Hong Kong (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">2. Use of the Website</h2>
          <p className="mb-3">
            You may use the Website for personal, non-commercial purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Website without express written permission.</li>
            <li>Use any automated means (bots, scrapers, crawlers) to access, collect, or download content from the Website, except as permitted by our robots.txt file.</li>
            <li>Interfere with or disrupt the Website or servers connected to the Website.</li>
            <li>Attempt to gain unauthorised access to any part of the Website.</li>
            <li>Use the Website for any unlawful purpose or in violation of any applicable laws.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">3. Intellectual Property</h2>
          <p className="mb-3">
            All content on the Website, including but not limited to text, articles, rankings, data compilations,
            graphics, logos, and design elements, is the property of 50 Best Limited or its content suppliers and is
            protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            The 50 Best Charms name, logo, and related marks are trademarks of 50 Best Limited. You may not use
            these marks without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">4. Content and Accuracy</h2>
          <p className="mb-3">
            The information on the Website is provided for general informational and entertainment purposes only.
            While we strive for accuracy, we make no warranties or representations regarding the completeness,
            reliability, or accuracy of any content.
          </p>
          <p className="mb-3">
            Our rankings are based on editorial assessment considering cultural significance, global recognition,
            historical depth, active practice, and cross-cultural adoption. Rankings reflect our editorial judgement
            and should not be interpreted as objective fact.
          </p>
          <p>
            Information about lucky charms, their origins, and cultural practices is presented for educational
            purposes. We do not make any claims about the efficacy of any charm, talisman, or symbol.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">5. Images and Third-Party Content</h2>
          <p className="mb-3">
            Images on the Website are sourced from Wikimedia Commons under Creative Commons licences and from
            Unsplash under the Unsplash Licence. Attribution is provided where required by the applicable licence.
          </p>
          <p>
            If you believe any content on the Website infringes your copyright or intellectual property rights,
            please contact us at{" "}
            <a href="mailto:content@50bestcharms.com" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
              content@50bestcharms.com
            </a>{" "}
            with details of the alleged infringement.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">6. External Links</h2>
          <p>
            The Website may contain links to third-party websites. These links are provided for convenience only
            and do not imply endorsement or responsibility for the content, policies, or practices of any
            third-party site. We are not responsible for any loss or damage arising from your use of external
            websites.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">7. Advertising</h2>
          <p>
            The Website may display advertisements served by third-party advertising networks, including Google
            AdSense. These networks may use cookies and similar technologies to serve ads based on your browsing
            activity. We are not responsible for the content of any advertisements displayed on the Website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">8. Disclaimer of Warranties</h2>
          <p>
            The Website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
            warranties of any kind, whether express or implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the
            Website will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, 50 Best Limited and its directors, employees,
            partners, and agents shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or related to
            your use of the Website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Hong Kong Special
            Administrative Region. Any disputes arising from these Terms or your use of the Website shall be
            subject to the exclusive jurisdiction of the courts of Hong Kong.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">11. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
            posting to the Website. Your continued use of the Website after any changes constitutes acceptance of
            the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-4">12. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:info@50bestcharms.com" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
              info@50bestcharms.com
            </a>.
          </p>
          <p className="mt-4 text-zinc-600 text-sm">
            50 Best Limited, Hong Kong
          </p>
        </section>

        <div className="pt-6 border-t border-[#2a2825] flex gap-4 text-sm">
          <Link href="/privacy" className="text-[#c4a87c] hover:text-[#d4bc96] transition-colors">
            Privacy Policy
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
