import { getArtigoBySlug, getArtigos } from "@/lib/artigos";
import { Metadata } from "next";

export async function generateStaticParams() {
  const artigos = await getArtigos();
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params.slug;
  const artigo = await getArtigoBySlug(slug);
  return {
    title: artigo?.titulo || "Artigo",
    description: artigo?.conteudo.slice(0, 150) || "Conteúdo do artigo",
  };
}

export default async function ArtigoPage({ params }: any) {
  const slug = params.slug;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) return <p>Artigo não encontrado.</p>;

  return (
    <article className="p-6">
      <h1 className="text-3xl font-bold">{artigo.titulo}</h1>
      <p className="text-sm text-gray-600">{artigo.autor} - {artigo.data}</p>
      <div className="mt-4">{artigo.conteudo}</div>
    </article>
  );
}

