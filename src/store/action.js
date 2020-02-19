export default{
    // (abc) => {}
    // const {abc, tet} = ({abc: '123', tet: '23232'})
    ADD: ({commit}, payloads) => {
        commit('addProduct', payloads)
    }
}