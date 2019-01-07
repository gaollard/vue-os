export function createNode(node, c) {
  if (!node.nodes) {
    return c(
      node.component,
      {
        props: node.props || {},
        style: node.style || {},
        attrs: {
          'data-node-id': node.nodeId
        },
        on: {
          edit () {
            console.log(node)
          }
        }
      }
    );
  }
  switch (node.nodes.constructor) {
    case String:
      return c(
        node.component,
        {
          props: node.props || {},
          style: node.style || {},
          attrs: {
            'data-node-id': node.nodeId
          }
        },
        node.nodes
      );
      break;
    case undefined:
      return c(
        node.component,
        {
          props: node.props || {},
          style: node.style || {},
          attrs: {
            'data-node-id': node.nodeId
          }
        }
      );
      break;
    case Object:
      return c(
        node.component,
        {
          props: node.props || {},
          style: node.style || {},
          attrs: {
            'data-node-id': node.nodeId
          }
        }, 
        [
          createNode(node.nodes, c)
        ]
      );
      break;
    case Array:
      let children = [];
      for (let i = 0; i < node.nodes.length; i++) {
        children.push(createNode(node.nodes[i], c));
      }
      return c(
        node.component,
        {
          props: node.props || {},
          style: node.style || {},
          attrs: {
            'data-node-id': node.nodeId
          }
        },
        children
      );
  }
}

export function createNodes(config, c) {
  return createNode(config, c);
}
