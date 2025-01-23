import Link from "next/link";
import musicas from "./banco-de-musicas";

export default function Musicas() {
  return (
    <div>
      Link para nosso drive: <a href="https://goo.gl/iCNHkU" target="_blank">https://goo.gl/iCNHkU</a><br />
      <br/>
      NOME DO ARQUIVO NO DRIVE ("início da música")<br/>
      <br/>
      {musicas.map(musica => (
        <div key={musica.url}>
          <Link href={musica.url}>{musica.nome}</Link> ("{musica.inicio}...")
        </div>
      ))}
    </div>
  );
}
