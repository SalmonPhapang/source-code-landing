import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: March 26, 2026</p>
        
        <div className="prose prose-brand max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Source Code Development ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>We collect several types of information from and about users of our Website, including information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
                <li>That is about you but individually does not identify you, such as your IP address and browsing history.</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Collect Information</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>We collect this information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Directly from you when you provide it to us (e.g., through our contact form).</li>
                <li>Automatically as you navigate through the site (e.g., usage details, IP addresses, and information collected through cookies).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Disclosure of Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell or rent your personal information to third parties. We may disclose personal information that we collect or you provide as described in this privacy policy to our subsidiaries and affiliates, to contractors, service providers, and other third parties we use to support our business, or to fulfill the purpose for which you provide it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Choices</h2>
            <p className="text-gray-600 leading-relaxed">
              You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly. You may also opt out of receiving promotional communications from us by following the instructions in those communications or by contacting us at info@sourcecodes.co.za.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Changes to Our Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              To ask questions or comment about this privacy policy and our privacy practices, contact us at info@sourcecodes.co.za or via our physical address: 11740 sekwati street,zone7a sebokeng 1983.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
