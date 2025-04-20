// src/app/layout.tsx
import './globals.css';
import NavBar from './components/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-black text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
