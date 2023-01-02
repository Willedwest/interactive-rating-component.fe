//Getting Element from the DOM

const submitBtn = document.querySelector('#submit');

let result = document.querySelector('.report')

const rating = document.querySelectorAll('.ratings');

rating.forEach((rate) =>{
  rate.addEventListener('click', (e) => {
    let rated = e.target.innerText;
    result.innerText = "You selected " + rated + " Out of " + 5
  });
});

submitBtn.addEventListener('click', _ => {
  document.body.classList.add('show')
})

