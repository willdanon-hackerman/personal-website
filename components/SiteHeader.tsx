import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <span className="text-lg font-bold">William Danon</span>
      <nav className="flex gap-4 text-base">
        <Link href="/projects">Projects</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
