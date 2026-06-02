// ===============================
//  STOP 3D BACKGROUND ON INTERNAL PAGES
// ===============================
if (!document.body.classList.contains("home-page")) {
    // Dacă NU suntem pe homepage, nu pornim fundalul 3D
    console.log("3D background disabled on this page.");
    return;
}

// ===============================
//  3D BACKGROUND SCRIPT (HOMEPAGE ONLY)
// ===============================

// Canvas setup
const canvas = document.getElementById("bg-grid");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];
const DOT_COUNT = 120;

// Generate dots
for (let i = 0; i < DOT_COUNT; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 3 + 1,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2
    });
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(dot => {
        dot.y -= dot.speed * dot.z;

        if (dot.y < 0) {
            dot.y = canvas.height;
            dot.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(106,168,255,0.8)";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

// Resize handler
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
