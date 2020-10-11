var botão=document.getElementById('enterGameButton');
var money=document.getElementById('creatorLink');

window.onload=function(){
  botão.addEventListener("click", setTimeout(() => {global();
  }, 4000)); 
}
function global(){
backgroundColor = "#000"
function renderPlayer(a,d,c,b,g) {
{
    b.save();
    if (a.skin && 0 < a.skin && a.skin <= playerSkins && !skinSprites[a.skin]) {
        var e = new Image;
        e.onload = function() {
            this.readyToDraw = !0;
            this.onload = null;
            g == currentSkin && changeSkin(0)
        };
        e.src = "https://ghcdn.rawgit.org/RONALDO445/AberturaRedStone/main/matue-removebg-preview" + (a.skin - 1) + ".png";
        skinSprites[a.skin] = e
    }
    a.skin && skinSprites[a.skin] && skinSprites[a.skin].readyToDraw ? (e = a.size - b.lineWidth / 4, b.lineWidth /= 2, renderCircle(d, c, a.size, b, !1, !0)) : g || (b.fillStyle = "rgba(0, 0, 0, 0.1)", renderCircle(d,
        c, a.size, b));
    b.restore()
}
}}
