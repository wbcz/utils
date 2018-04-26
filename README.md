# utils
一些工具方法
# 压缩图片
```
构建一个可读流 =>
new FileReader() => 
new FileReader().readAsDataURL(file) (生成base64) => 
reader.onload(e) {   
  //显示到页面上
  new Image().src = e.target.result
} =>
img.onload = () => {
  //获取原图的宽高放大缩小
  //压缩图片
  context.drawImage(img, 0, 0, targetWidth, targetHeight);
  // canvas转为blob并上传
  canvas.toBlob(function (blob) {
      // 图片ajax上传
      var xhr = new XMLHttpRequest();
      // 文件上传成功
      xhr.onreadystatechange = function() {
          if (xhr.status == 200) {
              // xhr.responseText就是返回的数据
          }
      };
      // 开始上传
      xhr.open("POST", 'upload.php', true);
      xhr.send(blob);    
  }, file.type || 'image/png');
}

```
