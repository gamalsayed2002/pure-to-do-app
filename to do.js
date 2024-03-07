// wen i click on btn create a new task with a new value and submit form

const btn = document.querySelector("button");
const form = document.querySelector("form");

const input = document.querySelector("input");
form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const newtask = `
    <div class="task">
    <span class="icon-star icon"></span>
<p class="task-text" lang="ar">${input.value}</p>
<div>
    <span class="icon-trash-o icon"></span>
    <!-- <span class="icon-heart icon"></span> -->
    <span class="icon-angry2 icon"></span>
</div>
</div>
    
    `;
  container.innerHTML += newtask;
  input.value = "";
});
// end

// wen i click on the trach delete the task to do this i should call father of element

const container = document.getElementById("container");

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o icon") {
    eo.target.parentElement.parentElement.remove();
  }
  // wen i click on the angry reblace it with heeart and but line on the task
  else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");
    const heart = `<span class="icon-heart icon"></span> `;
    eo.target.parentElement.parentElement

      .getElementsByClassName("task-text")[0]
      .classList.add("finish");
    eo.target.parentElement.innerHTML += heart;
  }
  // wen i click on the heart back evrey thing
  else if (eo.target.className == "icon-heart icon") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");

    eo.target.classList.add("dn");
    const addangry = `<span class="icon-angry2 icon"></span> `;
    eo.target.parentElement.innerHTML += addangry;
  } 
  else if (eo.target.className == "icon-star icon") {
    eo.target.classList.add("orange");
    container.prepend(eo.target.parentElement);
  } else if (eo.target.className == "icon-star icon orange") {
    eo.target.classList.remove("orange");
  }
});
