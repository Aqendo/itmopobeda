window.onload = () => {
    setInterval(() => {
        let measuring_element = document.createElement("span")
        measuring_element.style = "position:absolute; visibility:hidden; white-space:nowrap; font-feature-settings:'tnum' 1;"
        measuring_element.textContent = "888.888888888"
        document.body.append(measuring_element)
        const px = Math.ceil(measuring_element.getBoundingClientRect().width);
        document.getElementById('years').style.minWidth = px + 'px';
        measuring_element.remove();
    }, 1)

    document.getElementById("year").textContent = new Date().getFullYear()
    Decimal.set({ precision: 12 });
    const MSK_OFFSET_MS = new Decimal(3 * 60 * 60 * 1000);
    const epochUtcMs = new Decimal(Date.UTC(1900, 2, 25, 21, 0, 0));
    const msPerYear = new Decimal(365.2425)
        .times(24).times(60).times(60).times(1000);

    function update() {
        const nowUtcMs = new Decimal(Date.now());
        const nowMskMs = nowUtcMs.plus(MSK_OFFSET_MS);
        const elapsedMs = nowMskMs.minus(epochUtcMs.plus(MSK_OFFSET_MS));
        const years = elapsedMs.div(msPerYear);
        document.getElementById('years').textContent = years.toString().padEnd(13, "0");
        requestAnimationFrame(update);
    }
    update();
}
