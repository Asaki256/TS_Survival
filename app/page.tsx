import { CatImage } from "./cat-image";
// import { connection } from "next/server";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  // connectionがない場合、ビルド時に画像が固定化されてしまう
  // connectionがあることで、画面リロード時に毎回画像を取得して結果がランダムになる
  // await connection();
  const image = await fetchImage();
  console.log("Home: 画像取得しました。", image.url);
  return <CatImage url={image.url} />;
}
