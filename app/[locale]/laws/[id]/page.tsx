export default async function LawDetailPage({ 
  params 
}: { 
  params: Promise<{ locale: string; id: string }> 
}) {
  const { locale, id } = await params;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Law Detail ({id}) in {locale}</h1>
    </div>
  );
}
