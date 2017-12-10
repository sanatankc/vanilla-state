const state = new Store()

state.insert({
  counter: 0,
})

state.subscribe({
  counter: [document.querySelector('span'), 'innerText']
})

document.querySelector('.increment')
  .addEventListener('click', () => {
    state.insert(prev => ({counter: prev.counter + 1}))
  })

document.querySelector('.decrement')
  .addEventListener('click', () => {
    state.insert(prev => ({counter: prev.counter - 1}))
  })