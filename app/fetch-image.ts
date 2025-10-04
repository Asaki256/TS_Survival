"use server";
import { validateCatApiKey } from "./env";

type Image = {
  url: string;
};

export async function fetchImage(): Promise<Image> {
  const apiKey = validateCatApiKey();
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search",
    {
      headers: { "x-api-key": apiKey },
    }
  );
  // json()により、レスポンスからオブジェクトを取得する。
  const images = await res.json();
  console.log("fetchImage: 画像取得しました。", images);
  return images[0];
}
