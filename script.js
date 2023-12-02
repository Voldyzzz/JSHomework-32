const ref = {
  votingBlock: document.querySelector(".voting-block"),
  smilesImg: document.querySelectorAll(".smile"),
  counters: document.querySelectorAll(".counter"),
};

ref.votingBlock.addEventListener("click", hadlerVoteClick);

function hadlerVoteClick(event) {
  const target = event.target;

  if (target.nodeName === "IMG") {
    ref.smilesImg.forEach((smile, index) => {
      if (smile === target) {
        ref.counters[index].innerText = +ref.counters[index].innerText + 1;
      }
    });
  }
}
