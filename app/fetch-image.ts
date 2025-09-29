"use server";
import { CAT_API_KEY } from "./env";

type Image = {
  url: string;
};

export async function fetchImage(): Promise<Image> {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search",
    {
      headers: { "x-api-key": CAT_API_KEY },
    }
  );
  // json()により、レスポンスからオブジェクトを取得する。
  const images = await res.json();
  console.log("fetchImage: 画像取得しました。", images);
  return images[0];
}
