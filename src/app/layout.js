import "@/styles/globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata = {
  title: "Fiba Motors | Used Car Listings",
  description:
    "Buying and selling vehicles in the Girne (Kyrenia) area. Trusted dealership, trade-ins and transfer support.",
};

export const viewport = {
  themeColor: "#1e40af",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
