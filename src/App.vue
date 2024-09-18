<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  const { pdfjsLib } = globalThis

  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.mjs'

  const pageCount = ref(0)
  const tmpArr: any[] = []
  const needIndex = [18, 81, 84]
  const varIndex = [87, 90, 91]
  const varIndex1 = [88, 91, 92]

  const compareObj = ['客户追踪号', '物料编码', '型号', '品牌', '总价', '数量']
  const sortObj = ['品牌', '型号', '数量', '总价', '客户追踪号', '物料编码']
  const loadPDF = async () => {
    const loadingTask = pdfjsLib.getDocument('../src/assets/PI.pdf')
    loadingTask.promise.then(async (pdf: any) => {
      pageCount.value = pdf.numPages
      for (let i = 1; i <= pageCount.value; i++) {
        const page = await pdf.getPage(i)
        const tmp = await page.getTextContent()
        const obj = tmp.items
          .filter((_: any, index: number) => {
            return (
              needIndex.includes(index) ||
              (tmp.items.length === 113 && varIndex.includes(index)) ||
              (tmp.items.length === 114 && varIndex1.includes(index))
            )
          })
          .reduce((acc: any, item: any, index: any) => {
            acc[compareObj[index]] = index === 0 ? item.str.slice(12) : item.str
            return acc
          }, {})

        const tmpObj: any = {}

        sortObj.forEach(item => {
          tmpObj[item] = obj[item]
        })

        tmpArr.push(tmpObj)
      }
      console.log(tmpArr)
    })
  }

  onMounted(() => {
    loadPDF()
  })
</script>

<template>
  <!-- <canvas id="the-canvas"></canvas> -->
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
