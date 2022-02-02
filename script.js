
// ======================= Data-base ============================

const animals = [
    {
        "type": "cat",
        "sex": "male",
        "age" : "old",
        "name": "micho",
        "lacation": "london",
        "img": "images/search-imgs/cat2_230x224.jpg"
    },
    {
        "type": "cat",
        "sex": "female",
        "age" : "young",
        "name": "katty",
        "lacation": "manchester",
        "img": "images/search-imgs/cat1_230x224.jpg"
    },
    {
        "type": "dog",
        "sex": "male",
        "age" : "2 months",
        "name": "bob",
        "lacation": "liverpool",
        "img": "images/search-imgs/dog1_230x224.jpg"
    },
    {
        "type": "dog",
        "sex": "female",
        "age" : "1 year",
        "name": "moly",
        "lacation": "london",
        "img": "images/search-imgs/dog2_230x224.jpg"
    },
    {
        "type": "bird",
        "sex": "male",
        "age" : "9 months",
        "name": "twety",
        "lacation": "london",
        "img": "images/search-imgs/bird1_230x224.jpg"
    },
    {
        "type": "parrot",
        "sex": "female",
        "age" : "2 years",
        "name": "lili",
        "lacation": "liverpool",
        "img": "images/search-imgs/parrot1_230x224.jpg"
    }
]

const stories = [
    {
        "title": "A new begenning for Jack",
        "story": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, adipisci sapiente laborum earum numquam nisi.",
        "img": "images/search-imgs/dog5_378x212.jpg"
    },
    {
        "title": "Augie the champion",
        "story": "modi est voluptates quam enim architecto ea nostrum deleniti suscipit quod, adipisci fuga placeat aut consectetur.",
        "img": "images/search-imgs/bird2_378x212.jpg"
    },
    {
        "title": "My new friend Denny",
        "story": "Lorem ipsum dolor sit amet consectetur adipisicing elit. m enim architecto ea nostrum deleniti suscipit quod, adipisci",
        "img": "images/search-imgs/cat3_378x212.jpg"
    }
]

// ======================= Side Bar ======================//
const burger = document.querySelector(".burger")
const xBurger = document.querySelector(".nav-mobile-x")
const navMobile = document.querySelector('.nav-mobile')

burger.addEventListener('click',()=>{
    navMobile.classList.add('active')
})

xBurger.addEventListener('click',()=>{
    navMobile.classList.remove('active')
})

window.onscroll = ()=>{
    navMobile.classList.remove('active')
}

// ======================= Search using city name ============================

const cities = [];
animals.forEach(animal=>cities.push(animal.lacation));
console.log('the cities availaible are ' + cities);
document.querySelector(".search-btn").addEventListener('click',(event)=>{
    event.preventDefault();
    let searchInput = document.querySelector(".search-field").value;
    let cityName = searchInput.toLowerCase();
    if (searchInput =='') {
        document.querySelector(".is-searchResults").innerHTML='';
        document.querySelector('.emptySearch-error').classList.add('show-error');
        document.querySelector('.search-field').style.borderColor="red";
    }else if (!cities.includes(cityName)) {
        document.querySelector('.emptySearch-error').classList.remove('show-error');
        document.querySelector(".is-searchResults").innerHTML='';
        document.querySelector('.search-field').style.borderColor="#3040C4";
        document.querySelector('.is-searchResults').classList.add('no-grid')
        document.querySelector(".is-searchResults").innerHTML+='<p class="search-msg"> Sorry, no animals for this city <br> Try london, manchester or liverpool </p>';
    } else{
        document.querySelector(".is-searchResults").innerHTML='';
        document.querySelector('.emptySearch-error').classList.remove('show-error');
        document.querySelector('.is-searchResults').classList.remove('no-grid')
        document.querySelector('.search-field').style.borderColor="#3040C4";
        document.querySelector('.meetYourMatch__background').style.height = '600px';
        animals.forEach(animal=>{
            if (cityName == animal.lacation ) {
                document.querySelector(".is-searchResults").innerHTML+=
                `<div class="widget">
                    <div class="widget__image">
                        <img src=${animal.img} alt="pet image">
                    </div>
                    <div class="widget__desc">
                        <h4>${animal.name}</h4>
                        <p>${animal.sex} | ${animal.age}</p>
                        <p>${animal.lacation}</p>
                    </div>
                </div>`
            }
        });
    }
})

// ======================= Display stories ============================

stories.forEach(story=>{
    document.querySelector(".stories .widgets").innerHTML+=`
    <div class="widget">
    <div class="widget__image">
        <img src=${story.img} alt="graphic-image">
    </div>
    <div class="widget__desc">
        <h3>${story.title}</h3>
        <p class="pet-story">${story.story}</p>
    </div>
    </div>`
})

