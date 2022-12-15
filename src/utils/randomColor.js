export const randomColor = () => { 
    const r = Math.floor(Math.random() * (100));
    const g = Math.floor(Math.random() * (100));
    const b = Math.floor(Math.random() * (100));
    const color = `rgb(${r}%, ${g}%, ${b}%)`;
    return color;
}