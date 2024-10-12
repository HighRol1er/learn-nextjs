import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

/** "Next.js의 Server Component에서 API 요청은 Network 탭에서 볼 수 없다 */
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // code style 1
  return fetch(API_URL).then(response => response.json());
  
  /** code style 2 / code style 1,2는 같은 비동기 작업
   * const response = await fetch(API_URL);
   * const json = await response.json();
   * return json;
  */
}

type Movie = {
  id: number;
  title: string;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie: Movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      
    </div>
  )
}
 