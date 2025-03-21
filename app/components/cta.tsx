import Image from "next/image";

export function CTA() {
  return (
    <section className="bg-mint-green m-4 grid place-items-center gap-y-4 rounded-xl px-4 py-8 text-center md:grid-cols-[180px_1fr] md:grid-rows-2 md:place-items-start md:text-start">
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
        We will refund 100% of your payment, in case you're not 100% satisfied
        with our service.
      </p>
    </section>
  );
}
