# `@napolab/alpha-blend`

A TypeScript package to perform the alpha blending of two colors based on the given mathematical formulas.

- [日本語の README はこちら](./README-ja)

## Formulas

The blending is calculated using the following formulas:

```math
\begin{align}
\alpha &= \alpha_b \alpha_f + \alpha_b (1 - \alpha_f) + (1 - \alpha_b) \alpha_f \tag{1} \\
&= \alpha_b + \alpha_f - \alpha_b \alpha_f \\
&= \alpha_b (1 - \alpha_f) + \alpha_f \\
C &= \frac{\alpha_b (1 - \alpha_f) C_b + \alpha_f C_f}{\alpha} \tag{4}
\end{align}
```

For a detailed explanation, please refer to this [article](https://qiita.com/kerupani129/items/4bf75d9f44a5b926df58#1-%E9%80%9A%E9%81%8E%E3%81%99%E3%82%8B%E8%89%B2%E3%81%AE%E5%89%B2%E5%90%88%E3%81%AB%E3%82%88%E3%82%8B%E8%AA%AC%E6%98%8E).

## Usage

### Features

- Blend two colors with their respective alpha values.
- Get the resulting color in HEX format.
- Handle both HEX and RGBA input formats.

### Sample Code

```ts
import { alphaBlend } from "@napolab/alpha-blend";

const blendedColor = alphaBlend("#ff5733", "rgba(255, 87, 51, 0.5)");
console.log(blendedColor); // Outputs: '#ff5733ff'
```

## Installation

To install the package, use:

```bash
npm install @napolab/alpha-blend
```

or

```bash
yarn add @napolab/alpha-blend
```

## License

This project is licensed under the MIT License.
