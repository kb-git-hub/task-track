const q = (query) => document.querySelector(query)
const qA = (query) => [...document.querySelectorAll(query)]
const create = (query) => document.createElement(query)

export { q, qA, create }

