export default async function ChatPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Legal Assistant Chat ({locale})</h1>
    </div>
  );
}
