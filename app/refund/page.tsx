import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
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
        
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: March 26, 2026</p>
        
        <div className="prose prose-brand max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Custom Services</h2>
            <p className="text-gray-600 leading-relaxed">
              At Source Code Development, we provide custom software development and design services tailored to your specific requirements. Due to the nature of our work, refunds are generally not available for services that have already been performed or for projects that have been completed and approved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Milestone Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              Our projects are typically structured with milestone-based payments. Each payment is tied to the completion and approval of specific project phases. Once a milestone is approved and payment is made, that payment is non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Termination and Cancellation</h2>
            <p className="text-gray-600 leading-relaxed">
              Clients may terminate a project at any time. In the event of termination, the client is responsible for payment for all work performed up to the date of termination. If the amount paid exceeds the value of the work performed, we may, at our discretion, offer a partial refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Disputes and Dissatisfaction</h2>
            <p className="text-gray-600 leading-relaxed">
              We strive for complete client satisfaction. If you are dissatisfied with our services, we encourage you to contact us immediately to discuss your concerns. We will make every reasonable effort to resolve any issues to your satisfaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our refund policy, please contact us at hello@sourcecode.dev.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
