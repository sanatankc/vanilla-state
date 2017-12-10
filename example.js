const state = new State({
  counter: 0,
})

state.subscribe({
  counter: [document.querySelector('span'), 'innerText']
})

document.querySelector('.increment')
  .addEventListener('click', () => {
    state.set(prev => ({counter: prev.counter + 1}))
  })

document.querySelector('.decrement')
  .addEventListener('click', () => {
    state.set(prev => ({counter: prev.counter - 1}))
  })