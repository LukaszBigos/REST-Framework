(() => { const http = new DataFetch();

const dataContainer = document.querySelector('.data-outcome');
const requestInfo = document.querySelector('.request-details');
const type = document.querySelector('#format-selection');

const getData = (e) => {
  
  http.get(`response.${e.target.value}`, e.target.value)
  
  .then(data => {
    dataContainer.innerHTML = `<pre><code class="language-${e.target.value}">${data}</code></pre>`;
    requestInfo.value = `content of response.${e.target.value}:`;
  })
  .catch(err => console.log(err));
};

type.addEventListener('change', getData);
})();
