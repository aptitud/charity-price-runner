export default function search(state = {result:[]}, action = {}) {
  switch (action.type) {
    case 'REPLY_RECEIVED':
      return {...state, result: action.payload.message.product.items}
    default:
      return state
  }
}
