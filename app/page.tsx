import ConfettiOnLoad from "./confetti";

async function getPublishedContentsTotal() {
  const response = await fetch(
    "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
    { cache: "no-store" },
  );

  const total = response.headers.get("X-Pagination-Total-Rows");
  return Number(total ?? 0);
}

export default async function Page() {
  const totalContents = await getPublishedContentsTotal();

  return (
    <>
      <ConfettiOnLoad />
      <main className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-[0.04em] uppercase">
          Em Construção
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#f2efe8]/90">
          Estamos neste exato momento reconstruindo o TabNews, um lugar na
          internet para quem trabalha com tecnologia e precisa consumir
          conteúdos com valor concreto.
        </p>
        <p className="mt-8 text-base text-[#f2efe8]/80">
          Total de conteúdos publicados:{" "}
          <span className="font-semibold text-[#f2efe8]">
            {totalContents.toLocaleString("pt-BR")}
          </span>
        </p>
        <p className="mt-6">
          <a
            href="https://www.tabnews.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-[#f2efe8]/40 hover:decoration-[#f2efe8]"
          >
            Acesse o TabNews
          </a>
        </p>
      </main>
    </>
  );
}
