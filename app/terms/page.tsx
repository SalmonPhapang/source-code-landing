import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
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
        
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <p className="text-gray-500 mb-12">Last updated: March 26, 2026</p>
        
        <div className="prose prose-brand max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the services provided by Source Code Development ("we," "us," or "our"), you agree to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Source Code Development provides custom software development, web design, mobile application development, and related consulting services. We reserve the right to withdraw or amend our service, and any service or material we provide via the website, in our sole discretion without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Use License</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Source Code Development's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              Unless otherwise agreed upon in a separate written contract, all materials, including code, designs, and documentation created during the provision of services, are the property of Source Code Development until full payment is received, at which point ownership transfers to the client as specified in the service agreement. Our company names, logos, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials on Source Code Development's website are provided on an 'as is' basis. Source Code Development makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall Source Code Development or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Source Code Development's website, even if Source Code Development or a Source Code Development authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of South Africa and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about the Terms of Use should be sent to us at info@sourcecodes.co.za.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
