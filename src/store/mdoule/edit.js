const findNode = (nodeId, node, callback) => {
  if (node.nodeId === nodeId) {
    callback && callback(node)
  } else if (node.nodes && node.nodes.length) {
    for (let index = 0; index < node.nodes.length; index++) {
      findNode(nodeId, node.nodes[index], callback)
    }
  }
}

export default {
  namespaced: true,
  state: {
    nodeId: '',
    options: {}
  },
  mutations: {
    setNodeId (state, nodeId) {
      state.nodeId = nodeId
    },
    setProps (state, data) {
      state.options = data
    }
  },
  actions: {
    setNodeId ({ rootState, commit }, nodeId) {
      findNode(nodeId, rootState.nodeTree, (node) => {
        commit('setNodeId', nodeId)
        commit('setProps', {
          ...node
        })
      })
    },
    updateData ({ rootState, commit }, data) {
      console.log(data.nodeId)
      findNode(data.nodeId, rootState.nodeTree, (node) => {
        console.log(node)
        commit('updateNode', {
          nodeId: data.nodeId,
          options: data
        }, {root: true})
      })
    }
  }
}