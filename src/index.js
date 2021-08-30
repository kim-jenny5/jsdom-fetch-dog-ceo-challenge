// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    challengeOne();
    challengeTwo();
})

// Challenge 1
function challengeOne() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json.message.forEach((dog) => {
            const imgContainer = document.getElementById("dog-image-container");
            const dogImg = document.createElement("img");
            dogImg.src = dog;
            imgContainer.appendChild(dogImg);
        }))
}

// Challenge 2
let arr = []

function challengeTwo() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    fetch(breedUrl)
        .then(resp => resp.json())
        // .then(json => addDogBreeds(json))
        .then(json => {
            const jsonKey = json.message;
            for (const key in jsonKey) {
                const unlistedEl = document.getElementById("dog-breeds");
                const breedListEl = document.createElement("li");
                breedListEl.innerText = key;
                unlistedEl.appendChild(breedListEl);

                // Challenge 3
                breedListEl.addEventListener("click", function (e) {
                    e.target.style.color = "red";
                })

                // Challenge 4
                const dropdown = document.getElementById("breed-dropdown")
                arr = Object.keys(jsonKey)
                dropdown.addEventListener("change", function (e) {
                    const filteredArr = arr.filter(element => element.charAt(0) === e.target.value)
                    // console.log(filteredArr)
                    unlistedEl.removeChild(breedListEl);
                    for (const breed of filteredArr) {
                        breedListEl.innerText = breed;
                        unlistedEl.appendChild(breedListEl)
                    }

                    // filteredArr.forEach(breed => {
                    //     breedListEl.innerText = breed;
                    //     unlistedEl.appendChild(breedListEl)
                    // })

                    // for (const element of arr) {
                    //     if (e.target.value === "a") {
                    //         if (element.charAt(0) === "a") {
                    //             breedListEl.remove();
                    //             breedListEl.innerText = element
                    //             unlistedEl.appendChild(breedListEl)
                    //         }
                    //     }
                    //     else if (e.target.value === "b") {
                    //         if (element.charAt(0) === "b") {
                    //             breedListEl.remove();
                    //             breedListEl.innerText = element
                    //             unlistedEl.appendChild(breedListEl)
                    //         }
                    //     }
                    //     else if (e.target.value === "c") {
                    //         if (element.charAt(0) === "c") {
                    //             breedListEl.remove();
                    //             breedListEl.innerText = element
                    //             unlistedEl.appendChild(breedListEl)
                    //         }
                    //     }
                    //     else if (e.target.value === "d") {
                    //         if (element.charAt(0) === "d") {
                    //             breedListEl.remove();
                    //             breedListEl.innerText = element
                    //             unlistedEl.appendChild(breedListEl)
                    //         }
                    //     }
                    // }
                })
            }
        })
}
