"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const FONT_HOMEPAGE = '"Times New Roman", Times, serif';
const CHOP_URL =
  "https://chop.donordrive.com/participants/William-Danon-2026";

const MINUTES_ISSUES: { title: string; date: string; url: string }[] = [
  {
    title: 'Wilman Carrasco\'s "Driving" Lessons',
    date: "Jul 10, 2026",
    url: "https://williamkohlerdanon.substack.com/p/wilman-carrascos-driving-lessons",
  },
  {
    title: "I Knew Luigi Mangione",
    date: "Mar 6, 2025",
    url: "https://williamkohlerdanon.substack.com/p/i-knew-luigi-mangione",
  },
  {
    title: "The Wingman",
    date: "Feb 13, 2025",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-181",
  },
  {
    title: "You Can't Retire Heat Culture",
    date: "Jan 29, 2025",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-3bf",
  },
  {
    title: "Sharks and Rec",
    date: "Nov 21, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-d5b",
  },
  {
    title: "Heart Openers and Heart Breakers",
    date: "Oct 11, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-544",
  },
  {
    title: "The Usual Suspects",
    date: "Aug 21, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-de1",
  },
  {
    title: "Bigger than Weather",
    date: "Aug 8, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-8c5",
  },
  {
    title: "Seven Years in Hell",
    date: "Jul 23, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-987",
  },
  {
    title: "As Written!",
    date: "Jul 12, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-db1",
  },
  {
    title: "Trusting in the Trail",
    date: "Jun 25, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-6a5",
  },
  {
    title: "Fathers (Day) and Children",
    date: "Jun 13, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-4a9",
  },
  {
    title: "Are Veja shoes pronounced Vay-jah or Vay-ha?",
    date: "Mar 8, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-025",
  },
  {
    title: "Everything Spoiler-Free You Need to Know About Dune: Part 2",
    date: "Mar 1, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-e0e",
  },
  {
    title: "Neither Late, Nor Early, But Precisely When I Mean to",
    date: "Feb 23, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-406",
  },
  {
    title: "Now Taking Requests",
    date: "Jan 11, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes-922",
  },
  {
    title: "New Year, New(s) Letter",
    date: "Jan 5, 2024",
    url: "https://williamkohlerdanon.substack.com/p/the-minutes",
  },
  {
    title: "Seasonal Strategies",
    date: "Dec 22, 2023",
    url: "https://williamkohlerdanon.substack.com/p/seasonal-strategies",
  },
  {
    title: "Career Crossroads",
    date: "Dec 14, 2023",
    url: "https://williamkohlerdanon.substack.com/p/career-crossroads",
  },
  {
    title: "The Job Search",
    date: "Dec 6, 2023",
    url: "https://williamkohlerdanon.substack.com/p/the-job-search",
  },
];

const NAVY = "#1c2d4f";
const BOTTLE_GREEN = "#2e4a3a";
const TAUPE = "#8a8175";
const STEEL_BLUE = "#3d5a6c";

type PanelKey =
  | "about-me"
  | "the-minutes"
  | "business"
  | "west-virginia"
  | "chicken";

const LINK_LIST: { key: PanelKey; text: string }[] = [
  { key: "about-me", text: "about me" },
  { key: "business", text: "business" },
  { key: "west-virginia", text: "west virginia" },
  { key: "chicken", text: "chicken" },
];

const PANELS: Record<
  PanelKey,
  { label: string; color: string; dashed?: boolean; content: ReactNode }
> = {
  "about-me": {
    label: "about me",
    color: NAVY,
    content: (
      <>
        <p>new york city (september 2022–current)</p>
        <p>university of pennsylvania (2017–2022)</p>
        <p className="mt-2">technology / sales, 2020–2026</p>
        <p className="mt-2">
          grapevine (ongoing; i left in 2023)
          <br />
          arpari (2024–2025)
          <br />
          stedi (2025–2026)
        </p>
      </>
    ),
  },
  "the-minutes": {
    label: "the minutes",
    color: NAVY,
    content: (
      <ul className="m-0 list-none p-0">
        {MINUTES_ISSUES.map((issue) => (
          <li key={issue.url} className="mt-2 first:mt-0">
            <a
              href={issue.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1c2d4f] underline"
            >
              {issue.title}
            </a>
            <span> — {issue.date}</span>
          </li>
        ))}
      </ul>
    ),
  },
  business: {
    label: "business",
    color: TAUPE,
    dashed: true,
    content: <p>coming soon.</p>,
  },
  "west-virginia": {
    label: "west virginia",
    color: STEEL_BLUE,
    content: <p>coming soon.</p>,
  },
  chicken: {
    label: "chicken",
    color: BOTTLE_GREEN,
    content: <p>roast chicken / weekly.</p>,
  },
};

export default function Home() {
  const [openKey, setOpenKey] = useState<PanelKey | null>(null);
  const active = openKey ? PANELS[openKey] : null;
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = (key: PanelKey) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  useEffect(() => {
    if (!openKey) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-panel-trigger]")) return;
      if (panelRef.current?.contains(target)) return;
      setOpenKey(null);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openKey]);

  return (
    <div
      className="min-h-dvh bg-[#f2ead9] text-[#211c16]"
      style={
        {
          "--font-homepage": FONT_HOMEPAGE,
          fontFamily: "var(--font-homepage)",
        } as CSSProperties
      }
    >
      <div className="mx-auto max-w-[1000px] px-4 py-10 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[420px]">
            <h1 className="text-2xl font-bold">William Kohler Danon</h1>
            <p className="mt-3 text-base leading-relaxed">
              Just &quot;Will&quot; please. Storyteller based in the East
              Village, NY.
            </p>

            <ul className="mt-6 flex list-none flex-col gap-2 p-0 text-base">
              {LINK_LIST.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    data-panel-trigger
                    aria-expanded={openKey === item.key}
                    onClick={() => toggle(item.key)}
                    className="cursor-pointer border-0 bg-transparent p-0 text-left text-[#1c2d4f] underline"
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-fit sm:shrink-0">
            <div className="border border-[#1c2d4f]">
              <h2 className="bg-[#1c2d4f] px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                the minutes
              </h2>
              <div className="px-3 py-3 text-sm leading-relaxed">
                <p>
                  <button
                    type="button"
                    data-panel-trigger
                    aria-expanded={openKey === "the-minutes"}
                    onClick={() => toggle("the-minutes")}
                    className="cursor-pointer border-0 bg-transparent p-0 text-left text-[#1c2d4f] underline"
                  >
                    the minutes
                  </button>
                </p>
                <p>2022–current</p>
                <p>personal essays</p>
              </div>
            </div>

            <div className="mt-6 border border-[#2e4a3a]">
              <h2 className="bg-[#2e4a3a] px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                upcoming
              </h2>
              <div className="px-3 py-3 text-sm leading-relaxed">
                <p>philadelphia marathon</p>
                <p>november 22, 2026</p>
                <p className="mt-2">
                  <a href={CHOP_URL} className="text-[#1c2d4f] underline">
                    donate to CHOP
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={panelRef}
        aria-hidden={!openKey}
        className={`fixed inset-x-0 bottom-0 z-50 border-t transition-transform duration-300 ease-out ${
          openKey ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
        style={{
          backgroundColor: "#f2ead9",
          borderTopColor: active?.color ?? "transparent",
          borderTopStyle: active?.dashed ? "dashed" : "solid",
        }}
      >
        <div className="mx-auto max-w-[1000px] px-4 sm:px-8">
          <div
            className="flex items-center justify-between px-3 py-1 text-xs font-bold tracking-wide text-white uppercase"
            style={{ backgroundColor: active?.color ?? "transparent" }}
          >
            <span>{active?.label}</span>
            <button
              type="button"
              onClick={() => setOpenKey(null)}
              className="cursor-pointer border-0 bg-transparent p-0 text-xs font-normal normal-case text-white underline"
            >
              close
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto pt-4 pb-28 text-sm leading-relaxed">
            {active?.content}
          </div>
        </div>
      </div>
    </div>
  );
}
