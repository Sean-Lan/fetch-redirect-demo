const demoDiv = document.getElementById('demo');

fetch('bait')
  .then(response => response.json())
  .then(data => {
    demoDiv.innerHTML = data.data;
  });
