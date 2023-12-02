// sanity.config.ts

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import {visionTool} from '@sanity/vision';
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "sanity-nextjs-portfolio-site",
  title: 'Web Application Developer Portfolio',
  projectId: "isl6edaz",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
