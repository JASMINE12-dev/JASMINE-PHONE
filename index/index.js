const images=['./PHONE.png','./images.jpg']
let count=0
let func=0
const image_wrapper=document.querySelector('.gr')
const image=document.createElement('img')
image_wrapper.appendChild(image)
image.src=images[count]

const move=()=>{
    count=(count+1) % images.length;
    image.src=images[count]
}
// console.log(move())
// // console.log(move())
// // console.log(move())
// // console.log(move())
const interval=setInterval(()=>{

    move()
    console.log('okay') 
    func++
    console.log(func)
    if(func==50){
        clearInterval(interval)
    }
},2000)


// const images = ['./PHONE.png', './images.jpg'];
// let count = 0;

// const imageWrapper = document.querySelector('.gr');

// // Create two images for cross-fade effect
// const img1 = document.createElement('img');
// const img2 = document.createElement('img');

// img1.src = images[0];
// img1.classList.add('active');

// imageWrapper.appendChild(img1);
// imageWrapper.appendChild(img2);

// let activeImg = img1;
// let inactiveImg = img2;

// const move = () => {
//   count = (count + 1) % images.length;

//   // Update source of the inactive image
//   inactiveImg.src = images[count];

//   // Swap classes for fade transition
//   activeImg.classList.remove('active');
//   inactiveImg.classList.add('active');

//   // Swap roles
//   [activeImg, inactiveImg] = [inactiveImg, activeImg];
// };

// setInterval(move, 3000); // Change every 3 seconds
