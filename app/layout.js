import './globals.css';

export const metadata = {
  title: 'Sparkwave – Ship products faster, together.',
  description: 'Sparkwave is the all-in-one platform for modern teams to plan, track, and ship amazing products.',
  keywords: 'project management, team collaboration, product shipping, kanban, sparkwave',
  openGraph: {
    title: 'Sparkwave – Ship products faster, together.',
    description: 'Sparkwave is the all-in-one platform for modern teams to plan, track, and ship amazing products.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
