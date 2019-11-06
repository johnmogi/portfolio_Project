const stage= document.getElementById("stage")
const div0 = document.createElement("div")
const div1 = document.createElement("div")
const div2 = document.createElement("div")

stage.append(div0)
div0.className = ("col")
div0.append(div1)
div1.className = ("card text-white bg-primary mb-3")

div1.setAttribute("data-toggle", "modal")
div1.setAttribute("data-target", "#exampleModal")
div1.append(div2)
// <div
// class="card text-white bg-primary mb-3"
// data-toggle="modal"
// data-target="#exampleModal"
// style="max-width: 18rem;"
// >
// <img
//   src="css/images/prima.png"
//   class="bd-placeholder-img card-img-top"
//   width="100%"
//   height="180"
// />

// <div class="card-body">
//   <h5 class="card-title">Project title</h5>
//   <p class="card-text">
//     Some quick example text to build on the card title and make up
//     the bulk of the card's content.
//   </p>
// </div>
// </div>
