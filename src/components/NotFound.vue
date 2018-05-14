<template>
  <div class="wrapper">
      <div class="code">
        <p class="text h1 text1">Page Not Found~</p>
        <p class="text h3 pt-5 text2">Usechain</p>                                        
        <router-link to="/" class="logo"></router-link>
			  <router-link to="/" class="text h2 text3">Go back Home</router-link>
		</div>
  </div>
</template>

<style scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  white-space: nowrap;
}
p {
  text-decoration: none;
  user-select: none;
}
.text {
  font-family: BalboaWide Bold;
  color: #5AA5F5;  
  font-weight: normal;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
.text1{
  top: 20%;
}
.text2{
  top: calc( 50% + 100px );
}
.text3{
  top: 78%;
}
.logo,
.logo::before,
.logo::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.logo {
  width: 140px;
  height: 140px;
  margin: auto;
  background: url(../assets/images/logo.png) no-repeat 50%/50%; 
  color: #5AA5F5;
  box-shadow: inset 0 0 0 1px rgba(0, 123, 255, 0.5);
  z-index: 23;
}
.logo::before,
.logo::after {
  content: "";
  z-index: -1;
  margin: -5%;
  box-shadow: inset 0 0 0 2px;
  animation: clipMe 8s linear infinite;
  background-color: rgba(0, 123, 255, 0.1);
}
.logo::before {
  animation-delay: -4s;
}
@keyframes clipMe {
  0%,
  100% {
    clip: rect(0px, 220px, 2px, 0px);
  }
  25% {
    clip: rect(0px, 2px, 220px, 0px);
  }
  50% {
    clip: rect(218px, 220px, 220px, 0px);
  }
  75% {
    clip: rect(0px, 220px, 220px, 218px);
  }
}
@media screen and (max-width: 576px) {
  .text1,.text3{
    font-size: 1.7rem;
  }
  .text2{
    top: calc( 50% + 40px);
    font-size: 1.4rem;
  }
}
</style>
