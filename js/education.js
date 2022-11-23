const nav1 = document.querySelector('.aboutme');
const nav2 = document.querySelector('.projects')
const nav3 = document.querySelector('.education');
const nav4 = document.querySelector('.contact')

const t2 = document.getElementById('degree')
const t3 = document.getElementById('education')
const t4 = document.getElementById('languages')
const t5 = document.getElementById('skills')
const t6 = document.getElementById('work')
const t7 = document.getElementById('cv')


const roughProjects = [];
let time = 0;

roughProjects.push(RoughNotation.annotate(nav1, { type: 'highlight', color: 'lavender' , multiline: true}));
roughProjects.push(RoughNotation.annotate(nav2, { type: 'highlight', color: 'gold' , multiline: true}));
roughProjects.push(RoughNotation.annotate(nav3, { type: 'highlight', color: 'mistyrose' , multiline: true}));
roughProjects.push(RoughNotation.annotate(nav4, { type: 'highlight', color: 'powderblue' , multiline: true}));
roughProjects.push(RoughNotation.annotate(t2, { type: 'bracket', color: 'gold', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 }))
roughProjects.push(RoughNotation.annotate(t3, { type: 'underline', color: 'lavender'}))
roughProjects.push(RoughNotation.annotate(t4, { type: 'underline', color: 'powderblue'}))
roughProjects.push(RoughNotation.annotate(t5, { type: 'underline', color: 'mistyrose'}))
roughProjects.push(RoughNotation.annotate(t6, { type: 'underline', color: 'gold' }))
roughProjects.push(RoughNotation.annotate(t7, { type: 'highlight', color: 'gold' , multiline: true, iterations: 4}));

roughProjects.forEach( (item) => {
    setTimeout( () =>{
      item.show();
    }, time)
    time = time + 600;
  })