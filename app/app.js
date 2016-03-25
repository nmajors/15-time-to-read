function articleWordCount(){
  let article = document.querySelector(".article");
  let articleText = article.textContent;
  let count = articleText.trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .length;
  return Math.round(count/230) + " min read";
  }


function createReadTimeLocation(){
  let h3 = document.createElement("h3");
  h3.textContent = articleWordCount();
  h3.classList.add("time-to-read");
  document.querySelector(".media-body").appendChild(h3);

}

createReadTimeLocation();
