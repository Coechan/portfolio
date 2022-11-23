const nav1 = document.querySelector('.aboutme');
const nav2 = document.querySelector('.projects')
const nav3 = document.querySelector('.education');
const nav4 = document.querySelector('.contact')

const p1 = document.querySelector('.oracle');
const p2 = document.querySelector('.oracle-encrypter')
const p3 = document.querySelector('.code')
const p4 = document.getElementById('first-project')
const p10 = document.querySelector('.hangotaku')
const p11 = document.getElementById('second-project')
const p17 = document.getElementById('portfolio')
const p18 = document.getElementById('third-project')
const p24 = document.getElementById('ecommerce')
const p25 = document.getElementById('fourth-project')
const p32 = document.getElementById('alura-geek')
const p33 = document.getElementById('fifth-project')
const p38 = document.querySelector('.ba-multiplica')
const p39 = document.getElementById('ba-project')
const p40 =document.getElementById('sixth-project')
const p45 = document.querySelector('.codo-a-codo')

const roughProjects = [];
let time = 0;


roughProjects.push(RoughNotation.annotate(nav1, { type: 'highlight', color: 'lavender' , multiline: true}));
roughProjects.push(RoughNotation.annotate(nav2, { type: 'highlight', color: 'gold' , multiline: true}));
roughProjects.push(RoughNotation.annotate(nav3, { type: 'highlight', color: 'mistyrose' , multiline: true}));
roughProjects.push(RoughNotation.annotate(nav4, { type: 'highlight', color: 'powderblue' , multiline: true}));
roughProjects.push(RoughNotation.annotate(p1, { type: 'highlight', color: 'gold' , multiline: true, iterations: 4}));
roughProjects.push(RoughNotation.annotate(p2, { type: 'underline', color: 'lavender' }))
roughProjects.push(RoughNotation.annotate(p3, { type: 'underline', color: 'powderblue' }))
roughProjects.push(RoughNotation.annotate(p4, { type: 'bracket', color: 'mistyrose', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 }))
roughProjects.push(RoughNotation.annotate(p10, { type: 'underline', color: 'mistyrose' }))
roughProjects.push(RoughNotation.annotate(p11, { type: 'bracket', color: 'gold', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 }))
roughProjects.push(RoughNotation.annotate(p17, { type: 'underline', color: 'powderblue' }))
roughProjects.push(RoughNotation.annotate(p18, { type: 'bracket', color: 'lavender', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 }))
roughProjects.push(RoughNotation.annotate(p24, { type: 'underline', color: 'gold' }))
roughProjects.push(RoughNotation.annotate(p25, { type: 'bracket', color: 'gold', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 }))
roughProjects.push(RoughNotation.annotate(p32, { type: 'underline', color: 'mistyrose' }))
roughProjects.push(RoughNotation.annotate(p33, { type: 'bracket', color: 'powderblue', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 }))
roughProjects.push(RoughNotation.annotate(p38, { type: 'highlight', color: 'powderblue' , multiline: true, iterations: 4}));
roughProjects.push(RoughNotation.annotate(p39, { type: 'underline', color: 'gold' }))
roughProjects.push(RoughNotation.annotate(p40, { type: 'bracket', color: 'mistyrose', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 }))
roughProjects.push(RoughNotation.annotate(p45, { type: 'highlight', color: 'lavender' , multiline: true, iterations: 4}));
console.log(roughProjects)

roughProjects.forEach( (item) => {
  setTimeout( () =>{
    item.show();
  }, time)
  time = time + 600;
})


// const a1 = annotate(n1, { type: 'underline', color: 'blue' });
//       const a2 = annotate(n2, { type: 'circle', color: 'red', padding: 10 });
//       const a3 = annotate(n3, { type: 'box', color: 'orange' });
//       const a4 = annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
//       const a5 = annotate(n5, { type: 'bracket', color: 'red', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 })
      