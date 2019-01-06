
  class DataFetch {

  async get(url, type) {
    const res = await fetch(url);
    let data = '';

    switch(type) {
      case 'json': {
        const rawData = await res.json();
        data = JSON.stringify(rawData,  null, "\t");
        break;
      }
  
      case 'xml': {
        data = await res.text(); // await doesn't support xml
        break;
      }
  
      default: {
        return;
      }
    }

    return data;
  }
}
