import { createRequire } from "https://deno.land/std/node/module.ts";
const require = createRequire(import.meta.url);
import mongoose from 'npm:mongoose';

mongoose.connect('mongodb://localhost:27017/node-api')
  .then(() => console.log('Connected!'));