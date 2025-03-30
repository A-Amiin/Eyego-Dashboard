import Providers from "./Providers";
import "./globals.css";

export const metadata = {
  title: "Eyego Dashboard",
  description: "Eyego Dashboard for Tech Store With the best prices in the market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
