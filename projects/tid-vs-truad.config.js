module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1280, height: 720 })

    await page.goto('https://tid-vs-truad.vercel.app')
    await capture(page, 'home')
  },
})
