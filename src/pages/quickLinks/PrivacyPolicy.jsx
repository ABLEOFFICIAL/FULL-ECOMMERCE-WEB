import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-lg">
            Our personal statement, cookies, third-parties
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-12 flex-grow">
        <section className="space-y-12">
          {/* Personal Statement */}
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              Personal Statement
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                We are committed to creating a secure and user-friendly
                experience for every customer. To achieve this, we aim to be as
                clear as possible about our all our policies, as is evident by
                our transparent Terms and Conditions.
              </p>
              <p className=" leading-relaxed mt-2">
                When you visit our site, skilltwins.com, some of your personal
                information supplied during your order or by means of our
                cookies policy may be gathered.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              What are 'cookies'?{" "}
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                Cookies are little text files that are stored within your
                browsers cache. First and third-party cookies are used on this
                site for functionality, statistics, and advertising.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              Why do we use cookies?
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                There are specific cookies necessary for a website to function
                properly. Cookies is what keep track of settings, thus allowing
                your shopping experience to be tailored to you (remembering your
                preference or settings).
              </p>
              <p className=" leading-relaxed mt-2">
                Cookies also gathers data, for example like the time of a
                session, viewed pages, or just general demographic information,
                like age and gender. The information that is gathered can then
                be used for analytical purposes, allowing us to generate
                customized shopping experiences for our users. We do not use
                cookies that will track or identify you.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              What information do we gather specifically?
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                The information we gather is what you supply us with when
                signing up for a newsletter or making a purchase. This is
                usually demographic information like name, address, or general
                contact information. Cookies will also gather session
                information like the pages viewed, the amount of time spent in
                the session, transactions, and any other general demographic
                information (origin, gender, age).
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              What third-parties do we share your information with?
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                Any information we gather is only shared with our affiliate
                partners for analytical reasons. We will not share your personal
                information past our brand and trusted brand partners.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              Website Media{" "}
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                We (skilltwins.com) own all media that is on this website,
                unless stated otherwise. All photography work is owned by Daykun
                (dinadykun.com).
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              {" "}
              Disclosure of Your Information
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                You have the right to request your data. If something is
                incorrect, you can have it altered or removed.
              </p>
              <p className=" leading-relaxed mt-2">
                You can also disable cookies on your device by changing your
                browser settings. You have the option to use opt-out programs
                like NAI’s Consumer opt-out or ‘Google Analytics opt-out browser
                add-on’. These prevent cookies from being used in your browser.
                Know that if you do this, our site may not function properly.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0">
            <h4 className="text-xl font-semibold mb-2 w-full md:w-2/5">
              {" "}
              Updates{" "}
            </h4>
            <div className="w-full md:w-3/5">
              <p className=" leading-relaxed">
                Our privacy policies are subject to change. All updates will
                appear on this page.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
