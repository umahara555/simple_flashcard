var words = [
              { idioms: "", mean: ""},
            ];
var card_num = 1,
    card_max = words.length,
    is_mean = false;

document.addEventListener('DOMContentLoaded', function() {
  card_num = 1;
  let slider = document.getElementById('slider');
  slider.value = 1;
  slider.min = 1;
  slider.max = card_max;
  slider.step = 1;
});

window.onload = function() {
  let card = document.getElementById('card'),
      slider = document.getElementById('slider'),
      prev_div = document.getElementById('prev'),
      next_div = document.getElementById('next');

  card.innerText = words[card_num-1]["idioms"];

  slider.addEventListener("change", function() {
      // console.log(slider.value);
      card_num = slider.value;
      card.innerText = words[card_num-1]["idioms"];
  }, false);

  prev_div.addEventListener("mouseup", function() {
      // console.log('prev');
      if (is_mean){
        is_mean = false;
        card.innerText = words[card_num-1]["idioms"];
      }else {
        if (1 < card_num){
          card_num = parseInt(card_num) - 1;
          is_mean = true;
          card.innerText = words[card_num-1]["mean"];
        }
      }
      slider.value = card_num;
  }, false);

  next_div.addEventListener("mouseup", function() {
      // console.log('next');
      if (is_mean){
        if (card_num < card_max){
          card_num = parseInt(card_num) + 1;
          is_mean = false;
          card.innerText = words[card_num-1]["idioms"];
        }
      } else {
        is_mean = true;
        card.innerText = words[card_num-1]["mean"];
      }
      slider.value = card_num;
  }, false);
}
