export function createNode(node, c) {
  if (!node.nodes) {
    return c(
      node.component,
      {
        props: node.attrs || {},
        style: node.style || {}
      }
    );
  }
  switch (node.nodes.constructor) {
    case String:
      return c(
        node.component,
        {
          props: node.attrs || {},
          style: node.style || {}
        },
        node.nodes
      );
      break;
    case undefined:
      return c(
        node.component,
        {
          props: node.attrs || {},
          style: node.style || {}
        }
      );
      break;
    case Object:
      return c(
        node.component,
        {
          props: node.attrs || {},
          style: node.style || {}
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
          props: node.attrs || {},
          style: node.style || {}
        },
        children
      );
  }
}

export function createNodes(config, c) {
  return createNode(config, c);
}
