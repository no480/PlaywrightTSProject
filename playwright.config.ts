import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Use one worker on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter */
  reporter: 'html',

  /* Shared settings */
  use: {
    /*
     * Local machine:
     *   headless = false → browser is visible
     *
     * GitHub Actions:
     *   headless = true → no GUI required
     */
    headless: !!process.env.CI,

    /* Slow down execution locally */
    launchOptions: {
      slowMo: 500,
    },

    /* Collect trace when retrying failed tests */
    trace: 'on-first-retry',

    /* Uncomment if you want a base URL */
    // baseURL: 'https://www.saucedemo.com',
  },

  /* Browser Projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});
