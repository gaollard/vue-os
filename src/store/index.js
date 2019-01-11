import Vue from 'vue'
import Vuex from 'vuex'
import editStore from './mdoule/edit'

Vue.use(Vuex)

const findNode = (nodeId, node, callback) => {
  if (node.nodeId === nodeId) {
    callback && callback(node)
  } else if (node.nodes && node.nodes.length) {
    for (let index = 0; index < node.nodes.length; index++) {
      findNode(nodeId, node.nodes[index], callback)
    }
  }
}

const createUnique = (node, parentId = 0) => {
  node.nodeId = `${parentId}`
  if (node.nodes) {
    node.nodes.forEach((node, index) => {
      createUnique(node, `${parentId}_${index}`)
    })
  }
}

export default new Vuex.Store({
  state: {
    editName: '',
    editNode: null,
    editData: {
      props: {},
      style: ''
    },
    nodeTree: {
      component: 'Block',
      props: {},
      style: '',
      nodeId: 1,
      nodes: [
        {
          component: 'ImageView',
          nodeId: '1_1',
          style: '',
          props: {
            src: 'http://mall.airtlab.com/static/img/b1.524e4cf.jpg'
          }
        },
        {
          component: 'Navigator',
          nodeId: '1_3',
          props: {
            url: 'https://www.baidu.com'
          },
          style: ''
        },
        {
          component: 'Block',
          nodeId: '1_3',
          props: {},
          style: '',
          nodes: [
          ]
        }    
      ]
    }
  },
  mutations: {
    usePrams (state, { props, styles }) {
      state.editData.props = { ...props }
      state.editData.styles = { ...styles }
    },
    editName (state, editName) {
      state.editName = editName
    },
    setCurEditNode (state, node) {
      state.editNode = node
    },
    updateNodeTree (state, nodeTree) {
      createUnique(nodeTree)
      state.nodeTree = nodeTree
    },
    updateNode (state, { nodeId, options }) {
      console.log(options)
      findNode(nodeId, state.nodeTree, (node) => {
        node = options
      })
      createUnique(state.nodeTree)
      state.nodeTree = state.nodeTree
    }
  },
  actions: {
    addModule ({ commit, state }, { name, props, styles }) {
      state.nodeTree.nodes.push({
        component: name,
        props: props,
        style: styles
      })
      commit('updateNodeTree', state.nodeTree)
    },
    usePrams ({ commit }, { props, styles, component }) {
      commit('usePrams', {
        styles,
        props,
        component
      })
      commit('editName', component)
    },
    editNode ({ state, dispatch, commit }, nodeId) {
      findNode(nodeId, state.nodeTree, (node) => {
        console.log(node)
        commit('setCurEditNode', node);
        dispatch('usePrams', {
          ...node
        })
      })
    },
    handleAdd ({ state }, { name, attrs, styles }) {
      state.nodeTree.nodes.push({
        component: name,
        attrs: {
          ...attrs
        },
        style: {
          ...styles
        }
      })
    }
  },
  modules: {
    edit: editStore
  }
})