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
