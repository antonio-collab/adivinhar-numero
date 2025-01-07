const cards = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31],
    [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31],
    [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  ]
  
  let currentCard = 0
  let guessedAge = 0
  let playerName = ''
  
  const instruction = document.getElementById('instruction')
  const cardDiv = document.getElementById('card')
  const yesButton = document.getElementById('yesButton')
  const noButton = document.getElementById('noButton')
  const restartButton = document.getElementById('restartButton')
  const startSection = document.getElementById('startSection')
  const nameInput = document.getElementById('nameInput')
  const startButton = document.getElementById('startButton')
  const buttons = document.querySelector('.buttons')
  
  // Função para iniciar o jogo
  function startGame() {
    playerName = nameInput.value.trim()
  
    if (playerName === '') {
      alert('Por favor, digite seu nome para começar!')
      return
    }
  
    startSection.style.display = 'none'
    instruction.style.display = 'block'
    buttons.style.display = 'flex'
    showCard()
  }
  
  // Função para exibir o próximo cartão
  function showCard() {
    if (currentCard < cards.length) {
      cardDiv.textContent = cards[currentCard].join(', ')
    } else {
      instruction.textContent = `${playerName}! O número escolhido é ${guessedAge}!`
      cardDiv.textContent = ''
      yesButton.style.display = 'none'
      noButton.style.display = 'none'
      restartButton.style.display = 'block'
    }
  }
  
  // Função para reiniciar o jogo
  function restartGame() {
    currentCard = 0
    guessedAge = 0
    playerName = ''
    
    startSection.style.display = 'block'
    instruction.style.display = 'none'
    buttons.style.display = 'none'
    restartButton.style.display = 'none'
    nameInput.value = ''
  }
  
  // Evento para o botão "Sim"
  yesButton.addEventListener('click', () => {
    guessedAge += cards[currentCard][0]
    currentCard++
    showCard()
  })
  
  // Evento para o botão "Não"
  noButton.addEventListener('click', () => {
    currentCard++
    showCard()
  })
  
  // Evento para o botão "Começar"
  startButton.addEventListener('click', startGame)
  
  // Evento para o botão "Reiniciar"
  restartButton.addEventListener('click', restartGame)
  