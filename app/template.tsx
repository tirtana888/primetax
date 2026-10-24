/**
 * Templates remount on every navigation, so the CSS entrance animation in
 * `.page-enter` (styles/globals.css) runs for each new page while the header
 * and footer from the layout stay in place.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
