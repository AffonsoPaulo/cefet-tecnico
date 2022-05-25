const effintensity = document.querySelector("#intensity");
const effect = document.querySelector("#effect");
const image = document.querySelector("#image");

const filter = () => effect.value ?? 'none' 
const intensity = () => effintensity.value ?? 0
const metric = effects => {
    if (effects == 'blur') return 'px';
    if (effects == 'hue-rotate') return 'deg';
    return '%';
}

const setFilter = () => {
    const intensityValue = intensity() + metric(filter());
    image.style.filter = `${filter()}(${intensityValue})`
}

effintensity.addEventListener("click", setFilter)
effect.addEventListener("click", setFilter)


