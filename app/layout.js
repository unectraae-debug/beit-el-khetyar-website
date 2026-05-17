import './globals.css';

export const metadata = {
  title: 'Beit El Khetyar Restaurant & Cafeteria | Abu Dhabi',
  description: 'Authentic Levantine restaurant in Abu Dhabi with an interactive digital menu book.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
