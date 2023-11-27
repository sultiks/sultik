// Kelebeklerin uçacağı alana erişme
var container = document.querySelector('.butterflies-container');

// Rastgele pozisyonda kelebeklerin oluşturulması ve eklendiği fonksiyon
function createButterfly() {
  var butterfly = document.createElement("img");
  butterfly.src = "pngegg.png";
  butterfly.classList.add("butterfly");
  butterfly.style.top = Math.random() * container.clientHeight + "px";
  butterfly.style.animationDuration = (Math.random() * 2 + 2) + "s"; // Rastgele hız
  container.appendChild(butterfly);
}

// Belirli aralıklarla kelebek oluşturulması
setInterval(createButterfly, 3000);