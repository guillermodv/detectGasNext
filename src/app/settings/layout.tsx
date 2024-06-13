import React from "react";
import { Footer, NavBar } from "../components";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav className="sticky top-0">
        <NavBar />
      </nav>
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <div className="sticky bottom-1">
        <Footer />
      </div>
    </section>
  );
}

export default layout;
