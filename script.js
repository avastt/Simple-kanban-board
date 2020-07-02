const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach((card) => {

    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)

})

function dragstart() {
    //console.log('> CARD: Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
    //this.style.opacity = '0.4';
    this.classList.add('is-dragging')

}

function drag() {
   // console.log('> CARD: Is dragging')

}

function dragend() {
    //console.log('> CARD: Stop dragging')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    //this.style.opacity = '1';
    this.classList.remove('is-dragging')

}



/* zone where we drop cards */
dropzones.forEach((dropzone) => {

    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    //console.log('> DROPZONE: Enter zone')

}

function dragover(){
    //console.log('> DROPZONE: Over')
    this.classList.add('over')

    //get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}

function dragleave(){
    //console.log('> DROPZONE: Leave')
    this.classList.remove('over')

}

function drop(){
    //console.log('> DROPZONE: Dropped')
    this.classList.remove('over')
}

