class Dom {
    constructor() {
        this.nodes = []
    }
    getAllDomsByWideTraversal(node) {
        if(node) {
            var queue = []
            queue.unshift(node)
            while(queue.length !==0) {
                var item = queue.shift()
                this.nodes.push(item)
                for(var i = 0, children = item.children; i < children.length; i ++) {
                    queue.push(children[i])
                }
            }
        }
        return this.nodes
    }
    getAllDomsByDeepTraversal(node) {
        if(node) {
            this.nodes.push(node)
            for(var i = 0, children = node.children; i < children.length; i ++) {
                this.getAllDomsByDeepTraversal(children[i])
            }
        }
        return this.nodes
    }
    getAllDomsByForDeepTraversal() {
        if(node) {
            var stack = []
            stack.push(node)
            while(stack.length !== 0) {
                var childItem = stack.pop() 
                this.nodes.push(childItem)
                for(var i = 0, children = childItem.children; i < children.length; i ++) {
                    stack.push(children[i])
                }
            }
        }
        return this.nodes
    }
}
