import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function WestVirginiaPage() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-6 pt-10 sm:px-8">
        <SiteHeader />

        <hr className="mt-5" />

        <h1 className="mt-6 text-lg font-bold">West Virginia</h1>
        <p className="mt-2 text-[17px]">2026</p>
        <p className="mt-1 text-[17px]">First film. In progress.</p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-0 sm:px-6">
        <Image
          src="/BridgeOverlook.jpeg"
          alt="Four people sitting on a rocky overlook with the New River Gorge Bridge in the distance."
          width={5712}
          height={4284}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <p className="mt-3 text-[15px] text-[#4a4a4a]">West Virginia, 2026.</p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-0 sm:px-6">
        <Image
          src="/SunnyBridge.jpeg"
          alt="The New River Gorge Bridge seen through trees."
          width={5712}
          height={4284}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <p className="mt-3 text-[15px] text-[#4a4a4a]">West Virginia, 2026.</p>

        <hr className="mt-10" />

        <p className="mt-6 pb-12 text-[15px]">
          <Link href="/">Home</Link>
        </p>
      </div>
    </div>
  );
}
