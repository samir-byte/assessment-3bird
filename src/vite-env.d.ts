/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_BASE_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
