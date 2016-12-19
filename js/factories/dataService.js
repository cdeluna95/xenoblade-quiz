(function() {
  
  var app = angular.module("AngularQuiz");
  
  app.factory("DataService", dataSvc);
  
  // dataSvc
  function dataSvc() {
    var dataObj = {
      quizQuestions: quizQuestions,
      correctAnswers: correctAnswers
    };
    
    return dataObj;
  }
  
  // Correct answers of JSON list
  var correctAnswers = [2, 3, 3, 1, 3, 1, 2, 3, 2, 2];
  
  // Quiz questions in JSON
  var quizQuestions = [
    // Question #1
    {
      type: "image",
      text: "Who is the protagonist of the first game?",
      possibilities: [
        {
          answer: "https://static.guim.co.uk/sys-images/Technology/Pix/pictures/2012/2/24/1330085398110/The-Last-Story-007.jpg"
        },
        {
          answer: "https://40.media.tumblr.com/a62c5a1b22c2a13733e120bc65cacac1/tumblr_nyspsqJ33y1s55i8ao1_1280.jpg"
        },
        {
          answer: "https://s.aolcdn.com/hss/storage/midas/ebec1f8eea50468d632afd48f91fecbb/201483706/shulk.jpg"
        },
        {
          answer: "https://vignette2.wikia.nocookie.net/xenoblade/images/3/3f/Elma_gun_point_tumblr_nksu2f4mFC1qiik7vo3_1280.png/revision/latest?cb=20150306173210"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #2
    {
      type: "image",
      text: "Which alien species founded the Candid & Credible Arms Manufacturer?",
      possibilities: [
        {
          answer: "https://vignette3.wikia.nocookie.net/xenoblade/images/e/e2/Vyers.JPG/revision/latest?cb=20150227002252"
        },
        {
          answer: "https://vignette2.wikia.nocookie.net/xenoblade/images/b/bd/Machina.png/revision/latest?cb=20160326102747"
        },
        {
          answer: "https://vignette3.wikia.nocookie.net/xenoblade/images/c/c7/Nopon_Caravan_img_world06_02.jpg/revision/latest?cb=20150312025653"
        },
        {
          answer: "https://vignette3.wikia.nocookie.net/xenoblade/images/e/e6/Ma_Non.png/revision/latest?cb=20150210172517"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #3
    {
      type: "text",
      text: "Who specifically caused the Earth to be destroyed due to their selfishness and long for friendship?",
      possibilities: [
        {
          answer: "Zanza"
        },
        {
          answer: "Ganglion"
        },
        {
          answer: "Ghost"
        },
        {
          answer: "Klaus"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #4
    {
      type: "image",
      text: "Which ancient race has the ability to read minds?",
      possibilities: [
        {
          answer: "https://i.ytimg.com/vi/rSH9bVIgSlo/maxresdefault.jpg"
        },
        {
          answer: "https://i.ytimg.com/vi/QkUITj00SMo/maxresdefault.jpg"
        },
        {
          answer: "https://i.ytimg.com/vi/5YKRgyOjQnA/maxresdefault.jpg"
        },
        {
          answer: "https://31.media.tumblr.com/9a51a7e6c39a3e44bbb583c3bd7761de/tumblr_inline_njqn8a82C01sgocv1.jpg"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #5
    {
      type: "text",
      text: "What is the name of one of the Nopon involved in the red pollen orb issue?",
      possibilities: [
        {
          answer: "Nelo"
        },
        {
          answer: "Mujiji"
        },
        {
          answer: "Tora"
        },
        {
          answer: "Zazadan"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #6
    {
      type: "text",
      text: "Which of the following characters are able to physically fly?",
      possibilities: [
        {
          answer: "Pugilith"
        },
        {
          answer: "Tyrea"
        },
        {
          answer: "Mechon M71"
        },
        {
          answer: "Riki"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #7
    {
      type: "text",
      text: "What is the name of the Nopon who tricked you to treat his stomach illnesses?",
      possibilities: [
        {
          answer: "Bana"
        },
        {
          answer: "Muimui"
        },
        {
          answer: "Tora"
        },
        {
          answer: "Dedeba"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #8
    {
      type: "image",
      text: "Which of the following is a Mechon?",
      possibilities: [
        {
          answer: "https://vignette2.wikia.nocookie.net/xenoblade/images/5/5e/Growth_Army_Close_up_2.JPG/revision/latest?cb=20150412152044"
        },
        {
          answer: "https://vignette3.wikia.nocookie.net/xenoblade/images/7/74/Fiora.png/revision/latest?cb=20150921134737"
        },
        {
          answer: "https://i.ytimg.com/vi/4aqQOh-dsUY/sddefault.jpg"
        },
        {
          answer: "https://zarnaguamore.files.wordpress.com/2014/06/xenoblade-novelisation-005-mechon-carriers.png"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #9
    {
      type: "image",
      text: "Which of the following is NOT a Monado?",
      possibilities: [
        {
          answer: "https://i.ytimg.com/vi/kkor_oNQfM0/maxresdefault.jpg"
        },
        {
          answer: "https://vignette1.wikia.nocookie.net/xenoblade/images/f/f0/Monado-0.png/revision/latest?cb=20140615024122"
        },
        {
          answer: "https://img01.deviantart.net/d10d/i/2016/028/3/2/sword_of_legendaryness_by_herukun-d9pmqof.jpg"
        },
        {
          answer: "https://vignette3.wikia.nocookie.net/xenoblade/images/4/45/Meyneth_True_Monado.png/revision/latest?cb=20150927175650"
        }
      ],
      selected: null,
      correct: null
    },
    // Question #10
    {
      type: "text",
      text: "Which character is artificially fabricated whose innate memories are lost but are programmed to perform activities beneficial to the government and the city's economy?",
      possibilities: [
        {
          answer: "Fiora"
        },
        {
          answer: "Cross"
        },
        {
          answer: "Yelv"
        },
        {
          answer: "Egil"
        }
      ],
      selected: null,
      correct: null
    }
  ];
  
})();
