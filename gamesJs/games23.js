/* START GAME 2 */

.matchgame_23 h2 {
	color: #fff;
	font-family: 'chewy', cursive;
	padding-left: 10px;
}

.matchgame_23 .instruction {
	color: #fff;
	font-family: 'chewy', cursive;
	padding-left: 10px;
	font-size: 22px;
}

#game_container_23 {
	width: 100%;
    /* margin: 0; */
    /* padding: 0; */
    margin: 0 auto;
    /* padding-top: 40px; */
}

#game_container_23 #draggable_container_23, #game_container_23 #droppable_container_23, #game_container_23 #score_container_23 {
	    /* border: 1px solid #999; */
    width: 1000px;
    margin-bottom: 20px;
}

#game_container_23 #draggable_container_23 {
/* 	min-height: 125px; */
    position: relative;
}

#game_container_23 #droppable_container_23 {
/* 	height: 242px; */
}

#game_container_23 #score_container_23 {
/*	height: 80px;*/
}

#game_container_23 .dragthis, #game_container_23 .dropped, #game_container_23 .correct, #game_container_23 .incorrect {
	text-align: center;
    cursor: move;
    background: linear-gradient(90deg, rgba(195, 133, 47, 1) 0%, rgba(253, 230, 126, 1) 17%, rgba(193, 147, 60, 1) 72%, rgba(139, 76, 10, 1) 86%, rgba(170, 115, 7, 1) 100%);
    width: 190px;
    border: 3px solid #e8a620;
    padding: 5px;
    float: left;
    margin: 5px 0 0 5px;
    color: #000000;
    font-size: 20px;
    font-family: 'chewy', cursive;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
}

#game_container_23 .dropped, #game_container_23 .correct, #game_container_23 .incorrect {
	width: 188px;
    margin: 5px 0 5px 0;
    font-weight: 700;
    text-align: center;
    float: right;
}

#game_container_23 #draggable_container_23 div.ui-sortable-helper {
	-webkit-box-shadow: 3px 3px 5px 0px #333; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
	box-shadow: 3px 3px 5px 0px #333; /* Opera 10.5, IE9+, Firefox 4+, Chrome 6+, iOS 5 */
	-moz-box-shadow:    3px 3px 5px 0px #333;
}

#game_container_23 #droppable_container_23 div.subcontainer {
	display: flex;
    align-items: center;
    justify-content: space-between;
	text-align: left;
    width: 100%;
    /* height: 220px; */
    border: 1px solid #990;
    font-size: 24px;
    font-family: 'Chewy', cursive;
    color: #333;
    background-color: #FFC;
    padding: 0 20px;
    margin: 5px 0 0 5px;
    float: left;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
}

.answer-container {
  display: flex; /* Optional: keeps buttons aligned if there are multiple */
  align-items: center; /* Ensures the button is vertically aligned */
}

#game_container_23 #button_container_23 {
	display: flex;
    width: 1000px;
    justify-content: flex-end;
    padding-top: 20px;
}

#button_container_23 input {
	margin: 0 10px;
    padding: 0 10px;
}

#game_container_23 .correct {
	border: 1px solid #393;
	background: linear-gradient(90deg, #8BC34A 0%, #4CAF50 17%, #388E3C 72%, #2E7D32 86%, #7CB342 100%);
    color: #fff;
}

#game_container_23 .incorrect {
	border: 1px solid #933;
	background: linear-gradient(90deg, #F44336 0%, #D32F2F 17%, #E91E63 72%, #AD1457 86%, #F06292 100%);
    color: #fff;
}

#game_container_23 #score_container_23, #game_container_23 #message_23 {
	background: #ffffff;
    text-align: center;
    color: #e8a620;	
	text-align: center;
	color: #666;
	font-size: 24px;
	font-family: 'chewy', cursive;
	line-height: 1em;
}

#game_container_23 #score_container_23 #score_text {
	padding: 20px;
}

#game_container_23 #message_23 {
	display: flex;
	position: absolute;
	border: 1px solid #333;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	-webkit-box-shadow: 3px 3px 5px 0px #333; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
	box-shadow: 3px 3px 5px 0px #333; /* Opera 10.5, IE9+, Firefox 4+, Chrome 6+, iOS 5 */
	-moz-box-shadow: 3px 3px 5px 0px #333;
}

#game_container_23 #message_23 #text {
	padding-bottom: 10px;
}

#game_container_23 #score_container_23 .score {
	font-weight: bold;
}

/* START GAME 4 - TRUE OR FALSE */

#opening {
/*     width: 500px; */
    height: 300px;
    background-color: #ed9d262e;
    box-shadow: 0px 4px rgb(239 160 42 / 45%);
    margin: auto;
    /* margin-top: 100px; */
    position: relative;
    border-radius: 10px;
}

#startgame {
    width: 350px;
    height: 70px;
    background-color: rgb(239 166 39);
    box-shadow: 0px 4px rgb(255 206 99);
    color: #fff;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
    text-align: center;
    line-height: 70px;
    /* font-family: 'Sniglet', cursive; */
    font-size: 1.5em;
    cursor: pointer;
    transition: all cubic-bezier(0.6, -0.28, 0.735, 0.045);
    z-index: 1;
}
#inst{
    font-family: 'Chewy', cursive; 
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    color: rgb(48, 17, 107);
    position:relative;
    top: 100px;
}
#inst2,#inst3{
    font-family: 'Chewy', cursive; 
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    color: rgb(0, 0, 0);
    position:relative;
    top: 200px;
}
.rules {
	position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.rules h3 {
    display: inline-block;
    font-size: 20px;
    padding: 20px 30px;
    border-radius: 30px;
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
    color: var(--dark);
    padding-right: 30px;
}
.rules h3::after {
    background-size: cover;
    background-position: left;
}
.rules h3::after {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    height: 100%;
    width: 100%;
    background: url(../img/shape/3.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
}
#startgame:hover {
    background-color: rgb(252, 150, 66);
    box-shadow: 0px 4px rgb(139, 70, 14);
}

#startgame:active {
/*     top: 159.5px; */
    box-shadow: 0px 0px rgb(139, 70, 14);
}

#startquiz {
    display: none;
    /*     width: 500px; */
    height: 300px;
    background-color: #ed9d262e;
    box-shadow: 0px 4px rgb(239 160 42 / 45%);
    margin: auto;
    /* margin-top: 100px; */
    position: relative;
    border-radius: 10px;
}

.quiz-box {
	position: relative;
	top: 10%;
    left: 5%;
/*     bottom: 0; */
/*     transform: translateX(0%) translateY(-50%); */
}

#score {
/*     width: 100px; */
    height: 30px;
    color: #fff;
    font-size: 30px;
/*     background-color: #2eda76; */
/*     box-shadow: 0px 4px rgb(25, 138, 40); */
    position: absolute;
/*     left: 200px; */
    top: 20px;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    line-height: 30px;
    font-family: 'Chewy', cursive;

}
#correct {
    width: 150px;
    height: 50px;
    background-color: #2eda76;
    color: #fff;
    position: absolute;
    left: 370px;
    top: 0;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    font-size: 30px;
    line-height: 50px;
    font-family: 'chewy', cursive;
	display: none;
}
#wrong {
	width: 150px;
    height: 50px;
    background-color: #e63e3e;
    color: #fff;
    position: absolute;
    left: 370px;
    top: 0;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    font-size: 30px;
    line-height: 50px;
    font-family: 'chewy', cursive;
    display: none;
   
}

#questions {
/*     width: 350px; */
    height: 70px;
    color: #fff;
/*     background-color: rgb(110, 235, 197); */
/*     box-shadow: 0px 4px rgb(15, 100, 75); */
    position: absolute;
/*     left: 75px; */
    top: 70px;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    line-height: 70px;
    font-family: 'Chewy', cursive;
    font-size: 30px;
}

#options {
/*     width: 100%; */
    height: 180px;
/*     background-color: rgb(230, 201, 38); */
/*     box-shadow: 0px 4px rgb(134, 119, 31); */
    position: absolute;
/*     left: 75px; */
    top: 100px;
    border-radius: 10px;

}

.choice {

    width: 90px;
    height: 60px;
    font-size: 30px;
    background-color: rgb(211, 208, 208);
    box-shadow: 0px 4px rgb(109, 109, 109);
    border-radius: 10px;
    position: absolute;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    font-family: 'Chewy', cursive;
    cursor: pointer;
    transition: all cubic-bezier(0.6, -0.28, 0.735, 0.045);

}

#choice1 {
/*     left: 30px; */
    top: 55px;
}

#choice2 {
    left: 100px;
    top: 55px;
}


/* browsers don't support the hover css , turn this on if u want to try it on pc
/*#choice1:hover {

    background-color: rgb(233, 151, 229);
    box-shadow: 0px 4px rgb(158, 70, 154);
}

#choice2:hover {

    background-color: rgb(233, 151, 229);
    box-shadow: 0px 4px rgb(158, 70, 154);
}

#choice3:hover {

    background-color: rgb(233, 151, 229);
    box-shadow: 0px 4px rgb(158, 70, 154);
}

#choice4:hover {

    background-color: rgb(233, 151, 229);
    box-shadow: 0px 4px rgb(158, 70, 154);
}

/*#choice1:active {
    top: 14px;
    background-color: rgb(233, 151, 229);
    box-shadow: 0px 0px rgb(158, 70, 154);
}

#choice2:active {
    top: 14px;
    background-color: rgb(233, 151, 229);
    box-shadow: 0px 0px rgb(158, 70, 154);
}

#choice3:active {
    top: 114px;
    background-color: rgb(233, 151, 229);
    box-shadow: 0px 0px rgb(158, 70, 154);
}

#choice4:active {
    top: 114px;
    background-color: rgb(233, 151, 229);
    box-shadow: 0px 0px rgb(158, 70, 154);
}*/




#start {
    width: 120px;
    height: 40px;
    background-color: rgb(231, 105, 105);
    box-shadow: 0px 4px rgb(177, 31, 31);
    color: #fff;
    border-radius: 10px;
    position: absolute;
    right: 80px;
    top: 0;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    font-family: 'Chewy', cursive;
    cursor: pointer;

}

#start:hover {

    background-color: rgb(223, 61, 61);
    box-shadow: 0px 4px rgb(100, 16, 16);
    color: white;
}

#start:active {
/*     top: 354px; */
    box-shadow: 0px 0px rgb(177, 31, 31);
}

#timeremaining {
    width: 100px;
    height: 40px;
    background-color: rgb(255 255 255);
    box-shadow: 0px 2px rgb(226 152 33);
    color: #000;
    border-radius: 15px;
    position: absolute;
    right: 220px;
    top: 0;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    font-family: 'Chewy', cursive;

}

#endgame{
    width: 350px;
    height: 260px;
    background-color: #32291c;
    border: 5px solid #f1a22f;
    position: absolute;
    left: 250px;
    top: 0;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    font-family: 'Chewy', cursive;
    font-size: 1.5em;
    display: none;
}

#endgame p {
	font-weight: 900;
    font-family: 'chewy', cursive;
    font-size: 30px;
    color: #fff;
    margin: 0;
}

#congratulations{
    width: 350px;
    height: 260px;
    background-color: #32291c;
    border: 5px solid #f1a22f;
    position: absolute;
    left: 250px;
    top: 0;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    font-family: 'Chewy', cursive;
    font-size: 1.5em;
    display: none;
}

#congratulations p {
	font-weight: 900;
    font-family: 'chewy', cursive;
    font-size: 30px;
    color: #fff;
    margin: 0;
}
