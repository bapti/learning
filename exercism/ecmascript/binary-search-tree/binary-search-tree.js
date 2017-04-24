
const node = (n) => {
  return { data: n, right: null, left: null }
}

const insert = (branch, n) => {
  console.log(branch);

  if(n > branch.data) {
    if(branch.right) return insert(branch.right, n)
    branch.right = node(n)
    return
  }

  if(branch.left) return insert(branch.left, n)
  branch.left = node(n)
  return
}

export default (n) => {
  let tree = node(n)
  tree.insert = insert.bind(null, tree)
  return tree
}
