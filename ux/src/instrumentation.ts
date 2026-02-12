export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const appInsights = await import("applicationinsights");
    if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
      appInsights.default
        .setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
        .setAutoCollectRequests(true)
        .setAutoCollectPerformance(true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .setAutoCollectConsole(true)
        .start();
    }
  }
}
