import Image from "next/image";

export function Header() {
  return (
    <header className="grid place-content-center py-4">
      <Image src="/logo.png" alt="" width={190} height={24} />
    </header>
  );
}
