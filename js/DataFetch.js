
  class DataFetch {

  async get(url, type) {
    const res = await fetch(url);
    let data = '';

    switch(type) {
      case 'json': {
        const rawData = await res.json();
        data = JSON.stringify(rawData);
        break;
      }
  
      case 'xml': {
        data = await res.text();
        break;
      }
  
      default: {
        return;
      }
    }
    // const detailsInput = document.querySelector('.request-details');
    // detailsInput.value = `${res.status} ${res.url}`;

    return data;
  };

  // showFetchDetails() {
  //   const detailsInput = document.querySelector('.request-details');
  //   detailsInput.value = res;
  // };

}
