# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Notes
//Types in TS
// let name: string;
// name = "Jay";
// let isStudent: boolean;
// let hobbies: string[];
// isStudent = true;
// hobbies = ["Cricket", "Basketball"];
// let role: [number, string]; //tuples
// role = [2, "Jay"];

// function printName(name: string) {
//   console.log(name);
// }
// printName("Jay Kumar");

//let printName: (name: string) => void; //we can return any return type like number, string or any thing.

// //unions type
// like we can assign any value in it weather string or number
// let age : number | string;
// // age: 14;
// age:"fourteen";

//objects
// type Person={
//   name:string;
//   age?:number; //"?" is for optional
// }

// let person: Person ={
//   name:"Jay",
// }

// let lotsOfPerson : Person[];


//any 
//we do not assign the any type as it is not the good practice so we can assign "unknown"


//void returns undefined but never doesn't returns anything



//interface v/s type
// interface Person {
//   name: string;
//   age?: number;
// }

//let's see how we can see this in the interface
// interface Guy extends Person { //we will use Person in Guy
//   profession: string;
// }

// type X = {
//   a: string;
//   b: number;
// };
// type Y = X & {
//   //we are using "X" in "Y"
//   c: string;
//   d: number;
// };

// let y: Y = { //it will say missing a and b
//   c: "adfg",
//   d: 21,
// };