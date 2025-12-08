// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define your collection(s)
export const jobs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/jobs"}),
    schema: z.object({
        company: z.string(),
        from: z.string().regex(/[0-9]{4}-(0[1-9]|1[0-2])/),
        to: z.string().regex(/[0-9]{4}-(0[1-9]|1[0-2])/).nullish().transform((s) => s ?? 'Current!'),
        role: z.string(),
        where: z.string(),
        languages: z.string().array(),
        platforms: z.string().array(),
        dbms: z.string().array(),
        frameworks_and_libraries: z.string().array(),
        other_technologies: z.string().array()
    })
});

export const collections = { jobs };