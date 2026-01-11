import EmailIcon from "@/components/icons/EmailIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import RssIcon from "@/components/icons/RssIcon";

const HomeContact = () => (
  <footer id="contact" className="mt-12">
    <div className="container py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-[var(--muted)]">Contact</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="mailto:nisknishimura@gmail.com"
            aria-label="Email"
            className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
          >
            <EmailIcon aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Nisk36"
            aria-label="GitHub"
            className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
          >
            <GitHubIcon aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="https://nisk36.github.io/NiskPortfolio/feed.xml"
            aria-label="RSS"
            className="inline-flex items-center justify-center text-[var(--text)] hover:text-[var(--muted)]"
          >
            <RssIcon aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default HomeContact;
