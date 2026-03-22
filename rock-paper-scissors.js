let score=JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        loses:0,
        ties:0,
      };
      updateScoreElement();

      function playGame(playerMove) {
        const computerMove=pickComputerMove();
        let result='';

        if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'Tie.';
          } else if (computerMove === 'Paper') {
            result = 'You Lose.';
          } else {
            result = 'You Win.';
          }

        } 
        else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You Win.';
          } else if (computerMove === 'Paper') {
            result = 'Tie.';
          } else {
            result = 'You Lose.';
          }
        }
        else if(playerMove==='Scissors'){
          if(computerMove==='Scissors'){
            result='Tie.';
          }
          else if(computerMove==='Rock'){
            result='You Lose.';
          }
          else {
            result='You Win.';
          }
        }

      if(result==='You Win.')
      {
        score.wins+=1;
      }
      else if(result==='You Lose.')
      {
        score.loses+=1;
      }
      else if(result==='Tie.')
      {
        score.ties+=1;
      }


      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML=result;

      if(result === 'You Win.') {
        document.querySelector('.js-result').style.color = 'lightgreen';
      } else if(result === 'You Lose.') {
        document.querySelector('.js-result').style.color = 'red';
      } else {
        document.querySelector('.js-result').style.color = 'yellow';
      }

      document.querySelector('.js-moves').innerHTML=`You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png"
      class="move-icon">
      Computer`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML=`Wins: ${score.wins}, Loses: ${score.loses}, Tie: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber=Math.random();
        let computerMove='';
        
        if(randomNumber>=0 && randomNumber<1/3)
        {
          computerMove='Rock';
        } 
        else if(randomNumber>=1/3&&randomNumber<2/3)
        {
          computerMove='Paper';
        }
        else
        {
          computerMove='Scissors';
        }
        return computerMove;
      }
      function resetScore() {
        score = { wins: 0, loses: 0, ties: 0 };
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
      }