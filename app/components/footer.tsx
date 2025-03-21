import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-dark-gray">
      <div className="mx-auto grid max-w-6xl gap-y-8 border-t border-neutral-200 p-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4">
        <div className="flex flex-col gap-y-4">
          <Image
            src="/logo.png"
            alt=""
            width={165}
            height={20}
            className="col-span-full"
          />
          <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2.5 [&>dt]:font-bold">
            <dt>Support:</dt>
            <dd>(Mon - Fri, 9am - 6pm EST)</dd>
            <dt>Email:</dt>
            <dd>help@urgentsupport.co</dd>
          </dl>
        </div>
        <ul className="flex flex-col gap-y-2">
          <figcaption className="mb-2 font-medium">Customer Service</figcaption>
          <li className="text-sm">Contact Us</li>
          <li className="text-sm">Refund Requests</li>
          <li className="text-sm">Frequently Asked Questions</li>
        </ul>
        <ul className="flex flex-col gap-y-2">
          <figcaption className="mb-2 font-medium">Policies</figcaption>
          <li className="text-sm">Terms Of Service</li>
          <li className="text-sm">Refund Policy</li>
          <li className="text-sm">Privacy Policy</li>
          <li className="text-sm">Disclaimer Policy</li>
          <li className="text-sm">Intellectual Property Policy</li>
          <li className="text-sm">Jurisdiction Policy</li>
          <li className="text-sm">Limitation of Liability Policy</li>
          <li className="text-sm">Indemnification Policy</li>
        </ul>
        <ul className="flex flex-col gap-y-2">
          <figcaption className="mb-2 font-medium">Company Details</figcaption>
          <li className="text-sm">COMPANY NAME & ADDRESS</li>
          <li className="text-sm">Company Registration Number: 000000</li>
        </ul>
      </div>
      <div className="border-t border-neutral-200 p-8 text-center text-xs md:p-12">
        &copy; 2025, My Doctors Note
      </div>
    </footer>
  );
}
