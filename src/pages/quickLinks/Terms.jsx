import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-lg">Agreement</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="max-w-3xl mx-auto space-y-6">
          <p className=" leading-relaxed">
            We know it’s tempting to skip these Terms of Service, but it’s
            important to establish what you can expect from us as you use
            Vantage services, and what we expect from you.
          </p>

          <p className=" leading-relaxed">
            These Terms of Service reflect the way Vantage business works, the
            laws that apply to our company, and certain things we’ve always
            believed to be true. As a result, these Terms of Service help define
            Vantage’s relationship with you as you interact with our services.
            For example, these terms include the following topic headings:
          </p>

          <ul className="list-disc list-inside  space-y-2">
            <li>
              What you can expect from us, which describes how we provide and
              develop our services
            </li>
            <li>
              What we expect from you, which establishes certain rules for using
              our services
            </li>
            <li>
              Content in Vantage services, which describes the intellectual
              property rights to the content you find in our services — whether
              that content belongs to you, Vantage, or others
            </li>
            <li>
              In case of problems or disagreements, which describes other legal
              rights you have, and what to expect in case someone violates these
              terms
            </li>
          </ul>

          <p className=" leading-relaxed">
            Understanding these terms is important because, to use our services,
            you must accept these terms.
          </p>

          <p className=" leading-relaxed">
            Besides these terms, we also publish a Privacy Policy. Although it’s
            not part of these terms, we encourage you to read it to better
            understand how you can update, manage, export, and delete your
            information.
          </p>
        </section>
      </main>

      {/* Footer with Buttons */}
      <footer className="py-6">
        <div className="container mx-auto px-4 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Not right now...
          </button>
          <button className="px-6 py-2 bg-[var(--red)] text-white rounded ">
            I agree with terms
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
