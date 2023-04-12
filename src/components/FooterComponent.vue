<template>
  <div>
    <footer class="pt-5 px-5 mt-3">
      <div class="row mt-5">
        <ul>
          <li>
            <a class="facebook" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="instagram" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between border-top"
      >
        <p class="text-center mt-2">Copyright &copy; Parallel 2023</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}
ul li {
  list-style: none;
}
ul li a {
  display: block;
  position: relative;
  width: 70px;
  height: 70px;
  line-height: 70px;
  font-size: 40px;
  text-align: center;
  text-decoration: none;
  color: #404040;
  margin: 0 30px;
  transition: 0.5s;
}
ul li a span {
  position: absolute;
  transition: transform 0.5s;
}
ul li a span:nth-child(1),
ul li a span:nth-child(3) {
  width: 100%;
  height: 3px;
  background: #404040;
}
ul li a span:nth-child(1) {
  top: 0;
  left: 0;
  transform-origin: right;
}
ul li a:hover span:nth-child(1) {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
}

ul li a span:nth-child(3) {
  bottom: 0;
  left: 0;
  transform-origin: left;
}
ul li a:hover span:nth-child(3) {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}

ul li a span:nth-child(2),
ul li a span:nth-child(4) {
  width: 3px;
  height: 100%;
  background: #404040;
}
ul li a span:nth-child(2) {
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: bottom;
}
ul li a:hover span:nth-child(2) {
  transform: scale(1);
  transform-origin: top;
  transition: transform 0.5s;
}
ul li a span:nth-child(4) {
  top: 0;
  right: 0;
  transform: scale(0);
  transform-origin: top;
}
ul li a:hover span:nth-child(4) {
  transform: scale(1);
  transform-origin: bottom;
  transition: transform 0.5s;
}

.facebook:hover {
  color: #3b5998;
}
.facebook:hover span {
  background: #3b5998;
}
.twitter:hover {
  color: #1da1f2;
}
.twitter:hover span {
  background: #1da1f2;
}
.instagram:hover {
  color: #c32aa3;
}
.instagram:hover span {
  background: #c32aa3;
}
.google:hover {
  color: #dd4b39;
}
.google:hover span {
  background: #dd4b39;
}
ul li a .twitter {
  color: #1da1f2;
}
ul li a:hover:nth-child(3) {
  color: #c32aa3;
}
ul li a:hover:nth-child(4) {
  color: #dd4b39;
}
</style>
