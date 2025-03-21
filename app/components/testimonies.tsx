import { Button } from "@/app/components/button";
import { ArrowRight } from "@/app/components/icons/arrow-right-icon";
import { Secure } from "@/app/components/icons/secure-icon";
import Image from "next/image";

export function Testimonies() {
  return (
    <section className="mx-auto grid max-w-6xl gap-x-4 gap-y-4 px-4 py-20 md:grid-cols-2">
      <div className="mb-4 grid place-items-center gap-y-8 md:col-span-full">
        <h2 className="max-w-[20ch] text-center text-3xl font-bold md:text-5xl">
          Get Peace of Mind With{" "}
          <span className="text-vivid-blue relative whitespace-nowrap">
            My Doctors Note
            <Image
              src="/line-2.svg"
              alt=""
              width={200}
              height={6}
              className="absolute top-[calc(100%+.5rem)] left-1/2 w-4/5 -translate-x-1/2"
            />
          </span>
        </h2>
        <p className="text-dark-gray max-w-[60ch] font-medium md:text-lg">
          My Doctor&apos;s Note provides a fast, hassle-free solution for
          obtaining excuse notes. Focus on your recovery while we take care of
          the paperwork, delivering your note in minutes.
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <article className="bg-light-blue flex flex-col gap-y-8 rounded-lg p-6">
          <h3 className="text-2xl font-bold">
            Trusted by Thousands Across the USA
          </h3>
          <ul className="text-dark-gray flex list-inside list-disc flex-col gap-y-4 md:text-lg">
            <li>
              <strong className="font-bold">Professional & Reliable - </strong>
              Includes key medical absence details in a format widely recognized
              by workplaces.
            </li>
            <li>
              <strong className="font-bold">
                Essential Information Included -{" "}
              </strong>
              Clearly structured while protecting your privacy.
            </li>
            <li>
              <strong className="font-bold">Instant & Hassle-Free - </strong>
              No appointments, no waiting. Receive your document within seconds
              via email
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <Image src="/walmart.svg" alt="" width={80} height={20} />
            <Image src="/fedex.svg" alt="" width={80} height={20} />
            <Image src="/starbucks.png" alt="" width={80} height={20} />
          </div>
        </article>
        <article className="bg-light-blue flex flex-col gap-y-8 rounded-lg p-6">
          <h3 className="text-2xl font-bold">
            Customer Support That Puts You First
          </h3>
          <ul className="text-dark-gray flex list-inside list-disc flex-col gap-y-4 md:text-lg">
            <li>
              <strong className="font-bold">Adjustable to Your Needs - </strong>
              Easily modify details to match your situation.
            </li>
            <li>
              <strong className="font-bold">Always Here for You - </strong>
              Get assistance whenever you need it, day or night.
            </li>
            <li>
              <strong className="font-bold">
                Real People, Real Support -{" "}
              </strong>
              Our team is here to help, every step of the way.
            </li>
          </ul>
          <div className="flex items-center justify-between gap-x-4">
            <Image src="/avatar-group.png" alt="" width={140} height={30} />
            <strong className="text-turquoise-green font-bold">
              We&apos;re ready to help!
            </strong>
          </div>
        </article>
      </div>
      <div className="flex flex-col gap-y-4">
        <article className="bg-light-blue flex flex-col gap-y-8 rounded-lg p-6">
          <h3 className="text-2xl font-bold">
            Get Your Note In Under 1 Minute
          </h3>
          <ul className="text-dark-gray flex list-inside list-disc flex-col gap-y-4 md:text-lg">
            <li>
              <strong className="font-bold">Skip the Wait - </strong>
              No appointments, no delays. Get what you need instantly, anytime.
            </li>
            <li>
              <strong className="font-bold">Available 24/7 - </strong>
              No need to schedule weeks in advance. Access your document on
              demand, day or night.
            </li>
            <li>
              <strong className="font-bold">Instant Email Delivery -</strong>
              Receive your note directly in your inbox, ready to use.
            </li>
          </ul>
        </article>
        <article className="bg-light-blue flex flex-col gap-y-6 rounded-lg p-6 text-center md:gap-y-12">
          <h3 className="text-2xl font-bold capitalize">
            The best price in the market
          </h3>
          <b className="text-dark-gray text-2xl line-through md:text-4xl">
            $42.99
          </b>
          <strong className="text-6xl font-bold">$29.99</strong>
          <b className="text-turquoise-green text-xl md:text-2xl">
            30% Discount - Limited Time!
          </b>
        </article>
      </div>

      <div className="mt-8 flex flex-col items-center gap-y-4 md:col-span-full">
        <Button type="button">
          Get your Doctors Note Now
          <ArrowRight />
        </Button>
        <span className="text-dark-gray flex items-center justify-center gap-x-2 text-sm font-semibold md:text-lg">
          <Secure />
          100% Risk-Free Money Back Guarantee
        </span>
      </div>
    </section>
  );
}
