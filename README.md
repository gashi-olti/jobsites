## Getting Started

First, install the modules: 

```bash
npm install
# or
npm install --force
```

Then build the project and run the development server:

```bash
npm run build && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the project

I used the following technologies to accomplish the task: Next.js, TypeScript, Material UI, twin.macro (Tailwind) & react-hook-form.

Since time was limited, I decided to use built-in data to speed up the development.

## Questions

```bash
1) How might you make this app more secure?
2) How would you make this solution scale to millions of records?
```

### First Question

Encrypting the data (using HTTPS) and at REST to protect against data breaches.
Validating and sanitizing data received from external sources (API) to prevent security vulnerabilities. 

### Second Question

Indexing, caching, partitioning
