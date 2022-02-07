class Hero {
  powerCount = 10
  constructor(name) {
    this.name = name
  }

  train() {
    this.powerCount++
  }
}

const heroes = []

const hulk = new Hero('hulk')
const gerald = new Hero('gerald')
const spiderman = new Hero('spiderman')

heroes.push(hulk)
heroes.push(gerald)
heroes.push(spiderman)

const print_hall_of_fame = () => {
  const heroesContainer = document.querySelector(".hero")
  const spanHeroCount = document.querySelector(".heroCount")
  spanHeroCount.innerHTML = heroes.length
  
  heroes.map((hero) => {
    const heroElement = document.createElement("div")
    const btnTrainHero = document.createElement("button")
    btnTrainHero.setAttribute("id", hero.name)
    btnTrainHero.innerText=`Train ${hero.name}`
    btnTrainHero.addEventListener('click', (e) => {
      let id = e.target.id
      const el = heroes.find(e => e.name === id)
      el.train()
      
      heroElement.innerHTML = `<p>${hero.name} - ${hero.powerCount}</p>`
    })
    heroElement.innerHTML = `<p>${hero.name} - ${hero.powerCount}</p>`
    heroesContainer.append(heroElement)
    heroesContainer.append(btnTrainHero)
  })

}

print_hall_of_fame()