const handleUpdate = (e) => {
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
}

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => {
    input.addEventListener('change', e => handleUpdate(e));
    input.addEventListener('mousemove', e => handleUpdate(e));
})