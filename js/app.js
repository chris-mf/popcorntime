"use strict";$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length&&$("html,body").animate({scrollTop:t.offset().top},700)}})}),document.addEventListener("DOMContentLoaded",function(){for(var t=document.getElementsByTagName("INPUT"),n=0;n<t.length;n++)t[n].oninvalid=function(t){t.target.setCustomValidity(""),t.target.validity.valid||t.target.setCustomValidity("This field cannot be left blank")},t[n].oninput=function(t){t.target.setCustomValidity("")}}),$(document).on("ready",function(){$(".hero-text").addClass("bounceInDown"),$("#nav-burger").on("click",function(t){t.preventDefault(),t.stopPropagation(),console.log("burger clicked!"),$("#main-nav").addClass("open")}),$("body").on("click",function(){console.log("menu closed"),$("#main-nav").removeClass("open")})}),$(document).on("ready",function(){$(".popcorn-illustration").addClass("bounceInDown")}),$(document).on("ready",function(){$(".animate").viewportChecker({classToAdd:"show",offset:10})});var $contactForm=$("#contact-form");$contactForm.submit(function(t){t.preventDefault(),$.ajax({url:"//formspree.io/chris@mentallyfriendly.com",method:"POST",data:$(this).serialize(),dataType:"json",beforeSend:function(){$("#contact-form .button").html("popping corn")},success:function(t){$("#contact-form .button").html("request sent"),setTimeout(function(){$contactForm.trigger("reset"),$("#contact-form .button").html("request")},2e3)},error:function(t){$contactForm.find(".alert--loading").hide(),$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>')}})});