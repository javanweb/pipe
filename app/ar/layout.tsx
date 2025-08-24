// app/ar/layout.tsx
import {LanguageSwitcher} from '@/components/LanguageSwitcher';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ fontFamily: 'Tajawal, sans-serif' }}>
        <header className="p-6 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800"># إميربلاست</h1>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-8">
          {children}
        </main>

        <footer className="max-w-6xl mx-auto p-6 text-center text-gray-600 text-sm mt-12 border-t">
          &copy; {new Date().getFullYear()} EMİRGLOBAL PLASTİK METAL SAN. VE DIŞ TİCARET A.Ş. جميع الحقوق محفوظة.
        </footer>
      </body>
    </html>
  );
}