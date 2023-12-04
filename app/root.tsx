import type { LinksFunction } from "@remix-run/cloudflare";
import stylesheet from "./tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {useEffect, useState} from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "icon",
    href: "https://img.icons8.com/dusk/64/000000/linux.png",
    type: "image/png",
  },
  { rel: "preload", href: "https://fonts.googleapis.com" },
  {
    rel: "preload",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const themes = ["night", "dracula", "halloween", "luxury", "coffee"];
  const theme = themes[counter];

  useEffect(() => {
    setTimeout(() => setCounter((counter + 1) % themes.length), 2000);
  }, [counter, themes.length]);

  return (
      <html lang="en" data-theme={theme} className="font-body font-medium">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
