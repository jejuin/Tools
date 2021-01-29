/**
 * 文件下载 By Blob
 * @param {*} fileName
 * @param {*} blob
 */
export function downloadFileByBlob(fileName, blob) {
  downloadFile(fileName, window.URL.createObjectURL(blob));
}

/**
 * 文件下载 By url
 * @param {*} fileName
 * @param {*} url 文件下载路径
 */
export function downloadFileByUrl(fileName, url) {
  downloadFile(fileName, url);
}

function downloadFile(href) {
  const a = document.createElement("a");
  a.download = fileName;
  a.href = href;
  a.style.visibility = "hidden";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * 图片预加载
 * @param {*} src
 * @param {*} callback
 */
export function loadImg(src, callback) {
  const image = document.createElement("img"); // new Image()
  image.src = src;
  image.load = function (e) {
    callback && typeof callback === "function" && callback();
  };
}

/**
 * 动态加载 Js
 * @param {*} src
 * @param {*} callback
 */
export function loadJs(src, callback) {
  const js = document.createElement("script");
  js.src = src;
  js.load = function (e) {
    callback && typeof callback === "function" && callback();
  };
  document.head.appendChild(js);
}

/**
 * 动态加载 Css
 * @param {*} href
 * @param {*} callback
 */
export function loadCss(href, callback) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  link.load = function (e) {
    callback && typeof callback === "function" && callback();
  };
  document.head.appendChild(link);
}
