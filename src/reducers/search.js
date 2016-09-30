export default function search(state = {result:[], slide: 0}, action = {}) {
  switch (action.type) {
    case 'REPLY_RECEIVED':
      return {...state, result: action.payload.message.product.items}
    case 'SLIDE_CHANGE':
      console.log(action.payload)
      return {...state, slide: action.payload}
    default:
      return state
  }
}
