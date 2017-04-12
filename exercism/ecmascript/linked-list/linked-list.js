// Copy of http://exercism.io/submissions/a06f1b8bd6a64d1fb5501b7d848de4c1 as I try to understand it

const insert = (prev, value, next) => {
  prev.next = next.prev = { prev, value, next }
}

const remove = ({prev, value, next}) => {
  [prev.next, next.prev] = [next, prev]
  return value
}

function * elements (list) {
  for (let el = list; (el = el.next) !== list; yield el);
}

function reduce (list, fn, acc) {
  for (var el of elements(list)) {
    acc = fn(acc, el)
  }
  return acc
}

function find (list, value) {
  for (var el of elements(list)) {
    if (el.value === value) {
      return el
    }
  }
}

const linkedList2 = () => {
  const list = {}
  list.prev = list.next = list

  return Object.freeze({
    push:     (value) => insert(list.prev, value, list),
    unshift:  (value) => insert(list, value, list.next),
    pop:      () => remove(list.prev),
    shift:    () => remove(list.next),
    count:    () => reduce(list, count => ++count, 0),
    delete:   (value) => {
                let element = find(list, value)
                if(element) {
                  remove(element)
                }
              }
  })
}

export default linkedList2
