# scrollToView
Manage elements scroll from page bottom to user's view(top of the manage)
## Usage
This is a plugin based on Jquery library. So be sure to have jquery present in your page
To use scrollToView plugin, you need to
+ download the jquery.scrollToView.js file to your website directory and call it in your page head
**<script type="text/javascript" src="jquery.clickToView.min.js"></script>**
+ Call the function scrollToView() to the targeted element that is the element you want to scroll to viewLevel

### Options
The options is the parameters you should pass to the scrollToview() function. Options is a JS object with 3 properties thar are the parameters.
### parameters
There are 3 parameters to pass to the scrollToView() function:
+ **target**:The DOM element ID selector to click /hover to make the scroll happen:
**target:"#Example"**
+ **speed**: the easing of the scroll. Should an integer:
**speed:1000**
+ **viewLevel**:that is the margin before the top of the page. Let say the level you want the scroll to stop. This should be an integer:
**viewLevel:100**

## Example
``` javascript
$(function(){
  $('#element-to-click').scrollToView({"target":"#element-to-bring-toview", "speed":1000, "viewlevel":100});
```
## Demo
See afull demo on the plugin page
