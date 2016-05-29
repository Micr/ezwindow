EZwindow
===
A tiny library to easily display a popup window with custom content. It has a close button and also gets closed after click on a page outside of the window and on 'escape' button press. Event handlers are attached only when the window is visible so you are saving some resources when its hidden.

# Usage
`ezwindow(launcher, content, config);`

where *launcher* is the element you want to launch the window after being clicked. *content* is the content you want to put into the window.
*config* is an object with options.
options are
* hideClass - a css class you want to use to hide the window(should have display: none property in your style sheet)
* className - a class you want the window to have instead of default *ezwindow*
* defaultStyle - use the preconfigured default style (centered with a border and padding)
instead of specifying your own style
