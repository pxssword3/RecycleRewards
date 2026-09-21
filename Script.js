// RecycleRewards App

let points = 0;

// Get elements from the page
const pointsDisplay = document.getElementById("points");
const recycleButton = document.getElementById("recycleBtn");
const rewardButton = document.getElementById("rewardBtn");
const message = document.getElementById("message");

// Add recycling points
if (recycleButton) {
    recycleButton.addEventListener("click", function () {
        points += 10;

        if (pointsDisplay) {
            pointsDisplay.textContent = points;
        }

        if (message) {
            message.textContent = "♻️ Great job! You earned 10 recycling points!";
        }
    });
}

// Check rewards
if (rewardButton) {
    rewardButton.addEventListener("click", function () {
        if (points >= 50) {
            if (message) {
                message.textContent =
                    "🎁 Congratulations! You have enough points to claim a reward!";
            }
        } else {
            const remaining = 50 - points;

            if (message) {
                message.textContent =
                    "⭐ Keep recycling! You need " +
                    remaining +
                    " more points to unlock a reward.";
            }
        }
    });
}
