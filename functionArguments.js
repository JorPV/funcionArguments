const wallDecoration = function (color,wall) {
    console.log('The wall has been painted ' + color);
    console.log('The ' + wall + ' wall has been painted ' + color);
};

const wallColor ='orange';
const wallPosition ='north';

wallDecoration(wallColor);
wallDecoration(wallPosition);
