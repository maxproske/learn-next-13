export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      <aside>
        <ul>
            <li>Engineering</li>
            <li>{`What's New`}</li>
        </ul>
      </aside>
        {children}
      </>
    );
  }