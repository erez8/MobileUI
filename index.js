function shadow(options) {
    let images = document.querySelectorAll('.shadow');
    if(options.shadowType === 'hard') {
        options.shadowType = '0px';
    } else {
        options.shadowType = '10px';
    }

    images.forEach((img) => {
        img.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0,0,0,0.12)`;

        if(options.padding) {
            img.style.padding ='1em';
        }
    });
} 

const _shadow = shadow;
export { _shadow as shadow };