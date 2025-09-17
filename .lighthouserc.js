module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: ["http://localhost:3000"],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", {"minScore": 0.85}],
        "categories:accessibility": ["error", {"minScore": 0.90}],
        "categories:best-practices": ["warn", {"minScore": 0.90}],
        "categories:seo": ["error", {"minScore": 0.90}],
        "first-contentful-paint": ["warn", {"maxNumericValue": 3000}],
        "largest-contentful-paint": ["warn", {"maxNumericValue": 4000}],
        "cumulative-layout-shift": ["error", {"maxNumericValue": 0.1}],
        "speed-index": ["warn", {"maxNumericValue": 4000}]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}