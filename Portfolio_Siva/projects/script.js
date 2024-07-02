function getProjects(){return fetch("projects.json").then(e=>e.json()).then(e=>e)}function showProjects(e){let t=document.querySelector(".work .box-container"),s="";e.forEach(e=>{s+=`
        <div class="grid-item ${e.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
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
    </div>
    </div>`}),t.innerHTML=s;var a=$(".box-container").isotope({itemSelector:".grid-item",layoutMode:"fitRows",masonry:{columnWidth:200}});$(".button-group").on("click","button",function(){$(".button-group").find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked");var e=$(this).attr("data-filter");a.isotope({filter:e})})}$(document).ready(function(){$("#menu").click(function(){$(this).toggleClass("fa-times"),$(".navbar").toggleClass("nav-toggle")}),$(window).on("scroll load",function(){$("#menu").removeClass("fa-times"),$(".navbar").removeClass("nav-toggle"),window.scrollY>60?document.querySelector("#scroll-top").classList.add("active"):document.querySelector("#scroll-top").classList.remove("active")})}),document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState?(document.title="Projects | Portfolio Jigar Sable",$("#favicon").attr("href","/assets/images/favicon.png")):(document.title="Come Back To Portfolio",$("#favicon").attr("href","/assets/images/favhand.png"))}),getProjects().then(e=>{showProjects(e)});var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}(),document.onkeydown=function(e){if(123==e.keyCode||e.ctrlKey&&e.shiftKey&&73==e.keyCode||e.ctrlKey&&e.shiftKey&&67==e.keyCode||e.ctrlKey&&e.shiftKey&&74==e.keyCode||e.ctrlKey&&85==e.keyCode)return!1};