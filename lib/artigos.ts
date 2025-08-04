import artigos from "@/data/artigos.json";

export async function getArtigos() {
  return artigos;
}

export async function getArtigoBySlug(slug: string) {
  return artigos.find((a) => a.slug === slug);
}
