function hideLoader(){setTimeout(()=>{document.querySelector(".loader-wrapper").style.display="none"},1500)}$(document).ready(function(){$("#menu").click(function(){$(this).toggleClass("fa-times"),$(".navbar").toggleClass("nav-toggle")}),$(window).on("scroll load",function(){$("#menu").removeClass("fa-times"),$(".navbar").removeClass("nav-toggle"),window.scrollY>60?document.querySelector("#scroll-top").classList.add("active"):document.querySelector("#scroll-top").classList.remove("active"),$("section").each(function(){let e=$(this).height(),t=$(this).offset().top-50,a=$(window).scrollTop(),l=$(this).attr("id");a>t&&a<t+e&&($(".navbar ul li a").removeClass("active"),$(".navbar").find(`[href="#${l}"]`).addClass("active"))})}),$(document).ready(function(){$('a[href*="#"]').on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},100)})})});var typed=new Typed(".typing-text",{strings:["frontend Web development","backend development beginner","Problem Solving"],loop:!0,typeSpeed:50,backSpeed:25,backDelay:500});async function fetchData(e="skills"){let t;return await (t="skills"===e?await fetch("skills.json"):await fetch("./projects/projects.json")).json()}function showSkills(e){let t=document.getElementById("skillsContainer"),a="";e.forEach(e=>{a+=`
    <div class="bar">
          <div class="info">
            <img src=${e.icon} alt="skill" />
            <span>${e.name}</span>
            <span>${e.level}</span>
          </div>
        </div>`}),t.innerHTML=a}function showProjects(e){let t=document.querySelector("#work .box-container"),a="";e.slice(0,10).filter(e=>"android"!=e.category).forEach(e=>{a+=`
    <div class="box tilt">
  <img draggable="false" src="/assets/images/projects/${e.image}.png" alt="project" />
  <div class="content">
    <div class="tag">
    <h3>${e.name}</h3>
    </div>
    <div class="desc">
      <p>${e.desc}</p>
      <div class="btns">
        <a href="${e.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
        <a href="${e.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
      </div>
    </div>
  </div>
</div>`}),t.innerHTML=a,VanillaTilt.init(document.querySelectorAll(".tilt"),{max:15}),ScrollReveal({origin:"top",distance:"80px",duration:1e3,reset:!0}).reveal(".work .box",{interval:50})}fetchData().then(e=>{showSkills(e)}),fetchData("projects").then(e=>{showProjects(e)}),VanillaTilt.init(document.querySelectorAll(".tilt"),{max:15});const srtop=ScrollReveal({origin:"top",distance:"20px",duration:300,reset:!0});function sendWhatsAppMessage(){var e=document.getElementById("name").value,t=document.getElementById("email").value,a=document.getElementById("contactNumber").value,l=document.getElementById("message").value;window.open("https://wa.me/919786960343?text=Name: "+e+"%0aEame: "+t+"%0aPhone: "+a+"%0aMessage: "+l+"%0a","_blank").focus()}srtop.reveal(".home .content h3",{delay:200}),srtop.reveal(".home .content p",{delay:200}),srtop.reveal(".home .content .btn",{delay:200}),srtop.reveal(".home .image",{delay:300}),srtop.reveal(".home .linkedin",{interval:300}),srtop.reveal(".home .github",{interval:300}),srtop.reveal(".home .dev",{interval:300}),srtop.reveal(".home .email",{interval:300}),srtop.reveal(".about .content h3",{delay:50}),srtop.reveal(".about .content .tag",{delay:50}),srtop.reveal(".about .content p",{delay:50}),srtop.reveal(".about .content .box-container",{delay:50}),srtop.reveal(".about .content .resumebtn",{delay:50}),srtop.reveal(".skills .container",{interval:200}),srtop.reveal(".skills .container .bar",{delay:250}),srtop.reveal(".education .box",{interval:100}),srtop.reveal(".work .box",{interval:100}),srtop.reveal(".experience .timeline",{delay:100}),srtop.reveal(".experience .timeline .container",{interval:100}),srtop.reveal(".contact .container",{delay:100}),srtop.reveal(".contact .container .form-group",{delay:100});