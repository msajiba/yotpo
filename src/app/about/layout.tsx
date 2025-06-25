import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<div>Loading about...</div>}>{children}</Suspense>
    </div>
  );
}
