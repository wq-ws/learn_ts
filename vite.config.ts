import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'

const pathResolve = (dir:string):string => {
  return resolve(__dirname, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    Components({  
      dts: true, // ts 环境下要启用 
      resolvers: [NaiveUiResolver()],
      dirs: ['src/components'] 
    }) 
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  }
})
