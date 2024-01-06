let left = document.querySelector('.left')
let right = document.querySelector('.right')
let img = document.querySelector('.img')
let ma = ['./img/Foto_maken_golden_hour.jpg','./img/paul-skorupskas-7KLa-xLbSXA-unsplash-2.webp','./img/photo-1574217013471-c32c6846cef7.avif','./img/sunset-background-dandelion-fluff-hd-wallpaper-preview.jpg']
let cnt = 0
left.onclick = () => {
    setTimeout(() => {
       if (cnt <= 0) {
        cnt = ma.length-1
      
    
        // cnt++
    }
    cnt--
    img.src = ma[cnt]
    console.log(cnt); 
    },0)
    

}
right.onclick = () => {
    setTimeout(() => { if (cnt == ma.length-1) {
        cnt = 0
    }
    cnt++
    img.src = ma[cnt]
    console.log(cnt); },0)
   

}