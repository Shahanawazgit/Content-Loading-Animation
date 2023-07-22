const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const authorName = document.getElementById("authorName");
const authorDate = document.getElementById("authorDate");

const animated_bgs = document.querySelectorAll(".animated_bg");
const animated_bg_texts = document.querySelectorAll(".animated_bg_text");

setTimeout(getData, 3000);

function getData() {
  header.innerHTML = `<img src="me.png" alt="no-img">`;
  title.innerHTML = `Front-End Web Developer.`;
  excerpt.innerHTML = `Passionate Front-End Developer with extensive knowledge & hands-on experience of HTML5, CSS3, Bootstrap5, JavaScript, Git and GitHub.`;
  profile_img.innerHTML = `<img src="author.jpg" alt="no-img">`;
  authorName.innerHTML = `Shahanawaz`;
  authorDate.innerHTML = `Jan 01, 2023`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated_bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated_bg_text"));
}
