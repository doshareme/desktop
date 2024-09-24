import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://c9139ca47d90fea630a592e53396f88a@o4508002683060224.ingest.de.sentry.io/4508007381270608",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
