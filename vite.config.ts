import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const isDemo = mode === 'demo'

  return {
    plugins: [react()],

    server: {
      host: true, // 네트워크에서 접근 가능
      port: 5300, // 포트 명시
      proxy: {
        '/api': {
          // npm i --save-dev @types/node 설치로 process 에러 해결
          target: process.env.VITE_API_URL || 'http://localhost:8000',
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => {
          //   console.log(`Proxying: ${path}`); // 디버깅용
          //   return path;
          // }
        },
      },
    },

    // 모드별 환경 변수 정의
    define: {
      __DEV__: isDev,
      __DEMO__: isDemo,
    },

    // demo 모드일 때 특별한 설정
    ...(isDemo && {
      base: '/', // 또는 '/demo/' (서브 경로에 배포할 경우)
    }),

    // 빌드 최적화
    build: {
      // demo 모드일 때는 별도 디렉토리에 빌드
      outDir: isDemo ? 'dist-demo' : 'dist',
      sourcemap: isDev,
      minify: !isDev,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },

    // 개발 환경 최적화
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },

    // 미리보기 서버 설정
    preview: {
      port: isDemo ? 4174 : 4173, // demo는 다른 포트 사용
      host: true,
    }
  }
})
