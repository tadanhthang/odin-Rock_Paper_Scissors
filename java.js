// Hàm để lấy lựa chọn ngẫu nhiên từ máy tính
function getComputerChoice() {
    const choices = ['kéo', 'búa', 'bao'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//player 
function getPlayerChoice() {
    const choices = ['keo', 'bua', 'bao'];
    let playerChoice = prompt('Nhập lựa chọn của bạn (kéo, búa, bao): ').toLowerCase();
    
    // Kiểm tra tính hợp lệ của lựa chọn
    while (!choices.includes(playerChoice)) {
        playerChoice = alert("Lựa chọn không hợp lệ. Vui lòng nhập lại (kéo, búa, bao):").toLowerCase();
    }

    return playerChoice;
}

// Hàm để chơi một vòng
function playRound(playerChoice, computerChoice) {
    console.log("Lựa chọn của bạn:", playerChoice);
    console.log("Lựa chọn của máy tính:", computerChoice);

    if (playerChoice === computerChoice) {
        console.log("Hòa! Không có điểm nào.");
        return 0; // Hòa
    }
    
    if (
        (playerChoice === 'kéo' && computerChoice === 'bao') ||
        (playerChoice === 'búa' && computerChoice === 'kéo') ||
        (playerChoice === 'bao' && computerChoice === 'búa')
    ) {
        console.log("Bạn thắng!");
        return 1; // Người chơi thắng
    } else {
        console.log("Bạn thua!");
        return -1; // Người chơi thua
    }
  }

  // Khai báo điểm số
let playerScore = 0;
let computerScore = 0;
  
// Gọi hàm để lấy lựa chọn của người chơi và máy tính
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
  
  playRound(playerSelection, computerSelection);



// Chơi 5 vòng
for (let i = 0; i < 2; i++) {
    console.log(`\n-- Vòng ${i + 1} ---`);
    const playerChoice = getPlayerChoice();
    const computerSelection = getComputerChoice();
    
    const result = playRound(playerChoice, computerSelection);
    
    if (result === 1) {
        playerScore++;
    } else if (result === -1) {
        computerScore++;
    }
}

// In ra kết quả cuối cùng
console.log("\n--- Kết quả cuối cùng ---");
alert("Điểm của bạn: " + playerScore);
alert("Điểm của máy tính:"+ computerScore);

if (playerScore > computerScore) {
    alert("Bạn là người chiến thắng!");
} else if (computerScore > playerScore) {
    alert("Máy tính là người chiến thắng!");
} else {
    alert("Trò chơi kết thúc với kết quả hòa!");
}

