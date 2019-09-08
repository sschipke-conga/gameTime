import $ from 'jquery';

export default {

appendPlayerNames(p1, p2) {
    $('#player1-name').text(p1);
    $('#player2-name').text(p2);
},

appendCorrectGuess(id, index, answer, score) {
  $(`#answer${index + 1}`).text(answer.answer);
  $(`#score${index + 1}`).text(answer.respondents);
  $(`#player${id}-score`).text(score);
},

displayQuestion(question) {
    $('h1').text(question);
},

displayRound(count) {
  let roundText = count <= 2 ? count : "FAST MONEY";
  $('#round-counter').text(roundText);
},

displayStartModal(round, p1) {
  $(`<div id="start-modal" class="modal-structure">
      <div class="modal-content">
        <h6>Ready to feud?</h6>
        <h6>ROUND: ${round}</h6>
        <ul>
          <li class="modal-li">Each player will alternate guessing the top 3 reponses to a question.</li>
          <li class="modal-li">When a correct guess is made, that player's score will increase by the number of responses.</li>
          <li class="modal-li">The round will end after all three responses have been guessed.</li>
          <li class="modal-li">After 2 rounds you will play a FAST MONEY Round!</li>
        </ul>
        <h6>${p1} you are up first!</h6>
        <h6>Get ready!</h6>
        <button class="close-modal-start" type="button">LET'S FUED</button>
      </div>
    </div>`).insertAfter('#main-survey-guess')
},

displayRoundModal(round, p2) {
  $(`<div id="round-modal" class="modal-structure">
      <div class="modal-content">
        <h6>Nice work!</h6>
        <h6>Up Next... ROUND: ${round}</h6>
        <h6>${p2} it is your turn to guess first!</h6>
        <p class="modal-p">Click the button when you are ready.</p>
        <button class="close-modal-round" type="button">START ROUND 2</button>
      </div>
    </div>`).insertAfter('#main-survey-guess')
},

displayFastMoneyModal(round, p1, p2) {
  $(`<div id="fastmoney-modal" class="modal-structure">
    <div class="modal-content">
      <h6>Time to think fast!</h6>
      <h6>ROUND: ${round}</h6>
      <ul>
        <li>Each player will have 30 seconds to guess as many responses as they can.</li>
        <li>Before starting each player will choose a multiplier between 1 and 5.</li>
        <li>After each player has had a turn, their scores will be increased by their correct responses total multiplied by their chosen multiplier.</li>
        <li>If a player does not make any correct guesses, their score will be decreased by their number of guesses multiplied by their chosen multiplier. </li>
      </ul>
        <div id="multipliers">
          <label for="p1-multiplier">${p1}, Choose your Multiplier</label>
          <select id="p1-multiplier">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label for="p2-multiplier">${p2}, Choose your Multiplier</label>
          <select id="p2-multiplier">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      <h6>Be Ready ${p1}! You are going first!</h6>
      <h6>Timer will start when button is clicked</h6>
      <button class="close-modal-fast-money" type="button">Start FAST MONEY Round 1</button>
    </div>
  </div>`).insertAfter('#main-survey-guess')
},

displayFastMoneyModal2(round, p2) {
  $(`<div id="fastmoney-modal2" class="modal-structure">
    <div class="modal-content">
      <h6>Great job!</h6>
      <h6>ROUND: ${round}</h6>
      <h6>${p2} it is your turn!</h6>
      <h6>Timer will start when button is clicked</h6>
      <button class="close-modal-fast-money2" type="button">Start FAST MONEY Round 2</button>
    </div>
  </div>`).insertAfter('#main-survey-guess')
},

displayWinnerModal(winner, loser) {
  $(`<div id="winner-modal" class="modal-structure">
    <div class="modal-content">
       <h6>Game Over!</h6>
       <h6>${winner.name} is the winner!!!</h6>
       <p class="modal-p">The final score:</p>
       <p class="modal-p">${winner.name} => ${winner.score}</p>
       <p class="modal-p">${loser.name} => ${loser.score}</p>
       <p class="modal-p">Great Job! Click below to play again.</p>
       <button class="new-game">git reset</button>
     </div>
  </div>`).insertAfter('#main-survey-guess')
},

changeTimerColor() {
  $('#timer').css('background-color', 'pink');
},

};
