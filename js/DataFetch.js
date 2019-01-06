
  class DataFetch {

  async get(url, type) {
    const res = await fetch(url);
    let data = '';
    const dataContainer = document.querySelector('.data-outcome');

    switch(type) {
      case 'json': {
        const rawData = await res.json();
        data = JSON.stringify(rawData,  null, "\t");
        break;
      }
  
      case 'xml': {
        // fetch doesn't fully support xml - place for future improvement
        data = await res.text();
        break;
      }
  
      default: {
        return;
      }
    }

    return data;
  }
}
