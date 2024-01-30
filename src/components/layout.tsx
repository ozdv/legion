import Footer from "./footer";
import Header from "./header";

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
