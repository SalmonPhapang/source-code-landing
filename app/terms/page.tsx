import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, FileText, AlertCircle, Gavel } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Source Code Development',
  description: 'Terms and conditions governing the use of our services, compliant with the Consumer Protection Act (CPA) and ECTA.',
};

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-brand-100 selection:text-brand-900">
      {/* Header */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2 group text-gray-600 hover:text-brand-600 transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6 border border-brand-100">
            <Scale className="w-4 h-4" />
            CPA & ECTA Compliant
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Please read these terms carefully. They govern your use of our website and services in accordance with the Electronic Communications and Transactions Act (ECTA) and the Consumer Protection Act (CPA).
          </p>
          <p className="mt-4 text-sm text-gray-500">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              These terms constitute a legally binding agreement between you and Source Code Development.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <Gavel className="w-5 h-5 text-purple-600" />
              </div>
              2. Services and Engagement
            </h2>
            <p>
              Source Code Development provides custom software development, web design, and mobile application development services.
            </p>
            <p>
              Specific project terms, deliverables, timelines, and costs will be outlined in a separate Service Level Agreement (SLA) or Project Proposal, which shall take precedence over these general terms where applicable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              3. Consumer Protection Act (CPA) Notice
            </h2>
            <p>
              In terms of Section 49 of the Consumer Protection Act 68 of 2008, your attention is specifically drawn to the following clauses which:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Limit the risk or liability of Source Code Development or a third party;</li>
              <li>Create an assumption of risk or liability for the user;</li>
              <li>Impose an obligation on the user to indemnify Source Code Development or a third party; or</li>
              <li>Constitute an acknowledgement of a fact by the user.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Background IP:</strong> We retain all rights to our pre-existing code, libraries, and tools used to create your software.</li>
              <li><strong>Deliverables:</strong> Upon full payment, the specific custom code and designs created for your project will be assigned to you.</li>
              <li><strong>Website Content:</strong> All content, logos, and graphics on this website are the property of Source Code Development and are protected by copyright laws.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law (including the CPA), Source Code Development shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. ECTA Disclosures</h2>
            <p>
              In accordance with the Electronic Communications and Transactions Act 25 of 2002, we make the following information available:
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg border border-gray-100 text-sm space-y-3">
              <div>
                <span className="font-bold block text-gray-900">Full Name:</span>
                Source Code Development
              </div>
              <div>
                <span className="font-bold block text-gray-900">Legal Status:</span>
                Private Company
              </div>
              <div>
                <span className="font-bold block text-gray-900">Physical Address:</span>
                South Africa
              </div>
              <div>
                <span className="font-bold block text-gray-900">Email Address:</span>
                <a href="mailto:hello@sourcecode.dev" className="text-brand-600 hover:underline">hello@sourcecode.dev</a>
              </div>
              <div>
                <span className="font-bold block text-gray-900">Website:</span>
                <a href="https://sourcecode.dev" className="text-brand-600 hover:underline">https://sourcecode.dev</a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2 font-medium">
              Email: legal@sourcecode.dev
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
