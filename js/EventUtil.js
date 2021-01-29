//Event addEventListener chrome firefox IE9 event.target preventDefault stopPropagation

//Event attachEvent IE8系列的 event.srcElement returnValue cancelBubble

var EventUtil = {
  addHandler: function (element, type, handler) {
    //绑定事件
    //Chrome Firefox IE9等 addEventListener
    //IE8及IE8以下的浏览器 attachEvent
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    //移除事件
    //Chrome Firefox IE9等
    //IE8及IE8以下的浏览器
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
};

var parent = document.getElementById("parent");
EventUtil.addHandler(parent, "click", function (event) {
  alert("parent被触发了");
});

var child = document.getElementById("child");
EventUtil.addHandler(child, "click", function (event) {
  //alert(111)
  alert("child被触发了");
  var target = EventUtil.getTarget(event);
  console.log(target);
  //阻止事件冒泡
  EventUtil.stopPropagation(event);
});
var a = document.getElementById("a");
EventUtil.addHandler(a, "click", function (event) {
  EventUtil.preventDefault(event);
});
