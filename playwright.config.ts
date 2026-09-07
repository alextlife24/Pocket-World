import { defineConfig, devices } from '@playwright/test';
export default defineConfig({testDir:'./tests', fullyParallel:true, use:{baseURL:'http://127.0.0.1:4173'}, projects:[{name:'chromium-mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium',channel:'chrome'}},{name:'webkit-mobile',use:{...devices['iPhone 13'],defaultBrowserType:'webkit'}}],webServer:{command:'npm run dev -- --port 4173',url:'http://127.0.0.1:4173',reuseExistingServer:true}});

