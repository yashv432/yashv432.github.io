document.addEventListener('DOMContentLoaded', () => {

    const image1 = document.querySelectorAll('#dog_images');

    for(const image of image1){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => image.src = data.message)
    }


    const image2 = document.querySelectorAll('#cat_images');

    for(const image of image2){
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => image.src = data[0].url)
    }
})