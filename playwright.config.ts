import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests/Testsclass',

    fullyParallel: true,
    workers: process.env.CI ? 2 : undefined,
    retries: process.env.CI ? 1 : 0,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: process.env.PW_REPORT_DIR || 'playwright-report',
            open: 'never'
        }]
    ],

    outputDir: process.env.PW_SCREENSHOT_DIR || 'Screenshots',

    use: {
        screenshot: 'only-on-failure',
        trace: 'off',
        video: 'off'
    }
});
