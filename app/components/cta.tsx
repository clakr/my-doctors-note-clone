import Image from "next/image";

export function CTA() {
  return (
    <section className="bg-mint-green m-4 max-w-6xl rounded-xl px-4 py-8 lg:mx-auto">
      <div className="mx-auto grid place-items-center gap-y-4 text-center md:grid-cols-[180px_1fr] md:grid-rows-2 md:place-items-start md:text-start lg:max-w-3xl">
        <Image
          src="/cta.svg"
          alt=""
          width={144}
          height={144}
          className="md:row-span-full"
        />
        <h2 className="text-2xl font-bold capitalize md:self-end md:text-3xl">
          Money Back Guarantee!
        </h2>
        <p className="font-medium text-pretty md:text-lg">
          We will refund 100% of your payment, in case you&apos;re not 100%
          satisfied with our service.
        </p>
      </div>
    </section>
  );
}
