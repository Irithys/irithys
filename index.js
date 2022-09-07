const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there, this is irithys 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---

Github:

[![trophy](https://github-profile-trophy.vercel.app/?username=irithys)](https://github.com/ryo-ma/github-profile-trophy)

Stats:

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=irithys&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)

[![willianrod's wakatime stats](https://github-readme-stats.vercel.app/api/wakatime?username=irithys&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)

language:

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=irithys&layout=compact&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)

count:

![irithys](https://count.getloli.com/get/@irithys?theme=gelbooru)
`

console.log(readme)