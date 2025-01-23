import Link from "next/link";
import musicas from "../banco-de-musicas";

// Return a list of `params` to populate the [musica] dynamic segment
export async function generateStaticParams() {
  return musicas.map(mus => ({
    musica: mus.url,
  }));
}

export default async function Musica(props: { params: Promise<{ musica: string }>}) {
  const params = await props.params;
  const musica = musicas.find(mus => mus.url == params.musica);
  return (
    <>
      <p><Link href="/">Lista das músicas</Link></p>
      {musica ?
        <div style={{display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'start', gap: '1em'}}>
          <div>
            {musica?.nome}
            <br/><br/>
            <pre>{musica?.letra}</pre>
          </div>
          <iframe
            src={musica?.playerSrc}
            width="350"
            height="150"
            //frameborder="0"
            allow="autoplay">
          </iframe>
        </div>
      :
        <p>Música não encontrada.</p>
      }
    </>
  )
}