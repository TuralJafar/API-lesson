let name=URLSearchParams(location.search).get("name");
let API_URL_DETAIL=`https://rickandmortyapi.com/api/character${name}`;


fetch(API_URL_DETAIL)
.then