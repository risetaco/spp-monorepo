import type { defaultLang, ui } from "./ui";

type LangType = keyof (typeof ui)[typeof defaultLang];

export type { LangType };
