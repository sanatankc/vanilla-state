const ObjectValues = object => Object.keys(object)
  .map(key => object[key])

function Store() {
  this.state = {}
  const subscribeList = {}

  const render = () => {
    for (stateToChange in subscribeList) {
      for (subscribers of subscribeList[stateToChange]) {
        const elem = subscribers[0]
        const propertyToChange = subscribers[1]
        console.log(elem[propertyToChange])
        elem[propertyToChange] = this.state[stateToChange]
      }
    }
  }

  this.insert = function(arg) {
    const stateToUpdate = (typeof arg === 'function')
      ? arg(this.state)
      : arg
    Object.assign(this.state, stateToUpdate)
    render()
  }

  this.subscribe = function(obj) {
    for (let key in obj) {
      if (key in subscribeList) {
        if (Array.isArray(obj[key])) {
          if (Array.isArray(obj[key][0])) {
            subscribeList[key].map(arr => {
              subscribeList[key].push(arr)
            })
          } else {
            subscribeList[key].push(obj[key])
          }
        }
      } else {
        if (Array.isArray(obj[key])) {
          if (Array.isArray(obj[key][0])) {
            subscribeList[key] = obj[key]
          } else {
            subscribeList[key] = [obj[key]]
          }
        }
      }
    }
    console.log(subscribeList)
  }
}
