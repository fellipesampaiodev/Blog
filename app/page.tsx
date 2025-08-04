import Link from "next/link";
import { getArtigos } from "@/lib/artigos";

export default async function HomePage() {
  const artigos = await getArtigos();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Artigos</h1>
      <ul className="space-y-2">
        {artigos.map((artigo) => (
          <li key={artigo.slug}>
            <Link href={`/artigos/${artigo.slug}`} className="text-blue-600 underline">
              {artigo.titulo}
            </Link>
            <p className="text-sm text-gray-600">{artigo.autor} - {artigo.data}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
