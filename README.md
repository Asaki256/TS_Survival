# Random Cat Image Generator 🐱

ランダムな猫の画像を表示するシンプルなWebアプリケーションです。

## 特徴

- ボタンをクリックするだけでランダムな猫の画像を表示
- レスポンシブデザインで、スマートフォンからデスクトップまで対応
- Next.js 15とTailwindCSSを使用したモダンな設計
- TypeScriptで型安全性を確保

## 技術スタック

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Build Tool**: Turbopack（高速ビルド）
- **API**: [The Cat API](https://thecatapi.com/) を使用

## セットアップ

### 必要な環境

- Node.js 18.0以降
- npm, yarn, pnpm, またはbun

### インストールと実行

1. リポジトリをクローンまたはダウンロード
2. 依存関係をインストール:

```bash
npm install
```

3. 開発サーバーを起動:

```bash
npm run dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

### その他のコマンド

```bash
# 本番用ビルド
npm run build

# 本番サーバー起動
npm run start

# ESLintチェック
npm run lint
```

## プロジェクト構成

```
random-cat/
├── app/
│   ├── cat-image.tsx     # 猫の画像コンポーネント
│   ├── fetch-image.ts    # 画像取得ロジック
│   ├── page.tsx          # メインページ
│   └── layout.tsx        # レイアウト設定
├── public/               # 静的ファイル
└── package.json
```

## デプロイ

### Vercel（推奨）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Vercelアカウントにログイン
2. GitHubリポジトリを接続
3. 自動でデプロイが開始されます

### その他のプラットフォーム

- **Netlify**: `npm run build` で生成された `out` フォルダをデプロイ
- **Cloudflare Pages**: GitHubリポジトリを接続してデプロイ

## 貢献

バグ報告や機能要望はIssueでお知らせください。プルリクエストも歓迎します！

## ライセンス

MIT License
