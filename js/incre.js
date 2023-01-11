const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

const totalCount = document.getElementById("total-count");

var count = 0;

totalCount.innerHTML = count;

const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);


const incrementCount1 = document.getElementById("increment-count1");
const decrementCount1 = document.getElementById("decrement-count1");

const totalCount1 = document.getElementById("total-count1");

var count1 = 0;

totalCount1.innerHTML = count1;

const handleIncrement1 = () => {
  count1++;
  totalCount1.innerHTML = count1;
};

const handleDecrement1 = () => {
  count1--;
  totalCount1.innerHTML = count1;
};

incrementCount1.addEventListener("click", handleIncrement1);
decrementCount1.addEventListener("click", handleDecrement1);


const incrementCount2 = document.getElementById("increment-count2");
const decrementCount2 = document.getElementById("decrement-count2");

const totalCount2 = document.getElementById("total-count2");

var count2 = 0;

totalCount2.innerHTML = count2;

const handleIncrement2 = () => {
  count2++;
  totalCount2.innerHTML = count2;
};

const handleDecrement2 = () => {
  count2--;
  totalCount2.innerHTML = count2;
};

incrementCount2.addEventListener("click", handleIncrement2);
decrementCount2.addEventListener("click", handleDecrement2);
