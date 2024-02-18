import Footer from "./footer";

// only used in not-found ?
export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <>
      {/* <Header /> */}
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
