import routesJson from '@/assets/routes.json';

export const state = () => ({
  items: [], //list of nodes (questions)
  inputs:[], //list of inputs (fields the user needs to fill)
  solutions:[], //list of solutions (documents that can be generated for the user)
  current: null, //current node (question) active
  availableItems: [], //available nodes (questions) for the current node
  availableInputs: [], //available nodes (inputs) for the current node
  availableSolutions: [] //available nodes (solutions) for the current node
});

export const mutations = {
  afterSyncRoute(state, {
    items,
    current,
    inputs,
    solutions
  }) {
    state.inputs = inputs;
    state.solutions = solutions;
    state.items = items;
    state.current = current;
  },
  afterSyncAvailableQuestions(state, {questionNodes, inputNodes, solutionNodes}) {
    state.availableItems = questionNodes;
    state.availableInputs = inputNodes;
    state.availableSolutions = solutionNodes;
  }
};

function includes(arr, v) {
  return arr.map(vv => vv.toString()).includes(v.toString());
}

function equal(v1, v2) {
  return v1.toString() == v2.toString();
}

export const actions = {
  async syncAvailableQuestions({
    commit,
    state
  }) {
    let questionNodes = state.items.filter(i => state.current && state.current.relationships && state.current.relationships.parent_of &&  includes(state.current.relationships.parent_of, i.code));
    let inputNodes = state.inputs.filter(i => state.current && state.current.relationships && state.current.relationships.require_input &&  includes(state.current.relationships.require_input, i.code));
    let solutionNodes = state.solutions.filter(i => state.current && state.current.relationships && state.current.relationships.has_solution &&  includes(state.current.relationships.has_solution, i.code));
    commit('afterSyncAvailableQuestions', {
      questionNodes,
      inputNodes,
      solutionNodes
    });
  },
  async syncRoute({
    state,
    commit,
    dispatch
  }, code) {
    let localList = routesJson.nodes;
    let res = localList.filter(item => equal(item.code, code));
    if (res.length === 0) throw new Error('Route not found ' + code)
    commit('afterSyncRoute', {
      solutions: routesJson.solutions,
      inputs: routesJson.inputs,
      items: localList,
      current: res[0]
    });
    await dispatch('syncAvailableQuestions');
  }
};