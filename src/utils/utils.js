export function createNode(node, c) {
  switch (node.nodes.constructor) {
    case String:
      return c(node.component, node.nodes);
      break;
    case Object:
      return c(node.component, [
        createNode(node.nodes, c)
      ]);
      break;
    case Array:
      let children = [];
      for (let i = 0; i < node.nodes.length; i++) {
        children.push(createNode(node.nodes[i], c));
      }
      return c(node.component, children);
  }
}

export function createNodes(config, c) {
  return createNode(config, c);
}
