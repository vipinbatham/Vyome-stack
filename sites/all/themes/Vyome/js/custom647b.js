		new WOW().init();

		
	
	
		jQuery('.w3_megamenu-fw').click(function(){
			$(this).addClass("active");
		});

		/*Resizing header*/

		jQuery(document).on("scroll",function(){
			if(jQuery(document).scrollTop()>100){
				jQuery("header").removeClass("h-small").addClass("h-large");
			} else{
				jQuery("header").removeClass("h-large").addClass("h-small");
			}
		});
	
		/*Sliding Search*/
		var inputWdith = '200px';
		var inputWdithReturn = '200px';   

		jQuery(document).ready(function() {
			jQuery('#searchinout').find('i').click(function(){
			jQuery('#expandbox').toggle('slow');
			});
		  jQuery('#expandbox').focus(function(){
			//clear the text in the box.
			jQuery(this).val(function() {
				jQuery(this).val(''); 
			});
			//animate the box
			jQuery(this).animate({
			  width: inputWdith
			}, 800 )
		  }); 
	  
		  jQuery('#expandbox').blur(function(){
			jQuery(this).val('Enter Search Value');
			jQuery(this).animate({
			  width: inputWdithReturn
			}, 800 )
		  });
			
		});

		jQuery(document).ready(function() {
			jQuery('#silder-second').each(function(){
				jQuery(this).carousel({
					pause: true,
					interval: false
				});
		});
	
	
		var baseUrl = "http://themesdemo.com/hcl-drup/code/";

		jQuery(".search-ico").click(function(event){
		  var term = jQuery("#expandbox").val();
		  event.preventDefault();		  
		  //window.location.href = baseUrl + "/search/node/" + term;
		});



		jQuery(".pdf-link").fancybox({
			openEffect: 'elastic',
			closeEffect: 'elastic',
			autoSize: true,
			type: 'iframe'
		});
		
		jQuery(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'fade',
			closeEffect	: 'fade',
			padding: 5
		});
		
		
		jQuery(".social-item").on("click",function(){
		  jQuery(this).fadeIn(1000);
		  jQuery(".social-item").fadeOut();
		  jQuery(this).fadeIn(1000);
		  jQuery(this).find(".team-shortinfo").fadeOut();		  
		  jQuery(this).next(".body-content").fadeIn(1000);
		  
		});
		
		jQuery(".close-button").on("click",function(){
			jQuery(".body-content").fadeOut();
			jQuery(".social-item").fadeIn(1000);
			jQuery(".team-shortinfo").fadeIn(1000);
		});
		
				jQuery('#main-business-updates').tabCollapse();
		
				jQuery( ".dropdown" ).click(function(event) {
					// stop bootstrap.js to hide the parents
					event.stopPropagation();
					// hide the open children
					jQuery( this ).find(".dropdown").removeClass('open');
					// add 'open' class to all parents with class 'dropdown-submenu'
					jQuery( this ).parents(".dropdown").addClass('open');
					// this is also open (or was)
					jQuery( this ).toggleClass('open');
				});

				// this event fires when the dropdown hiden.
				
				
				jQuery('.dropdown').on('hidden.bs.dropdown', function () {
					jQuery( ".dropdown" ).find(".dropdown-submenu").removeClass('open');
				});
					
						
				jQuery('#video-banner').click(function(){
					video = '<iframe src="'+ jQuery(this).attr('data-video') +'"></iframe>';
					jQuery(this).replaceWith(video);
				});
	
		
			  jQuery("#banner").owlCarousel({
				loop:true,
				dots: true,
				dotsSpeed: 1000,
				nav: false,
				navSpeed: 800,
				navRewind:true,
				autoplay: true,
				autoplaySpeed: 1000,
				mouseDrag: false,
				autoplayTimeout: 4000,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				smartSpeed:450,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
				var history =  jQuery("#history-slider");
				history.owlCarousel({
				loop:false,
				dots: false,
				nav: true,
				navSpeed: 1000,
				autoplay: false,
				mouseDrag: true,
				autoplayTimeout: 4000,
				navRewind: false,
				autoHeight:true,
				navText: [
				  "<i class='fa fa-chevron-left'></i>",
				  "<i class='fa fa-chevron-right'></i>"
				],
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			 
			   jQuery(".feedback-slider").owlCarousel({
				loop:true,
				dots: false,
				nav: true,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				navText: [
				  "<i class='fa fa-arrow-left'></i>",
				  "<i class='fa fa-arrow-right'></i>"
				],
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			 
			  jQuery("#update-carousel-football").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			   jQuery("#update-carousel-tennis").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			  jQuery("#update-carousel-bridge").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			  jQuery("#update-carousel-acbl").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			   jQuery("#update-carousel-music").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			   jQuery("#update-carousel-found-second").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			  
			   jQuery("#update-carousel-music-second").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			  
			   jQuery("#update-carousel-found").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			  
			jQuery("#update-carousel").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 1000,
				autoplay: true,
				mouseDrag: true,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},            
					960:{
						items:1
					},
					1200:{
						items:1
					}
				}
			  });
			  
			  
				jQuery('#heath').on('shown.bs.tab', function (e) {
					
				 jQuery("#heathcare-carousel").owlCarousel({
						loop:false,
						dots: false,
						nav: true,
						navSpeed: 800,
						autoplay: true,
						mouseDrag: true,
						navRewind:false,
						autoplayTimeout: 4000,
						navText: [
						  "<i class='fa fa-chevron-left'></i>",
						  "<i class='fa fa-chevron-right'></i>"
						],
						margin:10,
						responsive:{
							0:{
								items:1
							},
							600:{
								items:2
							},            
							960:{
								items:3
							},
							1200:{
								items:3
							}
						}
				  });
						
				});
			
			
			
			
			
			jQuery('#tcare').on('shown.bs.tab', function (e) {
			 jQuery("#owl-demo4").owlCarousel({
					loop:false,
					dots: false,
					nav: true,
					navSpeed: 800,
					autoplay: true,
					mouseDrag: true,
					navRewind:false,
					autoplayTimeout: 4000,
					navText: [
						  "<i class='fa fa-chevron-left'></i>",
						  "<i class='fa fa-chevron-right'></i>"
						],
					margin:10,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:2
						},            
						960:{
							items:3
						},
						1200:{
							items:3
						}
					}
			  });
					
			});
			
		
			//Home Page - HCL infosystem tab carousel init with click on tab
			  jQuery('#info').on('shown.bs.tab', function (e) {
				  //alert('hello');
					  jQuery("#owl-demo5").owlCarousel({
					    loop:false,
						dots: false,
						nav: true,
						navSpeed: 800,
						autoplay: true,
						mouseDrag: true,
						autoplayTimeout: 4000,
						navRewind:false,
						navText: [
						  "<i class='fa fa-chevron-left'></i>",
						  "<i class='fa fa-chevron-right'></i>"
						],
						margin:10,
						responsive:{
							0:{
								items:1
							},
							600:{
								items:2
							},            
							960:{
								items:3
							},
							1200:{
								items:3
							}
						}
				  });
				});
			
			
			//Home Page - HCL Technologies tab init with dom ready
			  jQuery("#owl-demo2").owlCarousel({
				loop:false,
				dots: false,
				nav: true,
				navSpeed: 800,
				autoplay: false,
				mouseDrag: true,
				autoplayTimeout: 4000,
				navRewind:false,
				navText: [
				  "<i class='fa fa-chevron-left'></i>",
				  "<i class='fa fa-chevron-right'></i>"
				],
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},            
					960:{
						items:2
					},
					1200:{
						items:3
					}
				}
			  });
			  
			  jQuery("#owl-demo3").owlCarousel({
				loop:false,
				dots: false,
				nav: false,
				navSpeed: 800,
				autoplay: false,
				mouseDrag: true,
				navRewind:false,
				autoplayTimeout: 4000,
				margin:10,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},            
					960:{
						items:3
					},
					1200:{
						items:3
					}
				}
			  });
			
										
			
				  
				jQuery('.ui-tabs-nav ').tabCollapse();
				

				
				jQuery(function () {
							
						jQuery("#stockGraph").on('click', function(){
								alert('ji');
							jQuery("#graphLoad").load("../graph1.php", function(){
								console.log("OKKK");
							});

						});    
					});
					
					
					
					
					
	});
	  
		jQuery(window).load(function(){
			jQuery('#carousel-news').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				itemWidth: 157,
				itemMargin: 5,
				prevText: "",
				nextText:"",
				asNavFor: '#slider-news'
			});

			jQuery('#slider-news').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				directionNav: false,
				sync: "#carousel-news",
				start: function(slider){
				  jQuery('body').removeClass('loading');
				}
			}); 
		});
				 
		jQuery(window).load(function(){
			jQuery('#press').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: true,
			slideshow: false,
			itemWidth: 157,
			itemMargin: 5,
			prevText: "",
			nextText:"",
			asNavFor: '#press-slider'
		});

		jQuery('#press-slider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: true,
			slideshow: false,
			directionNav: false,
			sync: "#press",
			start: function(slider){
			jQuery('body').removeClass('loading');
			}
			});
		});
				  
		jQuery(window).load(function(){
			jQuery('#interviews-carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				itemWidth: 157,
				itemMargin: 5,
				prevText: "",
				nextText:"",
				asNavFor: '#interviews-slider'
			});

			jQuery('#interviews-slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				directionNav: false,
				sync: "#interviews-carousel",
				start: function(slider){
					jQuery('body').removeClass('loading');
				}
				});
		});

		jQuery(window).load(function(){
			jQuery('#video-carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				itemWidth: 157,
				itemMargin: 5,
				prevText: "",
				nextText:"",
				asNavFor: '#video-slider'
			});

			jQuery('#video-slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				directionNav: false,
				sync: "#video-carousel",
				start: function(slider){
				jQuery('body').removeClass('loading');
				}
			});
		});
					
		jQuery(document).ready(function ($) {
			var $sync1 = $(".big-images"),
			$sync2 = $(".thumbs"),
			flag = false,
			duration = 300;

			$sync1
				.owlCarousel({
					items: 1,
					margin: 10,
					nav: false,
					autoHeight:true,
					dots: false
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync2
				.owlCarousel({
					items:3,
					lazyLoad:true,
					loop:false,
					center:true,
					dots: false,
					nav: true,
					navSpeed: 800,
					autoplay: false,
					autoplayTimeout: 4000,
					navRewind: false,
					navText: [
					"<i class='fa fa-chevron-left'></i>",
					"<i class='fa fa-chevron-right'></i>"
					],
					mouseDrag: false
				})
				.on('click', '.owl-item', function () {
					$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;		
						$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});
		});
	
	
		jQuery(document).ready(function ($) {
			var $history = $(".history-images"),
			$history2 = $(".history-thumbs"),
			flag = false,
			duration = 300;

			$history
				.owlCarousel({
					items: 1,
					margin: 10,
					nav: false,
					autoHeight:true,
					dots: false
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$history2.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$history2
				.owlCarousel({
					items:5,
					lazyLoad:true,
					loop:false,
					center:false,
					dots: false,
					nav: false,
					navSpeed: 800,
					autoplay: false,
					autoplayTimeout: 4000,
					navRewind: false,
					navText: [
					"<i class='fa fa-chevron-left'></i>",
					"<i class='fa fa-chevron-right'></i>"
					],
					mouseDrag: false
				})
				.on('click', '.owl-item', function () {
					$history.trigger('to.owl.carousel', [$(this).index(), duration, true]);
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;		
						$history.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});
		});
		
		jQuery(function () {
			  jQuery('select').selectBoxIt();
			   //jQuery("#marketcap").prop("disabled", true);
				jQuery("#financial_revenue").css("display","inline"); 
				var company = jQuery("#company").val();
				var year = jQuery("#yearSelect").val();
				var type = jQuery("#option_financial").val();
			   //if(jQuery('#financial').is(':enabled')== true)
			   //{
				 jQuery("#year").css("display","inline");
				 financial = jQuery("#financial1").val();
				 var url = "../json/"+year+"/"+company+"/all.json";
				 // graph(url,financial);
				// jQuery(".marketcap").hide();
			   //}
			  /* else
			   { 
				 financial = jQuery("#marketcap").val();
				 var url = "../json/"+year+"/"+company+"/summary	.json";
				 // graph(url,financial);  
				 jQuery(".marketcap").show();
				 jQuery(".financial_revenue").hide();   
				
			   }*/
			});

jQuery(function() {
			  jQuery("#company").change(function() {
			 // jQuery("#marketcap_calculation").css("opacity","");
			 // jQuery("#financial_revenue").css("opacity","");
			 // jQuery("#marketcap").prop("disabled", false);
			  jQuery("#financial1").prop("disabled", false);
			  
			  company = jQuery("#company option:selected").val();
			  year = jQuery("#yearSelect option:selected").val();

			  if(company == 'HCL_E')
				{
					jQuery("#hcl_e_marketcap_calculation").css("display","inline");
					jQuery("#option_financial_span").css("display","none");
					jQuery("#financial_revenue").css("display","none");
					//jQuery("#marketcap_calculation").css("display","none");
					
					financial = jQuery("#hcl_e_marketcap_calculation option:selected").val();
					jQuery('.selectit_year').html('<select id="yearSelect" onchange= "year_change()" class="selectit xs-ml20"><option value = "default_year">Term</option><option value = "2012-2013" selected="selected">2012-2013</option><option value = "2013-2014">2013-2014</option><option value = "2014-2015">2014-2015</option> <option value = "all">2008-Current</option></select>');
					jQuery('select').selectBoxIt();
					year = jQuery("#yearSelect option:selected").val();
					var url = "../json/"+year+"/"+company+"/total.json";
					// graph(url,financial);
				}
			else
				{
					// type = $("#option_financial option:selected").val(); 
					/*type = jQuery("#option_financial option:selected").val(); 
					
					if(type == 'financial_revenue')
					{*/
					//jQuery("#hcl_e_marketcap_calculation").css("display","none");
					//jQuery("#option_financial_span").css("display","inline");
					//jQuery("#financial_revenue").css("display","inline");
					//jQuery("#marketcap_calculation").css("display","none");
					jQuery("#financial1").prop("disabled", false);
					financial = jQuery("#financial").val();
					//jQuery("#marketcap_calculation").css("display","none");
					jQuery("#year").css("display","inline");
					//jQuery("#financial_revenue").css("display","inline","opacity","");  
					jQuery('.selectit_year').html('<select id="yearSelect" onchange= "year_change()" class="selectit xs-ml20"><option value = "default_year">Term</option><option value = "2008-2009" selected="selected">2008-2009</option><option value = "2009-2010">2009-2010</option><option value = "2010-2011">2010-2011</option><option value = "2011-2012">2011-2012</option><option value = "2012-2013">2012-2013</option><option value = "2013-2014">2013-2014</option><option value = "2014-2015">2014-2015</option> <option value = "all">2008-Current</option></select>');
					jQuery('select').selectBoxIt();
					
					var url = "../json/"+year+"/"+company+"/all.json";
				   // var selectBox = $("#yearSelect").selectBoxIt().data("selectBoxIt");
   

				/*	}
				else
				{
					jQuery("#hcl_e_marketcap_calculation").css("display","none");
					jQuery("#option_financial_span").css("display","inline");
					jQuery("#financial_revenue").css("display","none");
					jQuery("#marketcap_calculation").css("display","inline");
					jQuery("#marketcap").prop("disabled", false);
					financial = jQuery("#marketcap").val(); 
					jQuery("#financial_revenue").css("display","none");
					jQuery("#marketcap_calculation").css("display","inline","opacity","");
					 jQuery('.selectit_year').html('<select id="yearSelect" onchange= "year_change()" class="selectit xs-ml20"><option value = "default_year">Term</option><option value = "2012-2013" selected="selected">2012-2013</option><option value = "2013-2014">2013-2014</option><option value = "2014-2015">2014-2015</option> <option value = "all">2008-Current</option></select>');

					jQuery('select').selectBoxIt();
					year = jQuery("#yearSelect option:selected").val();
				   // year_change();
					var url = "../json/"+year+"/"+company+"/summary.json";
				 }*/
				// graph(url,financial);
			}
		});
});

		/*jQuery(function() {
			jQuery("#financial1").change(function() {
				company = jQuery("#company option:selected").val();
				year = jQuery("#yearSelect option:selected").val();
				jQuery("#year").css("display","inline");
					financial = jQuery("#financial1").val();
					alert(financial);
					/*var url = "../json/"+year+"/"+company+"/all.json";
					// graph(url,financial);   */
			/*});
		});*/

jQuery(function() {
			jQuery("#financial1").change(function(e) {
				
				//jQuery("#marketcap").prop("disabled", true);
					
				company = jQuery("#company option:selected").val();
				year = jQuery("#yearSelect option:selected").val();
					//if(jQuery('#financial').is(':enabled')== true)
					//{
					jQuery("#year").css("display","inline");
					financial = jQuery("#financial1").val();
					
					var url = "../json/"+year+"/"+company+"/all.json";
					// graph(url,financial);   
					//jQuery(".marketcap").hide();
					//jQuery(".financial_revenue").show();
					//}
					/*else
					{
					financial = jQuery("#marketcap").val();
					var url = "../json/"+year+"/"+company+"/summary.json";
					// graph(url,financial);
					jQuery(".marketcap").show();
					jQuery(".financial_revenue").hide();
				}*/
			});
			jQuery("#type").change(function(e) {
				
				//jQuery("#marketcap").prop("disabled", true);
					
				company = jQuery("#company option:selected").val();
				year = jQuery("#yearSelect option:selected").val();
					//if(jQuery('#financial').is(':enabled')== true)
					//{
					jQuery("#year").css("display","inline");
					financial = jQuery("#financial1").val();
					type = jQuery("#type").val();
					if(year!='all')
					{
						if(jQuery("#type").val()=='year')
						{
							var url = "../json/"+year+"/"+company+"/year.json";
						}
						else
						{
							var url = "../json/"+year+"/"+company+"/quarter.json";
						}
					}
					// graph(url,financial);   
					//jQuery(".marketcap").hide();
					//jQuery(".financial_revenue").show();
					//}
					/*else
					{
					financial = jQuery("#marketcap").val();
					var url = "../json/"+year+"/"+company+"/summary.json";
					// graph(url,financial);
					jQuery(".marketcap").show();
					jQuery(".financial_revenue").hide();
				}*/
			});


			jQuery("#financial1").click(function() {
				
			  if (this.value === 'Total basic O/s Shares (in Mn)')
			  {
				financial = jQuery("#financial1").val();  
				year = jQuery("#yearSelect option:selected").val();
				var url = "../json/"+year+"/"+company+"/all.json";
				// graph(url,financial);
				/*jQuery(".marketcap").show();
				jQuery(".financial_revenue").hide();*/
			  }
			});

			  /*jQuery("#financial1").change(function() {
			  company = jQuery("#company option:selected").val();
			  year = jQuery("#yearSelect option:selected").val();
			 // jQuery("#financial1").prop("disabled", true);

			  if(jQuery('#financial1').is(':enabled')== true)
			  {   
				jQuery("#year").css("display","inline");
				financial = jQuery("#financial1").val();
				var url = "../json/"+year+"/"+company+"/all.json";
				// graph(url,financial); 
				//jQuery(".marketcap").hide();
				//jQuery(".financial_revenue").show();   
			  }
			  else
			  { 
				financial = jQuery("#financial1").val(); 
				var url = "../json/"+year+"/"+company+"/all.json";
				// graph(url,financial);
				/*jQuery(".marketcap").show();
				jQuery(".financial_revenue").hide();*/
			  /*}
			  
			  
			});*/
});


jQuery(function() {
jQuery("#hcl_e_marketcap").change(function() {
  financial = jQuery("#hcl_e_marketcap_calculation option:selected").val();
  company = jQuery("#company option:selected").val();
  year = jQuery("#yearSelect option:selected").val();
  var url = "../json/"+year+"/"+company+"/total.json";
  // graph(url,financial);
});

/*jQuery("#option_financial").change(function() {
 type = jQuery("#option_financial option:selected").val(); 
 company = jQuery("#company option:selected").val();
 year = jQuery("#yearSelect option:selected").val();
 
 if(type == 'financial_revenue')
 {
    jQuery("#financial").prop("disabled", false);
    financial = jQuery("#financial").val();
    jQuery("#marketcap_calculation").css("display","none");
    jQuery("#year").css("display","inline");
    jQuery("#financial_revenue").css("display","inline","opacity","");  
    jQuery('.selectit_year').html('<select id="yearSelect" onchange= "year_change()" class="selectit xs-ml20"><option value = "default_year">Term</option><option value = "2008-2009" selected="selected">2008-2009</option><option value = "2009-2010">2009-2010</option><option value = "2010-2011">2010-2011</option><option value = "2011-2012">2011-2012</option><option value = "2012-2013">2012-2013</option><option value = "2013-2014">2013-2014</option><option value = "2014-2015">2014-2015</option></select>');
    jQuery('select').selectBoxIt();
    
    var url = "../json/"+year+"/"+company+"/all.json";
   // var selectBox = $("#yearSelect").selectBoxIt().data("selectBoxIt");
   

 }
 else
 {
    jQuery("#marketcap").prop("disabled", false);
    financial = jQuery("#marketcap").val(); 
    jQuery("#financial_revenue").css("display","none");
    jQuery("#marketcap_calculation").css("display","inline","opacity","");
    jQuery('.selectit_year').html('<select id="yearSelect" onchange= "year_change()" class="selectit xs-ml20"><option value = "default_year">Term</option><option value = "2012-2013" selected="selected">2012-2013</option><option value = "2013-2014">2013-2014</option><option value = "2014-2015">2014-2015</option></select>');

    jQuery('select').selectBoxIt();
    year = jQuery("#yearSelect option:selected").val();
   // year_change();
    var url = "../json/"+year+"/"+company+"/summary.json";
 }
// graph(url,financial);

});*/
});

function year_change()
{
   //type = jQuery("#option_financial option:selected").val(); 
   company = jQuery("#company option:selected").val();
   year = jQuery("#yearSelect option:selected").val();
   if(company == 'HCL_E')
   {
      //jQuery("#hcl_e_marketcap_calculation").css("display","inline");
      //jQuery("#option_financial_span").css("display","none");
     /* jQuery("#financial_revenue").css("display","none");
      jQuery("#marketcap_calculation").css("display","none");
     */
      
      financial = jQuery("#hcl_e_marketcap_calculation option:selected").val();
      var url = "../json/"+year+"/"+company+"/total.json";
      // graph(url,financial);
   }

        financial = jQuery("#financial1").val();
        
        jQuery("#year").css("display","inline");
       // jQuery("#financial_revenue").css("display","inline","opacity","");  
        var url = "../json/"+year+"/"+company+"/all.json";
        // graph(url,financial);
  /* else
   {
     if(type == 'financial_revenue')
     {
        jQuery("#financial").prop("disabled", false);
        financial = jQuery("#financial").val();
        jQuery("#marketcap_calculation").css("display","none");
        jQuery("#year").css("display","inline");
        jQuery("#financial_revenue").css("display","inline","opacity","");  
        var url = "../json/"+year+"/"+company+"/all.json";
     }
     else
     {
        jQuery("#marketcap").prop("disabled", false);
        financial = jQuery("#marketcap").val(); 
        jQuery("#financial_revenue").css("display","none"); 
        jQuery("#marketcap_calculation").css("display","inline","opacity","");
        var url = "../json/"+year+"/"+company+"/summary.json";
     }
     // graph(url,financial);
     }*/


}
			
		// Smooth Scrolling
	    //==========================================
	    jQuery(function() {
	      jQuery('a.scroll').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	          var target = jQuery(this.hash);
	          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	          if (target.length) {
	            jQuery('html,body').animate({
	              scrollTop: target.offset().top -50
	            }, 1000);
	            return false;
	          }
	        }
	      });
		  
			jQuery(".veiw-campaign").on("click",function(){
				//alert('car start');
				jQuery("#ferless-one, #ferless-two, #ferless-three, #ferless-four, #ferless-five, #ferless-six, #ferless-seven").owlCarousel({
					items : 1,
					autoWidth: true,
					dots: false,
					autoplay: false,
					nav: true
				});
			});
			

		
	    });

		jQuery(document).ready(function($){
			var timelineBlocks = $('.cd-timeline-block'),
				offset = 0.8;

			//hide timeline blocks which are outside the viewport
			hideBlocks(timelineBlocks, offset);

			//on scolling, show/animate timeline blocks when enter the viewport
			$(window).on('scroll', function(){
				(!window.requestAnimationFrame) 
					? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
					: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
			});

			function hideBlocks(blocks, offset) {
				blocks.each(function(){
					( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
				});
			}

			function showBlocks(blocks, offset) {
				blocks.each(function(){
					( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				});
			}
		})																																						

jQuery(document).ready(function() {
	jQuery("select").selectBoxIt();
    window.graphJsonData = "";
    jQuery.getJSON("/financials-listing-json", function(a) {
        window.graphJsonData = a;
        refreshGraph();
    });
    jQuery("#financial_interval, #financial_company, #financial_year, #financial_attribute").change(function() {
        refreshGraph();
    });
});