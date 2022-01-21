let todo_form = document.getElementById("todo_form");
let list_group = document.getElementById("list-group");
todo_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input_value = this.querySelector('#todo_form input[type="text"]').value;
  let select_value = this.querySelector(
    '#todo_form #select[name="value_condition"]'
  ).value;

  if (select_value == "" || input_value == "") {
    alert("All the field are required !");
  } else {
    //Create li tag
    let li = document.createElement("li");
    li.className = "list-group-item";
    let li_etxt = document.createTextNode(input_value);
    list_group.appendChild(li);

    //Crete span tag for important
    let span = document.createElement("span");
    span.innerHTML = select_value;

    //Create close button tag
    let closs_btn = document.createElement("button");
    closs_btn.innerHTML = "&times";
    closs_btn.className = "close";
    li.appendChild(closs_btn);
    li.insertBefore(li_etxt, closs_btn);
    li.insertBefore(span, closs_btn);

    //Close button function
    closs_btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }

  //Make empty filed
  this.querySelector('#todo_form input[type="text"]').value = "";
  this.querySelector('#todo_form #select[name="value_condition"]').value = "";
});

/**
 * Fiver order counter
 */

counter_form.addEventListener("submit", function (e) {
  e.preventDefault();
  //let counter_form = document.getElementById("counter_form");
  let show_counter = document.getElementById("show_counter");
  let counter_text = document.querySelector(".counter_text");
  let remaining_text = document.querySelector(".remaining_text");

  this.style.pointerEvents = "none";
  let input_date = this.querySelector('input[type="date"]').value;
  let input_time = this.querySelector('input[type="time"]').value;

  //Field validation & function

  if (
    this.querySelector('input[type="time"]').value == "" ||
    this.querySelector('input[type="date"]').value == ""
  ) {
    alert("Please select a date and time");
  } else {
    let interval = setInterval(function () {
      let curent_time = new Date();
      let future_time = new Date(input_date + " " + input_time);
      let gap = future_time.getTime() - curent_time.getTime();

      let sec = 1000;
      let min = sec * 60;
      let hour = min * 60;
      let day = hour * 24;

      let total_day = Math.floor(gap / day);
      let total_hur = Math.floor((gap % day) / hour);
      let total_mint = Math.floor((gap % hour) / min);
      let total_sec = Math.floor((gap % min) / sec);

      show_counter.innerHTML = `${
        total_day <= 9 ? "0" + total_day : total_day
      } : ${total_hur <= 9 ? "0" + total_hur : total_hur} : ${
        total_mint <= 9 ? "0" + total_mint : total_mint
      } : ${total_sec <= 9 ? "0" + total_sec : total_sec} `;
      if (
        total_day == 0 &&
        total_hur == 0 &&
        total_mint == 0 &&
        total_sec == 0
      ) {
        clearInterval(interval);
        counter_form.style.pointerEvents = "auto";
      }
    }, 1000);

    counter_text.style.display = "flex";
    remaining_text.style.display = "block";

    this.querySelector('input[type="time"]').value = "";
    this.querySelector('input[type="date"]').value = "";
  }
});

/**
 * Age calculation
 */

age_cal_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let birth_date = this.querySelector("input[type=date]").value;

  let current_date = new Date().getTime();
  let input_birth_date = new Date(birth_date).getTime();
  let date_different = current_date - input_birth_date;
  let total_s = Math.floor(date_different / 1000);
  let total_m = Math.floor(total_s / 60);
  let total_h = Math.floor(total_m / 60);
  let total_d = Math.floor(total_h / 24);
  let total_mont = Math.floor(total_d / 30);
  let total_y = Math.floor(total_mont / 12);

  // show_age.innerText = "  You age is ...... ";
  let show_age_text = (document.querySelector(
    ".show_age_text"
  ).innerHTML = `<p>Your age is.....</p>`);
  let show_year = (document.querySelector(".year").innerText =
    "Year : " + total_y);
  let show_month = (document.querySelector(".month").innerHTML =
    "Month : " + total_mont);
  let show_day = (document.querySelector(".day").innerHTML =
    "Day : " + total_d);
  let show_hour = (document.querySelector(".hour").innerHTML =
    "Hours : " + total_h);
  let show_munit = (document.querySelector(".munit").innerHTML =
    "Munits : " + total_m);
  let show_second = (document.querySelector(".second").innerHTML =
    "Seconds : " + total_s);
});
