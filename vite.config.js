import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/js/site.js',
                'resources/js/cp.js',
            ],
            refresh: ['resources/views/**', 'routes/**'],
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: [
                '**/content/**',
                '**/users/**',
                '**/resources/fieldsets/**',
                '**/public/assets/**/.meta/**',
                '**/storage/**',
                '**/bootstrap/cache/**',
            ],
        },
    },
});
