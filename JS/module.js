  // 自定义字符串,用于拼接标签
  var loveStr = "";

  //自定义数组
  var loveArr = [
      { name: './content/Books/outline.html', textArr: '场景一' },
      { name: './content/Books/outline.html', textArr: '场景一' } ,
  ];

  /**
   * forEach+map循环
   * forEach和map的第一个参数是当前元素，第二个是数组下标
   * .join('')的作用是去掉map循环后返回多余的逗号
   */
  loveArr.forEach(e => {
      loveStr += `<div class="row">
                      <a href=<%=e.textArr %>>
                      <div class="text">
                          ${e.name.map((element, index) => {
                              return `<span>${index + 1}.${element}</span>`
                          }).join('')}
                      </div> </a>
                  </div>`
  })
  console.log(loveStr)

  // 拼接完字符串数组后用innerHTML把它渲染到页面中
  document.getElementById("LoveID").innerHTML = loveStr;
