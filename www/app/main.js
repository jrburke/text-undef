define(function (require) {
  function reload(newId) {
    requirejs.undef('text!app/message.html');
    requirejs.config({
      paths: {
        'app/message' : '../app/' + newId
      }
    });
    requirejs(['text!app/message.html'], function(htmlString) {
      document.getElementById('output').innerHTML = htmlString;
    });
  }

  document.body.addEventListener('click', function(evt) {
    var newId = evt.target.dataset.id;
    if (newId) {
      reload(newId);
    }
  });

  reload('one');
});
