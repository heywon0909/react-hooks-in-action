export default function getData(url) {

  return fetch(url)
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw Error("There was a problem fetching data.");
      }

      return resp.json();
    });
}