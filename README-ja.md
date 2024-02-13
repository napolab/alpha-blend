# `@napolab/alpha-blend`

与えられた数学的な公式に基づいて、2 つの色のアルファブレンドを行う TypeScript パッケージです。

- [English README is here](./README.md)

## 計算式

以下の計算式を使用してブレンドが計算されます：

```math
\begin{align}
\alpha &= \alpha_b \alpha_f + \alpha_b (1 - \alpha_f) + (1 - \alpha_b) \alpha_f \tag{1} \\
&= \alpha_b + \alpha_f - \alpha_b \alpha_f \\
&= \alpha_b (1 - \alpha_f) + \alpha_f \\
C &= \frac{\alpha_b (1 - \alpha_f) C_b + \alpha_f C_f}{\alpha} \tag{4}
\end{align}
```

詳しい説明は、[この記事](https://qiita.com/kerupani129/items/4bf75d9f44a5b926df58#1-%E9%80%9A%E9%81%8E%E3%81%99%E3%82%8B%E8%89%B2%E3%81%AE%E5%89%B2%E5%90%88%E3%81%AB%E3%82%88%E3%82%8B%E8%AA%AC%E6%98%8E)を参照してください。

## 使い方

### 機能

- それぞれのアルファ値を持つ 2 つの色をブレンドします。
- HEX 形式で結果の色を取得します。
- HEX と RGBA の入力形式の両方を処理します。

### サンプルコード

```ts
import { alphaBlend } from "@napolab/alpha-blend";

const foregroundColor = "#ff5733";
const backgroundColor = "rgba(255, 87, 51, 0.5)";
const blendedColor = alphaBlend(foregroundColor, backgroundColor);

// 通常の返り値は '#ff5733ff'。
blendedColor;
```

## インストール

パッケージをインストールするには：

```bash
npm install @napolab/alpha-blend
```

または

```bash
yarn add @napolab/alpha-blend
```

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。
