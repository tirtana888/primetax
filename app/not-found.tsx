import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[60vh] flex-col justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 text-h1">This page could not be found.</h1>
      <p className="mt-5 max-w-xl text-lead text-graphite">
        The page may have moved, or the address may be incorrect.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/" arrow>
          Return home
        </ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          View services
        </ButtonLink>
      </div>
    </section>
  );
}
