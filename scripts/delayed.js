// eslint-disable-next-line import/no-cycle
import { sampleRUM } from "./lib-franklin.js";

// Core Web Vitals RUM collection
sampleRUM("cwv");

// add more delayed functionality here
// martech

fetch("/form-data", {
  method: "POST",
  data: JSON.stringify({
    data: {
      title: "This my title",
      adventure: "A lot of adventure",
      date: new Date(),
    },
  }),
});
