function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const name = getQueryParam("name");

// Danh sách mã code + màu trái tim
const codes = {
    "Cô Lệ": { code: "1024", color: "red" },
    "Cô Huyền": { code: "2048", color: "blue" },
    "Cô Uyên": { code: "3567", color: "green" },
    "Cô Hương": { code: "4829", color: "yellow" },
    "Cô Hoanh": { code: "5936", color: "purple" },
    "Cô Sinh": { code: "6741", color: "orange" }
};


document.getElementById("verifyBtn").addEventListener("click", function () {
    const inputCode = document.getElementById("codeInput").value;

    if (name && codes[name] && codes[name].code === inputCode) {
        document.getElementById("greeting").innerText = `Chúc mừng, ${decodeURIComponent(name)}! Chúc bạn ngày 8/3 vui vẻ, thật nhiều niềm vui bên gia đình bạn bè, luôn đạt được những mục tiêu trong cuộc sống 🎉`;
        document.getElementById("greeting").style.display = "block";
        document.getElementById("backLink").style.display = "block";
        document.getElementById("codeInput").style.display = "none";
        document.getElementById("verifyBtn").style.display = "none";
        document.getElementById("errorMessage").innerText = "";

        startFireworks();
        startBalloons();
        startHearts(codes[name].color);
    } else {
        document.getElementById("errorMessage").innerText = "Mã code không đúng, vui lòng thử lại!";
    }
});

// Pháo hoa
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const radius = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fill();
    }

    setInterval(createFirework, 100);
}

// Bóng bay
function startBalloons() {
    createFloatingEffect("balloon", "balloon-container");
}

// Trái tim (màu riêng)
function startHearts(color) {
    createFloatingEffect("heart", "heart-container", color);
}

function createFloatingEffect(className, containerId, color = null) {
    const container = document.getElementById(containerId);
    function createElement() {
        const el = document.createElement("div");
        el.classList.add(className);
        el.style.left = Math.random() * 100 + "vw";
        if (color) el.style.backgroundColor = color; // Set màu cho trái tim
        container.appendChild(el);
        setTimeout(() => el.remove(), 5000);
    }
    setInterval(createElement, 500);
}
