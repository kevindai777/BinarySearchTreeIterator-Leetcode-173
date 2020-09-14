//Java Solution (controlled recursion)

class BSTIterator {

    Stack<TreeNode> stack;
    
    public BSTIterator(TreeNode root) {
        this.stack = new Stack<TreeNode>();
        this.leftmostInorder(root);
    }
    
    private void leftmostInorder(TreeNode root) {
        while (root != null) {
            this.stack.push(root);
            root = root.left;
        }
    }
    
    /** @return the next smallest number */
    public int next() {
        TreeNode top = this.stack.pop();
        
        if (top.right != null) {
            this.leftmostInorder(top.right);
        }
        
        return top.val;
    }
    
    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return this.stack.size() > 0;
    }
}