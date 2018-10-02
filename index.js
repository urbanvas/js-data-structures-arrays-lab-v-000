// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name) {
  drivers.push(name)
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  const newDrivers = [...drivers, name]
  return newDrivers
}

function prependDriver(name) {
  const newDrivers = [name, ...drivers]
  return newDrivers
}

function removeLastDriver(name) {
  drivers.slice(-1)
  return drivers
}
