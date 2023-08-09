export function setseHead(titleName: string) {
  useHead({
    title: titleName,//网站标题
    titleTemplate: '%s - Nuxt 3 Awesome Starter',
    link: [//网站link，可以在这里引入css和icon等
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
  })
}
// export const getAssetURL = (image: string) => {
//   return new URL(`../assets/image/cloud-production/${image}`, import.meta.url).href
// }
export function getAssetURL(url: string, image: string|number) {
  return new URL(`../assets/image/${url}/${image}`, import.meta.url).href
}