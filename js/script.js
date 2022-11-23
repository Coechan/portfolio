
const n1 = document.querySelector('.highlight1');
const n2 = document.querySelector('.highlight2');
const n3 = document.querySelector('.highlight3');
const n4 = document.querySelector('.highlight4');
const n5 = document.querySelector('.highlight5');
const n6 = document.querySelector('.aboutme');
const n7 = document.querySelector('.projects')
const n8 = document.querySelector('.education');
const n9 = document.querySelector('.contact')

const roughElements = []
let seconds = 0;

roughElements.push(RoughNotation.annotate(n6, { type: 'highlight', color: 'lavender' , multiline: true}));
roughElements.push(RoughNotation.annotate(n7, { type: 'highlight', color: 'gold' , multiline: true}));
roughElements.push(RoughNotation.annotate(n8, { type: 'highlight', color: 'mistyrose' , multiline: true}));
roughElements.push(RoughNotation.annotate(n9, { type: 'highlight', color: 'powderblue' , multiline: true}));
roughElements.push(RoughNotation.annotate(n1, { type: 'highlight', color:'lavender', iterations: 4, multiline: true }));
roughElements.push(RoughNotation.annotate(n3, { type: 'highlight', color: 'mistyrose', iterations: 4, multiline: true}));
roughElements.push(RoughNotation.annotate(n4, { type: 'highlight', color: 'gold', iterations: 4, multiline: true}))
roughElements.push(RoughNotation.annotate(n2, { type: 'highlight', color:'powderblue', iterations: 4, multiline: true}));
roughElements.push(RoughNotation.annotate(n5, { type: 'highlight', color:'lavender', iterations: 4, multiline: true }));



roughElements.forEach( (item) => {
  setTimeout( () =>{
    item.show();
  }, seconds)
  seconds = seconds + 700;
})



// a1.show();
// a2.show();
// a3.show();
// a4.show();
// a5.show();
// a6.show();
// a7.show();
// a8.show();
// a9.show();

