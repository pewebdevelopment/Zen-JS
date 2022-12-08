const QnAs = [
  {
    Q_no: 01,
    Question: " Is JavaScript one of the most awesome languages to learn? ",
    AnswersArray: [
      {
        Maintext: "Yes ",
        SubText: "it is just too awesome",
      },
      {
        Maintext: "Its good ",
        SubText: "but could be better",
      },
      {
        Maintext: "Meh, ",
        SubText: "its okay",
      },
      {
        Maintext: "Nah  ",
        SubText: "I dont like it at all",
      },
    ],
    RightAnwerIndex: 2,
  },

  {
    Q_no: 02,
    Question: " Is JavaScript one of the most awesome languages to learn? ",
    AnswersArray: [
      {
        Maintext: "Yes ",
        SubText: "it is just too awesome",
      },
      {
        Maintext: "Its good ",
        SubText: "but could be better",
      },
      {
        Maintext: "Meh, ",
        SubText: "its okay",
      },
      {
        Maintext: "Nah  ",
        SubText: "I dont like it at all",
      },
    ],
    RightAnwerIndex: 3,
  },

  {
    Q_no: 03,
    Question: " Is JavaScript one of the most awesome languages to learn? ",
    AnswersArray: [
      {
        Maintext: "Yes ",
        SubText: "it is just too awesome",
      },
      {
        Maintext: "Its good ",
        SubText: "but could be better",
      },
      {
        Maintext: "Meh, ",
        SubText: "its okay",
      },
      {
        Maintext: "Nah  ",
        SubText: "I dont like it at all",
      },
    ],
    RightAnwerIndex: 0,
  },
];

let presentIndex = 0;
let ClickedOption = 0;

const NextBtn = document.getElementById("NextBtn");
const PrevBtn = document.getElementById("PrevBtn");
const Question = document.getElementById("Question");

const OptionsArray = [];
OptionArray[0] = document.getElementById("Option1");
OptionArray[1] = document.getElementById("Option2");
OptionArray[2] = document.getElementById("Option3");
OptionArray[3] = document.getElementById("Option4");

function UpdateQ(n) {
  Question.innerText = QnAs[n].Question;

  OptionArray[0].innerText = QnAs[n].AnswersArray.Maintext;
  OptionArray[0].innerText = QnAs[n].AnswersArray.SubText;

  // Option2.innerText = QnAs[n].AnswersArray.Maintext;
  // Option2.innerText = QnAs[n].AnswersArray.SubText;

  // Option3.innerText = QnAs[n].AnswersArray.Maintext;
  // Option3.innerText = QnAs[n].AnswersArray.SubText;

  // Option4.innerText = QnAs[n].AnswersArray.Maintext;
  // Option4.innerText = QnAs[n].AnswersArray.SubText;
}

// const input = document.getElementById("inputbox");

function clickPrev() {
  if (presentIndex === 0) {
    presentIndex = QnAs.length - 1;
  }
  UpdateQ(presentIndex);
}

function clickNext() {
  if (presentIndex === QnAs.length - 1) {
    presentIndex = 0;
  }

  UpdateQ(presentIndex);
}

// clickOption() {

// if ( event.target.classlist(includes ("Option1"))) {
// ClickedOption = 1

//   }
// event.target.incldes ("Option1")
// }

function handleclick() {
  if (QnAs[n].RightAnwerIndex === ClickedOption - 1) {
    UpdateQ(presentIndex + 1);
  } else {
    alert("The Ans is wrong, please try again");
  }
}
