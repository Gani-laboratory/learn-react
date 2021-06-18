const Reducer = (state, action) => {
    switch(action.type){
        case "setDark":
        return {
            ...state,
            dark:action.payload
        }
        case "setNama":
            return{
                ...state,
                name: action.payload
            }
            default:
                return{
                    ...state
                }
    }
}
export default Reducer