import "./globals.css";
import Navigation from "../../components/Navigation";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first Next 14 app</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
