
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Source Code Development',
  description: 'Our commitment to protecting your personal information in compliance with POPIA and South African law.',
};

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-4 h-4" />
            POPIA Compliant
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Source Code Development, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information in accordance with the Protection of Personal Information Act (POPIA) and other relevant South African legislation.
          </p>
          <p className="mt-4 text-sm text-gray-500">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              1. Introduction
            </h2>
            <p>
              Source Code Development ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              This policy applies to all visitors to our website and clients who use our services. We act as a "Responsible Party" in terms of the Protection of Personal Information Act 4 of 2013 ("POPIA").
            </p>
          </section>

          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              2. Information We Collect
            </h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier, title.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
              <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                <Lock className="w-5 h-5 text-green-600" />
              </div>
              3. How We Use Your Information
            </h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Request access to your personal data (commonly known as a "data subject access request").</li>
              <li>Request correction of the personal data that we hold about you.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing of your personal data.</li>
              <li>Request the transfer of your personal data to you or to a third party.</li>
              <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
            </ul>
            <p className="mt-4">
              If you wish to exercise any of the rights set out above, please contact us. You have the right to lodge a complaint with the Information Regulator (South Africa) if you believe we are not handling your data correctly.
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
              <strong>Information Regulator (South Africa)</strong><br />
              JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001<br />
              Email: POPIAComplaints@inforegulator.org.za
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-2 font-medium">
              Source Code Development<br />
              Email: privacy@sourcecode.dev<br />
              South Africa
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
