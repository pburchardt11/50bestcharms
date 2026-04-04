import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-4">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(196,168,124,0.04)] blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-lg w-full">
        {/* 404 number */}
        <p className="font-heading text-[120px] sm:text-[160px] leading-none text-[rgba(196,168,124,0.15)] select-none">
          404
        </p>

        {/* Icon */}
        <div className="mt-[-1rem] mb-6 flex justify-center">
          <span className="text-5xl" role="img" aria-label="Lost charm">
            🍀
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl text-[#f5f0e8] mb-4">
          Page Not Found
        </h1>

        {/* Subtext */}
        <p className="text-[#9a958d] text-base leading-relaxed mb-10">
          Looks like this charm has gone missing. The page you&apos;re looking
          for doesn&apos;t exist or may have moved.
        </p>

        {/* Divider */}
        <div className="border-t border-[#2a2825] mb-10" />

        {/* Navigation links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(196,168,124,0.4)] bg-[rgba(196,168,124,0.08)] px-5 py-2.5 text-sm font-medium text-[#c4a87c] hover:bg-[rgba(196,168,124,0.14)] transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/charm"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2a2825] bg-[#121210] px-5 py-2.5 text-sm font-medium text-[#9a958d] hover:border-[rgba(196,168,124,0.3)] hover:text-[#c4a87c] transition-colors"
          >
            Browse Charms
          </Link>
          <Link
            href="/country"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2a2825] bg-[#121210] px-5 py-2.5 text-sm font-medium text-[#9a958d] hover:border-[rgba(196,168,124,0.3)] hover:text-[#c4a87c] transition-colors"
          >
            Browse Countries
          </Link>
        </div>
      </div>
    </div>
  );
}
