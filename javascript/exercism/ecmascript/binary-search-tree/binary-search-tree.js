const node = n => ({ data: n, right: null, left: null })

const insert = (bst, n, attachToParent) => {
  if(!bst) {
    return attachToParent(node(n))
  }
  if(n > bst.data) {
    return insert(bst.right, n, node => bst.right = node)
  }
  return insert(bst.left, n, node => bst.left = node)
}

const each = (bst, it) => {
  if(bst.left) each(bst.left, it)
  if(bst.data) it(bst.data)
  if(bst.right) each(bst.right, it)
}

export default (n) => {
  let tree = node(n)
  tree.insert = n => insert(tree, n)
  tree.each = it => each(tree, it)
  return tree
}
