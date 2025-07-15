# @sosdocs/eslint-config

Configurações ESLint compartilhadas da **Sosdocs**, baseadas no novo formato [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

Este pacote fornece configurações para:

- 🟫 **Node.js** com suporte a TypeScript e Prettier
- ⚛️ **Next.js / React** com JSX, React Hooks, A11Y e Prettier (Tailwind-friendly)

---

## 📦 Instalação

O projeto deve ter **ESLint e @eslint/js instalados**.  
Este pacote cuidará do restante dos plugins internamente.

```bash
pnpm add -D eslint @eslint/js @sosdocs/eslint-config
```

## 🛠️ Como usar

Crie o arquivo eslint.config.js na raiz do seu projeto.

▶️ Para projetos Node.js
```js
import sosdocsConfig from '@sosdocs/eslint-config/node'
import { defineConfig } from 'eslint-define-config'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		extends: [sosdocsConfig],
	},
]);
```

▶️ Para projetos Next.js / React
```js
import sosdocsConfig from '@sosdocs/eslint-config/next'
import { defineConfig } from 'eslint-define-config'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		extends: [sosdocsConfig],
	},
]);
```

## 📜 Licença

MIT © Maycow Douglas Marques de Melo