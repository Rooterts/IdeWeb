window.onload = function () {
  let pads = document.getElementsByClassName("text");
  let changebutt = document.getElementsByClassName("change");
  const showButton = document.getElementsByClassName("show")[0];

  let frame = document.getElementById("frame");
  // frame =
  // frame.contentDocument || frame.contentWindow.document || frame.contentDocument;
  // let body = frame.body;
  // let htmlstart = [];
  // for (let elem in htmlstart) {
  // pads[0].value = pads[0].value + htmlstart[elem] + "\n";
  // body.innerHTML = body.innerHTML + htmlstart[elem];
  //}
  let m;
  function refresh() {
    let container = document.getElementById("container");
    let m = document.getElementById("f");
    if (m !== null) {
      container.removeChild(m);
    }
  }
  function changepads(number) {
    for (let i = 0; i < 3; i++) {
      if (i == number) {
        if (pads[i].classList.contains("hide")) {
          pads[i].classList.remove("hide");
        }
        if (!pads[i].classList.contains("show")) {
          pads[i].classList.add("show");
        }
        if (!changebutt[i].classList.contains("active")) {
          changebutt[i].classList.add("active");
        }
        pads[i].focus();
        continue;
      }
      if (!pads[i].classList.contains("hide")) {
        pads[i].classList.add("hide");
      }
      if (pads[i].classList.contains("show")) {
        pads[i].classList.remove("show");
      }
      if (changebutt[i].classList.contains("active")) {
        changebutt[i].classList.remove("active");
      }
    }
  }

  showButton.addEventListener("click", function changecontent(number) {
    // frame.open();
    // 0 = html | 1 = css | 2 = js
    // frame.close();
    // frame.write(
    //  `<style>${pads[1].value}</style>${pads[0].value}<body><script>\n ${pads[2].value} \n</script></body>`
    // );
    let iframe = document.createElement("iframe");
    iframe.id = 'f';
    iframe.src = "data:text/html;charset=utf-8,";

    container.appendChild(iframe);
  });
  for (let i = 0; i < changebutt.length; i++) {
    changebutt[i].addEventListener("click", function () {
      changepads(i);
    });
  }
};
