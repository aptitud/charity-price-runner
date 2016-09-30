export const searchTextUpdated = text => {
  return dispatch => {
    const url = 'http://www.prisjakt.nu/ajax/server.php?class=Search_Supersearch&method=search&skip_login=1&modes=product,book,raw&limit=12&q=' + text
    const options = {
      'method':'GET',
      'Content-Type': 'application/json; charset=utf-8',
      'headers': {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
      }
    }
    return fetch(url, options)
    .then(response => response.json())
    .then(json => dispatch({type:'REPLY_RECEIVED', payload:json}))
    .catch(error => console.log("Kunde inte hämta sökresultat", error))
  }
}
