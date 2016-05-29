document.addEventListener('DOMContentLoaded', function (event) {
  var content = document.getElementById('content').firstElementChild;
  var launcher = document.getElementById('launcher');
  var config = {
    defaultStyle: true
  };
  ezwindow(launcher, content, config);
});
