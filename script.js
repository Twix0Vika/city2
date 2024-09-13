const cities = [
    {
      name: "Київ",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Andriivs%27kyi_descent%2C_Kyiv%2C_Ukraine_%28Unsplash%29.jpg"
    },
    {
      name: "Львів",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/a/af/7_Soborna_Square%2C_Lviv.jpg"
    },
    {
      name: "Рівне",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Railway_Station-Rivne.JPG/1280px-Railway_Station-Rivne.JPG"
    },
    {
      name: "Ужгород",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4._%D0%9D%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F._%D0%A6%D0%B2%D0%B5%D1%82%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%B0%D0%BA%D1%83%D1%80%D1%8B.jpg"
    },
    {
      name: "Чернівці",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81_%D0%BC._%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96_3.JPG"
    },
    {
      name: "Харків",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%96%D0%B2%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0046.jpg"
    },
    {
      name: "Луцьк",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/%D0%9B%D1%83%D1%86%D1%8C%D0%BA_%2868%29.jpg"
    },
    {
      name: "Житомир",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Korolev-museum-zhytomyr.jpg/1280px-Korolev-museum-zhytomyr.jpg"
    },
    {
      name: "Івано-Франківськ",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Armenian_Cathedral_in_Ivano-Frankivsk.JPG/1920px-Armenian_Cathedral_in_Ivano-Frankivsk.JPG"
    }
  ];
  
  let currentLevel = 1;
  let errors = 0;
  let targetCity = cities[0];
  
  const levelTitle = document.getElementById("level-title");
  const errorCounter = document.getElementById("error-counter");
  const photosContainer = document.getElementById("photos-container");
  
  function startLevel() {
    targetCity = cities[currentLevel - 1];
  
    levelTitle.textContent = `Знайди місто: ${targetCity.name}`;
  
    photosContainer.innerHTML = "";
  
    const shuffledCities = shuffleArray([...cities]);
  
    shuffledCities.forEach((city) => {
      const img = document.createElement("img");
      img.src = city.img;
      img.alt = city.name;
      img.addEventListener("click", () => checkAnswer(city));
      photosContainer.appendChild(img);
    });
  }
  
  function checkAnswer(city) {
    if (city.name === targetCity.name) {
      if (currentLevel === 9) {
        alert("Молодець, ти пройшов гру!");
      } else {
        currentLevel++;
        startLevel();
      }
    } else {
      alert("На жаль, ти допустив помилку");
      errors++;
      errorCounter.textContent = `Кількість помилок: ${errors}`;
      currentLevel = 1; 
      startLevel();
    }
  }
  
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  startLevel();
  