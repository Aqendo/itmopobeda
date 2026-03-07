window.onload = () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    const epochUtcMs = Date.UTC(1900, 2, 25, 21, 0, 0);
    const msPerYear = 365.2425 * 24 * 60 * 60 * 1000;

    function update() {
        const nowUtcMs = new Date;
        const elapsedMs = nowUtcMs - epochUtcMs;
        const years = elapsedMs / msPerYear;
        document.getElementById('years').textContent = `${years.toFixed(9)}`;
        requestAnimationFrame(update);
    }
    update();
}

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});