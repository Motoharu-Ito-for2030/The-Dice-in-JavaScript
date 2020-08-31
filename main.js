'use strict';

{

  const btn = document.getElementById('btn');

  const dice = document.getElementById('dice');

  btn.addEventListener('click', function() {

    const min = Math.ceil(1)
    const max = Math.floor(6)
    const r = Math.floor(Math.random() * (max - min) + min);

    dice.textContent = r;
  });
}