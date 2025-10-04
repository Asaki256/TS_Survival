"use client";
import { useState } from "react";
import Image from "next/image";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);
  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={styles.page}>
      <button
        onClick={refreshImage}
        className={styles.button}
      >
        One more cat!
      </button>
      <div className={styles.frame}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="ランダムな猫の画像"
            width={800}
            height={600}
            className={styles.img}
            unoptimized
          />
        )}
      </div>
    </div>
  );
}
