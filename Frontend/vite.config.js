export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://jobsthatclick.onrender.com/',
        changeOrigin: true,
        // Do not use 
      },
    },
  },
});
