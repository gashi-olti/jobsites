interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div tw="w-full min-h-screen bg-gray-200 p-2">{children}</div>;
}
