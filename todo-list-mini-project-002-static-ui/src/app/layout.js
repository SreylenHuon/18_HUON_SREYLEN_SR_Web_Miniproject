import WorkSpaceComponent from "@/components/WorkSpaceComponent";
import "./globals.css";
import { Provider } from "@/context/Provider";
import HeaderComponent from "@/components/HeaderComponent";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>

    </html>
  );
}
