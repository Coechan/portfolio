      let n1 = document.querySelector('em');
      let n2 = document.querySelector('strong');
      let n3 = document.querySelector('h1');
      let n4 = document.querySelector('span');
      let n5 = document.querySelector('#block');
      
      let a1 = RoughNotation.annotate(n1, { type: 'underline', color: 'blue' });
      let a2 = RoughNotation.annotate(n2, { type: 'circle', color: 'red', padding: 10 });
      let a3 = RoughNotation.annotate(n3, { type: 'box', color: 'orange' });
      let a4 = RoughNotation.annotate(n4, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
      let a5 = RoughNotation.annotate(n5, { type: 'bracket', color: 'red', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 })
      
      a1.show();
      a2.show();
      a3.show();
      a4.show();
      a5.show();