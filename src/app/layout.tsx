import './globals.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Twoja Strona',
  description: 'Opis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
