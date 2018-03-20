let name, id, url, chooses, notChooses;
const notChooseButton = $('.notChoose');
const chooseButton = $('.choose');
const anotherButton = $('.another');

fetch('/showPokemon')
  .then(response => response.json())
  .then(res => {
    name = res.name;
    id = res.id;
    url = res.imageUrl;
    chooses = res.chooses;
    notChooses = res.notChooses;
  }).then(() => {
    $(document).ready(() => {  
      $('.name').text(name);
      $('.picture').css('background-image', `url(${url}`);
      $('.notChoose').attr('id', id);
      $('.choose').attr('id', id);
      $('.total.notChoose').text(`Total: ${notChooses}`);
      $('.total.choose').text(`Total: ${chooses}`);
    });
  });

notChooseButton.click((e) => {
  const id = e.target.id;
  post('/notChoose', { id })
  .then(() => {
    notChooses++;
    $('.total.notChoose').text(`Total: ${notChooses}`);
  });
});

chooseButton.click((e) => {
  const id = e.target.id;
  post('/choose', { id })
  .then(() => {
    chooses++;
    $('.total.choose').text(`Total: ${chooses}`);
  });
});

anotherButton.click(() => {
  location.href = '/';
})

function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}