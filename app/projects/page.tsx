import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10 sm:px-8">
      <SiteHeader />

      <hr className="mt-5" />

      <h1 className="mt-6 text-lg font-bold">Projects</h1>

      <div className="mt-6 flex gap-6 text-[17px]">
        <span className="w-14 shrink-0">2026</span>
        <div>
          <Link href="/projects/west-virginia">West Virginia</Link>
          <div>First film. In progress.</div>
        </div>
      </div>

      <hr className="mt-10" />

      <p className="mt-6 pb-12 text-[15px]">
        <Link href="/">Home</Link>
      </p>
    </div>
  );
}
