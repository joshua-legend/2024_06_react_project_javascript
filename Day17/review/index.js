import { trainers } from "./trainer.js";

const container = document.createElement('section')
container.style.display = 'grid'
container.style.gridTemplateColumns = 'repeat(2,1fr)'
container.style.gap = "10px"

trainers.forEach((x)=>{
    const tag = `
        <div class="trainer">
            <div class="imageBox">
                <img src="${x.profileImage}" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <span class="name">${x.name}</span>
                    <span class="position">${x.position}</span>
                    <span class="location">${x.gymName}</span>
                </div>
                <div class="address">
                    <span>${x.gymAddress}</span>
                </div>
                <div class="type"></div>
            </div>
        </div>
    `
    container.insertAdjacentHTML('beforeend',tag)
})

document.body.appendChild(container)