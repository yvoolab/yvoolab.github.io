import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Yvoo Bot metrics (Yvoo Lab)",
  description:
    "How the Yvoo Bot metrics tool uses YouTube API Services: read-only access to our own channel's stats and comments, stored locally, never shared.",
  alternates: { canonical: "https://yvoolab.github.io/privacy/" },
};

export default function Privacy() {
  return (
    <article className="prose max-w-none space-y-4">
      <h1 className="text-2xl font-semibold">Privacy Policy — Yvoo Bot metrics</h1>
      <p className="text-sm text-slate-500">Last updated: 2026-11-05</p>
      <p>
        <strong>Yvoo Bot metrics</strong> is an internal tool run by Yvoo Lab (Paris, France) to read the
        statistics of our own YouTube channel, @yvoobot. It is not offered to the public.
      </p>
      <h2 className="text-lg font-semibold">What it accesses</h2>
      <p>
        This tool uses <strong>YouTube API Services</strong> (YouTube Data API v3 and YouTube Analytics API)
        with read-only scopes. It reads our own channel&apos;s video statistics (views, watch time, likes,
        comments, shares) and the public comments posted on our videos.
      </p>
      <h2 className="text-lg font-semibold">How the data is used and stored</h2>
      <p>
        The data is used only to measure our own content. It is stored locally on our own machine and in our
        private repository. It is never sold, rented, or shared with any third party, and is not used for
        advertising.
      </p>
      <h2 className="text-lg font-semibold">Google and YouTube</h2>
      <p>
        By using this tool you are bound by the{" "}
        <a href="https://www.youtube.com/t/terms" className="underline">YouTube Terms of Service</a>. Google&apos;s
        handling of data is described in the{" "}
        <a href="https://policies.google.com/privacy" className="underline">Google Privacy Policy</a>. Access can be
        revoked at any time at{" "}
        <a href="https://security.google.com/settings/security/permissions" className="underline">
          security.google.com/settings/security/permissions
        </a>
        ; stored data is deleted on request.
      </p>
      <h2 className="text-lg font-semibold">Contact</h2>
      <p>
        <a href="mailto:yvoo@yvoolab.com" className="underline">yvoo@yvoolab.com</a>
      </p>
    </article>
  );
}
