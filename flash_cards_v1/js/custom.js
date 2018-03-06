var data = [
    {
        "key":1,
        "ques":"What is the supreme law of the land?",
        "ans":"The Constitution",
        "gotit":false,
        "star":false
    },
    {
        "key":2,
        "ques":"What does the Constitution do?",
        "ans":"Sets up the government | Defines the government | Protects basic rights of Americans",
        "gotit":false,
        "star":false
    },
    {
        "key":3,
        "ques":"The idea of self-government is in the first three words of the Constitution. What are these words?",
        "ans":"We the People",
        "gotit":false,
        "star":false
    },
    {
        "key":4,
        "ques":"What is an amendment?",
        "ans":"A change (to the Constitution) | An addition (to the Constitution)",
        "gotit":false,
        "star":false
    },
    {
        "key":5,
        "ques":"What do we call the first ten amendments to the Constitution??",
        "ans":"The Bill of Rights",
        "gotit":false,
        "star":false
    }
]

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var vm = new Vue({
    el: '#app',
    data: {
      countTotal: 0,
      countCorrect: 0,
      countWrong: 0,
      allDone: false,
      reviewing: false,
      currentQuestions: [],
      wrongQuestions: [],
      questions: [
                {
                    "key":1,
                    "ques":"What is the supreme law of the land?",
                    "ans":"The Constitution",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":2,
                    "ques":"What does the Constitution do?",
                    "ans":"Sets up the government | Defines the government | Protects basic rights of Americans",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":3,
                    "ques":"The idea of self-government is in the first three words of the Constitution. What are these words?",
                    "ans":"We the People",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":4,
                    "ques":"What is an amendment?",
                    "ans":"A change (to the Constitution) | An addition (to the Constitution)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":5,
                    "ques":"What do we call the first ten amendments to the Constitution?",
                    "ans":"The Bill of Rights",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":6,
                    "ques":"What is one right or freedom from the First Amendment?",
                    "ans":"Speech, Religion, Assembly, Press, Petition the government.",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":7,
                    "ques":"How many amendments does the Constitution have?",
                    "ans":"Twenty-seven (27)",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":8,
                    "ques":"What did the Declaration of Independence do?",
                    "ans":"Announced our independence (from Great Britain)",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":9,
                    "ques":"What are two rights in the Declaration of Independence?",
                    "ans":"Life | Liberty | Pursuit of happiness",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":10,
                    "ques":"What is freedom of religion?",
                    "ans":"You can practice any religion, or not practice a religion.",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":11,
                    "ques":"What is the economic system in the United States?",
                    "ans":"Capitalist economy",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":12,
                    "ques":"What is the \"rule of law\"?",
                    "ans":"Everyone must follow the law. | No one is above the law.",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":13,
                    "ques":"Name one branch or part of the government.",
                    "ans":"Congress | Legislative | President | Executive | The courts | Judicial",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":14,
                    "ques":"What stops one branch of government from becoming too powerful?",
                    "ans":"Separation of powers",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":15,
                    "ques":"Who is in charge of the executive branch?",
                    "ans":"The President",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":16,
                    "ques":"Who makes federal laws?",
                    "ans":"Congress | Senate and House (of Representatives) | (U.S. or national) legislature",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":17,
                    "ques":"What are the two parts of the U.S. Congress?",
                    "ans":"The Senate and House (of Representatives)",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":18,
                    "ques":"How many U.S. Senators are there?",
                    "ans":"One hundred (100)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":19,
                    "ques":"We elect a U.S. Senator for how many years?",
                    "ans":"Six (6)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":20,
                    "ques":"Who is one of your state's U.S. Senators now?",
                    "ans":"Dick Durbin | Tammy Duckworth",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":21,
                    "ques":"The House of Representatives has how many voting members?",
                    "ans":"Four hundred thirty-five (435)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":22,
                    "ques":"We elect a U.S. Representative for how many years?",
                    "ans":"Two (2)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":23,
                    "ques":"Name your U.S. Representative.",
                    "ans":"Jan Schakowsky",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":24,
                    "ques":"Who does a U.S. Senator represent?",
                    "ans":"All people of the state",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":25,
                    "ques":"Why do some states have more Representatives than other states?",
                    "ans":"(Because) some states have more people",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":26,
                    "ques":"We elect a President for how many years?",
                    "ans":"Four (4)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":27,
                    "ques":"In what month do we vote for President?",
                    "ans":"November",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":28,
                    "ques":"What is the name of the President of the United States now?",
                    "ans":"Donald J. Trump",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":29,
                    "ques":"What is the name of the Vice President of the United States now?",
                    "ans":"Michael R. Pence",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":30,
                    "ques":"If the President can no longer serve, who becomes President?",
                    "ans":"The Vice President",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":31,
                    "ques":"If both the President and the Vice President can no longer serve, who becomes President?",
                    "ans":"The Speaker of the House",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":32,
                    "ques":"Who is the Commander in Chief of the military?",
                    "ans":"	The President",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":33,
                    "ques":"Who signs bills to become laws?",
                    "ans":"The President",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":34,
                    "ques":"Who vetoes bills?",
                    "ans":"The President",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":35,
                    "ques":"What does the President’s Cabinet do?",
                    "ans":"Advises the President",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":36,
                    "ques":"What are two Cabinet-level positions?",
                    "ans":"Secretary of Agriculture, Commerce, Defense, Education, Energy, Health and Human Services, Homeland Security, Housing and Urban Development, the Interior, Labor, State, Transportation, Treasury, Veterans Affairs, Attorney General, Vice President",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":37,
                    "ques":"What does the judicial branch do?",
                    "ans":"Reviews laws | Explain laws | Resolves disputes | Decide if a law goes against constitution.",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":38,
                    "ques":"What is the highest court in the United States?",
                    "ans":"The Supreme Court",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":39,
                    "ques":"How many justices are on the Supreme Court?",
                    "ans":"Nine(9)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":40,
                    "ques":"Who is the Chief Justice of the United States now?",
                    "ans":"John Roberts",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":41,
                    "ques":"Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
                    "ans":"To print money | To declare war | To create an army | To make treaties",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":42,
                    "ques":"Under our Constitution, some powers belong to the states. What is one power of the states?",
                    "ans":"Provide schooling and education | 	Provide protection (police) | Provide safety (fire departments) | Give a driver’s license | Approve zoning and land use",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":43,
                    "ques":"Who is the Governor of your state now?",
                    "ans":"Bruce Rauner",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":44,
                    "ques":"What is the capital of your state?",
                    "ans":"Springfield",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":45,
                    "ques":"What are the two major political parties in the United States?",
                    "ans":"Democratic and Republican",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":46,
                    "ques":"What is the political party of the President now?",
                    "ans":"Republican (Party)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":47,
                    "ques":"What is the name of the Speaker of the House of Representatives now?",
                    "ans":"Paul D. Ryan",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":48,
                    "ques":"There are four amendments to the Constitution about who can vote. Describe one of them.",
                    "ans":"Citizens eighteen (18) and older (can vote). | You don't have to pay (a poll tax) to vote. | Any citizen can vote. (Women and men can vote.) | A male citizen of any race (can vote).",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":49,
                    "ques":"What is one responsibility that is only for United States citizens?",
                    "ans":"Serve on a jury | Vote in a federal election",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":50,
                    "ques":"Name one right only for United States citizens.",
                    "ans":"Vote in a federal election | Run for federal office",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":51,
                    "ques":"What are two rights of everyone living in the United States?",
                    "ans":"Freedom of expression | Freedom of speech | Freedom of assembly | Freedom to petition the government | Freedom of worship (religion) | The right to bear arms",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":52,
                    "ques":"What do we show loyalty to when we say the Pledge of Allegiance?",
                    "ans":"The United States | The flag",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":53,
                    "ques":"What is one promise you make when you become a United States citizen?",
                    "ans":"Give up loyalty to other countries | Defend the Constitution and laws of the United States | Obey the laws of the United States | Serve in the U.S. military (if needed) | Serve (do important work for) the nation (if needed) | Be loyal to the United States",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":54,
                    "ques":"How old do citizens have to be to vote for President?",
                    "ans":"Eighteen (18) and older",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":55,
                    "ques":"What are two ways that Americans can participate in their democracy?",
                    "ans":"Vote | Join a political party | Help with a campaign | Join a civic group | Join a community group | Give an elected official your opinion on an issue | Call Senators and Representatives | Publicly support or oppose an issue or policy | Run for office | Write to a newspaper",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":56,
                    "ques":"When is the last day you can send in federal income tax forms?",
                    "ans":"April 15",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":57,
                    "ques":"When must all men register for the Selective Service?",
                    "ans":"At age eighteen (18) | Between eighteen (18) and twenty-six (26)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":58,
                    "ques":"What is one reason colonists came to America?",
                    "ans":"Freedom | Political liberty | Religious freedom | Economic opportunity | Practice their religion | Escape persecution",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":59,
                    "ques":"Who lived in America before the Europeans arrived?",
                    "ans":"American Indians | Native Americans",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":60,
                    "ques":"What group of people was taken to America and sold as slaves?",
                    "ans":"Africans | People from Africa",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":61,
                    "ques":"Why did the colonists fight the British?",
                    "ans":"Because of high taxes (taxation without representation) | Because the British army stayed in their houses (boarding, quartering) | Because they didn’t have self-government",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":62,
                    "ques":"Who wrote the Declaration of Independence?",
                    "ans":"(Thomas) Jefferson",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":63,
                    "ques":"When was the Declaration of Independence adopted?",
                    "ans":"July 4, 1776",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":64,
                    "ques":"There were 13 original states. Name three.",
                    "ans":"New Hampshire | Massachusetts | Rhode Island | Connecticut | New York | New Jersey | Pennsylvania | Delaware | Maryland | Virginia | North Carolina | South Carolina | Georgia",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":65,
                    "ques":"What happened at the Constitutional Convention?",
                    "ans":"The Constitution was written. | The Founding Fathers wrote the Constitution.",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":66,
                    "ques":"When was the Constitution written?",
                    "ans":"1787",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":67,
                    "ques":"The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
                    "ans":"(James) Madison | (Alexander) Hamilton | (John) Jay | Publius",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":68,
                    "ques":"What is one thing Benjamin Franklin is famous for?",
                    "ans":"U.S. diplomat | Oldest member of the Constitutional Convention | First Postmaster General of the United States | Writer of \"Poor Richard’s Almanac\" | Started the first free libraries",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":69,
                    "ques":"Who is the “Father of Our Country”?",
                    "ans":"(George) Washington",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":70,
                    "ques":"Who was the first President?",
                    "ans":"(George) Washington",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":71,
                    "ques":"What territory did the United States buy from France in 1803?",
                    "ans":"The Louisiana Territory | Louisiana",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":72,
                    "ques":"Name one war fought by the United States in the 1800s.",
                    "ans":"War of 1812 | Mexican-American War | Civil War | Spanish-American War",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":73,
                    "ques":"Name the U.S. war between the North and the South.",
                    "ans":"The Civil War | The War Between the States",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":74,
                    "ques":"Name one problem that led to the Civil War.",
                    "ans":"Slavery | Economic reasons | States\' rights",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":75,
                    "ques":"What was one important thing that Abraham Lincoln did?",
                    "ans":"Freed the slaves (Emancipation Proclamation) | Saved (or preserved) the Union | Led the United States during the Civil War",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":76,
                    "ques":"What did the Emancipation Proclamation do?",
                    "ans":"Freed the slaves | Freed slaves in the Confederacy | Freed slaves in the Confederate states | Freed slaves in most Southern states",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":77,
                    "ques":"What did Susan B. Anthony do?",
                    "ans":"Fought for women’s rights | Fought for civil rights",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":78,
                    "ques":"Name one war fought by the United States in the 1900s.",
                    "ans":"World War I | World War II | Korean War | Vietnam War | (Persian) Gulf War",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":79,
                    "ques":"Who was President during World War I?",
                    "ans":"(Woodrow) Wilson",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":80,
                    "ques":"Who was President during the Great Depression and World War II?",
                    "ans":"(Franklin) Roosevelt",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":81,
                    "ques":"Who did the United States fight in World War II?",
                    "ans":"Japan, Germany, and Italy",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":82,
                    "ques":"Before he was President, Eisenhower was a general. What war was he in?",
                    "ans":"World War II",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":83,
                    "ques":"During the Cold War, what was the main concern of the United States?",
                    "ans":"Communism",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":84,
                    "ques":"What movement tried to end racial discrimination?",
                    "ans":"Civil rights (movement)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":85,
                    "ques":"What did Martin Luther King, Jr. do?",
                    "ans":"Fought for civil rights | Worked for equality for all Americans",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":86,
                    "ques":"What major event happened on September 11, 2001, in the United States?",
                    "ans":"Terrorists attacked the United States.",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":87,
                    "ques":"Name one American Indian tribe in the United States.",
                    "ans":"Cherokee | Apache | Creek | Blackfeet | Crow | ...",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":88,
                    "ques":"Name one of the two longest rivers in the United States.",
                    "ans":"Mississippi (River) | Missouri (River)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":89,
                    "ques":"What ocean is on the West Coast of the United States?",
                    "ans":"Pacific (Ocean)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":90,
                    "ques":"What ocean is on the East Coast of the United States?",
                    "ans":"Atlantic (Ocean)",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":91,
                    "ques":"Name one U.S. territory.",
                    "ans":"Puerto Rico | U.S. Virgin Islands | American Samoa | Northern Mariana Islands | Guam",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":92,
                    "ques":"Name one state that borders Canada.",
                    "ans":"Maine | New Hampshire | Vermont | New York | Pennsylvania | Ohio | Michigan | Minnesota | North Dakota | Montana | Idaho | Washington | Alaska",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":93,
                    "ques":"Name one state that borders Mexico.",
                    "ans":"California | Arizona | New Mexico | Texas",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":94,
                    "ques":"What is the capital of the United States?",
                    "ans":"Washington, D.C.",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":95,
                    "ques":"Where is the Statue of Liberty?",
                    "ans":"New York (Harbor) | Liberty Island",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":96,
                    "ques":"Why does the flag have 13 stripes?",
                    "ans":"Because there were 13 original colonies | Because the stripes represent the original colonies",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":97,
                    "ques":"Why does the flag have 50 stars?",
                    "ans":"Because there is one star for each state | Because each star represents a state | Because there are 50 states",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":98,
                    "ques":"What is the name of the national anthem?",
                    "ans":"The Star-Spangled Banner",
                    "gotit":false,
                    "star":false
                },
                {
                    "key":99,
                    "ques":"When do we celebrate Independence Day?",
                    "ans":"4th of July",
                    "gotit":false,
                    "star":true
                },
                {
                    "key":100,
                    "ques":"Name two national U.S. holidays.",
                    "ans":"New Year’s Day | Martin Luther King, Jr. Day | Presidents’ Day | Memorial Day | Independence Day | Labor Day | Columbus Day | Veterans Day | Thanksgiving | Christmas",
                    "gotit":false,
                    "star":false
                }
            ]
    },
    created: function () {
        this.currentQuestions = this.questions;
        Shuffle(this.currentQuestions);
        jQuery('#flashcard .answer').hide();
    },
    methods:{
        startTest: function(){
            this.countTotal = this.currentQuestions.length;
            this.countCorrect = 0;
            this.countWrong = 0;
            jQuery('#startPage').hide();
            jQuery('#resultPage').hide();
            jQuery('#flashcard .card:first-child').addClass('current-question');
        }, 
        showAnswer: function(){
            jQuery('#flashcard .answer').slideToggle();
        },
        gotRight: function(event){
            this.countCorrect += 1; 
            this.nextQuestion();
        },
        gotWrong: function(event){
            this.countWrong += 1;
            var currentIndex = jQuery('.current-question').attr('data-index');
            this.wrongQuestions.push(this.currentQuestions[currentIndex]);
            this.nextQuestion();
        },
        nextQuestion: function(event){
            if( jQuery('.current-question').is(':last-child') ){
                this.allDone = true;
                jQuery('#resultPage').show();
                jQuery('#flashcard .card').removeClass('current-question');
            }else{
                jQuery('.current-question').removeClass('current-question')
                                       .next().addClass('current-question');
                jQuery('.answer').hide();
            }
        },
        reviewWrong(){
            this.currentQuestions = this.wrongQuestions;
            this.wrongQuestions = [];
            this.startTest();
            this.reviewing = true;
        },
        reloadPage(){
            location.reload();
        }
    }
  })






















