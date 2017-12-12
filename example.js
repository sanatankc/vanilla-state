const state = new State({
  counter: 0,
})

state.subscribe({
<<<<<<< HEAD
  counter: [document.querySelector('span'), 'innerHTML']
=======
  counter: ['span', 'innerText']
>>>>>>> bf2217b480fa43d2b0336beed4d957699b8331eb
})

document.querySelector('.increment')
  .addEventListener('click', () => {
    state.set(prev => ({counter: prev.counter + 1}))
  })

document.querySelector('.decrement')
  .addEventListener('click', () => {
    state.set(prev => ({counter: prev.counter - 1}))
  })