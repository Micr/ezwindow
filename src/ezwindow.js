function ezwindow (launcher, content, config) {

  config = config || {};

  var presenter = new Presenter(launcher);
  presenter.init();

  function Presenter(launcher) {

  this.initialized = false;
  var windowElement;

    function showElement () {
      if (config.hideClass) {
        windowElement.classList.remove(config.hideClass)
      } else {
        windowElement.style.display = 'block';
      }
    }

    function hideElement () {
      if (config.hideClass) {
        windowElement.classList.add(config.hideClass)
      } else {
        windowElement.style.display = 'none';
      }
    }

    function windowOn () {
      document.addEventListener('click', windowClickClose);
      document.addEventListener('keydown', windowEscClose);
    }

    function windowOff () {
      document.removeEventListener('click', windowClickClose);
      document.removeEventListener('keydown', windowEscClose);
    }

    function windowClickClose (event) {
      if (!windowElement.contains(event.target)) {
        hideWindow();
      }
    }

    function windowEscClose () {
      if (event.keyCode === 27) {
        hideWindow();
      }
    }

    function showWindow () {
      windowOn();
      showElement();
    }

    function hideWindow () {
      windowOff();
      hideElement();
    }

    this.init = function () {
      if (this.initialized) {
        return;
      }
      this.initialized = true;
      launcher.addEventListener('click', function () {
        event.stopPropagation();
        showWindow();
      });
      windowElement = document.createElement('div');
      var closeElement = document.createElement('div');
      closeElement.className = 'ezwindow_close';
      closeElement.addEventListener('click', hideWindow);
      hideElement();
      windowElement.className = config.className || 'ezwindow';
      windowElement.appendChild(content);
      windowElement.appendChild(closeElement);
      if (config.defaultStyle) {
        windowElement.style.border = '1px solid gray';
        windowElement.style.padding = '10px';
        windowElement.style.backgroundColor = '#ffffff';
        windowElement.style.position = 'absolute';
        windowElement.style.top = '50%';
        windowElement.style.left = '50%';
        windowElement.style.transform = 'translate(-50%, -50%)';
        closeElement.style.backgroundColor = 'green';
        closeElement.style.display = 'green';
        closeElement.style.backgroundColor = 'green';
        closeElement.textContent = '\u2715';
        closeElement.style.position = 'absolute';
        closeElement.style.cursor = 'pointer';
        closeElement.style.top = '0';
        closeElement.style.right = '0';
      }
      document.body.appendChild(windowElement);
    };

  }
}
