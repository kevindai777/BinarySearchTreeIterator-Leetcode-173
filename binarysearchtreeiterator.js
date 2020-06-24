//Objective is to design a class that has three two methods: 'next' and 'hasNext'
//Next will return the next value of the binary search tree
//hasNext will return whether there is a next value in the binary search tree

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)


//Design of a BSTIterator using inorder traversal to get all the values
//into an array. We keep track of where we are in the tree using an index.

class BSTIterator {
    constructor(root) {
        this.arr = []
        this.index = 0
        const dfs = (root) => {
            if (!root) {
                return
            }

            dfs(root.left)
            this.arr.push(root.val)
            dfs(root.right)
        }
        dfs(root)
    }

    next() {
        return this.arr[this.index++]
    }

    hasNext() {
        return this.index < this.arr.length 
    }
}

let iterator = new BSTIterator(tree.root)
iterator.next()
iterator.hasNext()
iterator.next()
iterator.hasNext()