// ビルド時の環境変数チェックを回避し、ランタイムでの適切な処理を行う
export const CAT_API_KEY = process.env.CAT_API_KEY || process.env.NEXT_PUBLIC_CAT_API_KEY || "DEMO_KEY";

// ランタイムでの検証を行う関数
export function validateCatApiKey(): string {
  const apiKey = CAT_API_KEY;
  if (!apiKey || apiKey === "DEMO_KEY") {
    console.warn("CAT_API_KEY is not properly configured. Using demo key.");
  }
  return apiKey;
}
