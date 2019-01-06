
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
        // await doesn't support xml
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
