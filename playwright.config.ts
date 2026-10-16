import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests/Testsclass',

    fullyParallel: true,
    workers: process.env.CI ? 4 : undefined,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }]
    ],

    retries: process.env.CI ? 1 : 0,

    use: {
        trace: 'on-first-retry'
    }
});
