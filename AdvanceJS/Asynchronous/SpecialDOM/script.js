const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

const callOuter = (event) => {
    console.table([
        {
           Description: "I am the outer one",
           Target: event.target, //targeted element
           CurrentTarget: event.currentTarget,
        },
    ]);
};

const callMiddle = (event) => {
    console.table([
        {
           Description: "I am the middle one",
           Target: event.target, //targeted element
           CurrentTarget: event.currentTarget,
        },
    ]);
};

const callInner = (event) => {
    console.table([
        {
           Description: "I am the inner one",
           Target: event.target, //targeted element
           CurrentTarget: event.currentTarget,
        },
    ]);
   // event.stopPropagation();
};

// Bubbling
// outer.addEventListener('click',callOuter);
// middle.addEventListener('click',callMiddle);
// inner.addEventListener('click',callInner);

//Capturing
// To achieve capturing phase, use the 3rd parameter of the addEventListener() methode
// addEventListener(event, function, useCapture)
// it specifies whether the event should be captured during the capturing phase or not, setting it true will achieve the capturing
outer.addEventListener('click',callOuter,true);
middle.addEventListener('click',callMiddle,true);
inner.addEventListener('click',callInner,true);