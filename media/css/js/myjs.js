!(function($) {
    // regular js
    // jquery
    $(function() {
        //        $('.owl-carousel').owlCarousel({
        //            loop:true,
        //            responsive:{
        //                1000:{
        //                    items:1
        //                }
        //            }
        //        })
        $('.banner-slider').owlCarousel({
            loop: true,
            autoplay: true,
            navigation: false,
            autoplayTimeout:5000,
            responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 1,
                },
                1000: {
                    items: 1
                }
            }
        });

        if(window.location.href.indexOf('https://www.pbtaustralia.com/advancedsearch.aspx?search=1&campaign=data-health-check') > -1){var job_number = $.trim($('.searchresult-number').text()); if(job_number == '0'){$('#jobsearch-top').hide(); $('.job-navbtns').hide();}
            else{$('#jobsearch-top').show(); $('.job-navbtns').show();}}

        $('#myTab a[href="#tab1"]').tab('show');
        // bootstrap
        $('#dynamic-container, #content-container, #job-dynamic-container').addClass('row');
        // $('#dynamic-content, #content-container #content, #job-dynamic-container #content').addClass('span8');
        // $('#dynamic-side-left-container, #side-left, #job-side-column').addClass('span4');
        // remove empty li's and ul's on the system pages.
        $("#side-left li:empty").remove();
        $("#side-left ul:empty").remove();
        // add active class to links.
        $("li a[href='" + window.location.pathname.toLowerCase() + "']").parent().addClass("active");
        $("li.active li.active").parent().closest("li.active").removeClass("active");
        // add last-child class to navigation
        $("#r_navigation > ul > li:last").addClass("last-child");
        // repsonsive tables.
        $(".form-all table").wrap("<div class=\"box-table-responsive\"></div>");
        // generate actions button
        $(".job-navbtns").convertButtons({
            buttonTitle: "Actions&hellip;",
            title: "Please choose&hellip;",
            links: ".job-navbtns a"
        });
        // generate filters button
        $(".job-navbtns").convertFilters({
            buttonTitle: "Filters&hellip;",
            filteredTitle: "Applied Filters",
            title: "Please choose&hellip;",
            filtered: ".search-query p",
            list: "ul#side-drop-menu",
            excludeFromList: "#AdvancedSearchFilter_PnlCompany"
        });
        // generate select navigation from sidebar
        $("#dynamic-content").convertNavigation({
            title: "Related Pages",
            links: "#r_left-navigation a"
        });
        // Latest Jobs widget
        $("#job-feed ul").includeFeed({
            baseSettings: {
                rssURL: "job/rss.aspx"
            },
            elements: {
                title: 1,
                description: 1
            },
            complete: function() {
                if ($(this).children().length > 2) {
                    // $(this).jcarousel({
                    // auto: 5,
                    // scroll: 1,
                    // wrap: "circular",
                    // vertical: true
                    // });
                }
            }
        });

        //News & Events
         $('.jxt-news-container h1').text('News & Events');

        // Latest news widget
        //        var data_url = $("#myNewsList ul").data('url');
        $("#myNewsList ul").includeFeed({
            baseSettings: {
                rssURL: "NewsRSS.aspx?category=news"
            },
            templates: {
                itemTemplate: '<li class="news-area"><h6><a href="{{link}}" target="_blank" title="{{title}}">{{title}}</a></h6><p class="news-description">{{description}}</p></li>'
            },
            complete: function() {
                if ($(this).children().length >= 3) {
                    $(this).owlCarousel({
                        loop: true,
                        autoplay: true,
                        navigation: false,
                        dots: false,
                        margin: 20,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            767: {
                                items: 2,
                            },
                            1000: {
                                items: 3
                            }
                        }
                    });
                }
            }
        });
        //testimonial section
        //        $(".testimonial-area").each(function() {
        //            var dataURL = $(this).attr("data-url");
        $(".testimonial-area").includeFeed({
            baseSettings: {
                rssURL: "/newsrss.aspx?category=testimonials"
            },
            templates: {
                itemTemplate: "<div class='testimonial-block'><blockquote><h3 class='spec'>Testimonial Quote</h3><p>{{description}}</p><small>{{title}}</small></blockquote></div>",
            },
            complete: function() {
                if ($(this).children().length >= 2) {
                    $(this).owlCarousel({
                        loop: true,
                        nav: false,
                        dots: false,
                        autoplay: true,
                        //                         margin:25,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            767: {
                                items: 2,
                            },
                            1200: {
                                items: 2,
                            }
                        }
                    })
                }
            }
        });
        //        });
        // mobile menu / site search
        $(".r27_toggle-navigation").click(function(e) {
            e.preventDefault();
            var elementToToggle = $(this).attr("href");
            $(elementToToggle).toggleClass("active");
        });
        // contact page stop scrolling until clicked.
        $(".r27_map-overlay").click(function() {
            $(this).hide();
        });
        // dropdown boxes for various pages.
        // first item in array is dropdown heading.
        // second item is the ending of the dropdown.
        // third item is whether to open the first item by default or not.
        // $.fn.dropdown({
        // "/page/client-services/": ["#dynamic-content h3", "h1, h2, h3, h4, h5, h6", true]
        // });
    });
    $(document).ready(function() {
        $('.dynamic-content-holder h1:first, #content-container #content h1:first').appendTo($('.inner-banner .tbl .tbl-cell .container'));
        if ($(".full-width,.consultant-detail").length > 0) {
            $("body").addClass('full-width-container');
        }
        //        banner body class
        var pageTitle = window.location.pathname.replace("/", "");
        if (pageTitle != "") {
            $("body").addClass(pageTitle);
        }
        var currentPage = window.location.pathname.toLowerCase();
        if (currentPage == "/advancedsearch.aspx") {
            $('body').addClass('advancedsearch');
        } else if (currentPage == "/page/our-services/claims-solutions/") {
            $('body').addClass('claims-solutions');
        }



        // add iframe url for a map
        function loadMap(iframeObject)
        {
            // if the iframe has no src or a blank src, and it has a data-src attribute
            if ( !(iframeObject.attr("src") && iframeObject.attr("src").length) && iframeObject.attr("data-src") )
            {
                iframeObject.attr("src", iframeObject.attr("data-src"));
            }
        }
        // scroll to a map
        function scrollToDiv(divID)
        {
            $("html, body").animate({
                scrollTop: $(divID).offset().top - ( $("#Top-nav-sticky").height() || 0 ) - 20
            }, 300);
        }
        // if a location hash is on the url, add active to the div.
        if ( location.hash && $(location.hash + ".r34_map").length )
        {
            $(location.hash + ".r34_map").addClass("active");
        }
        else
        {
            // otherwise, just make the first map active.
            $(".r34_map:first").addClass("active");
        }
        loadMap($(".r34_map.active iframe"));
        // contact page maps on click
        $(".r34_contact-map-link, .footer-location a, #r34_locations a").click(function(e){
            var myLink = $(this).attr("href")
            var targetMap = $( myLink.substr(myLink.indexOf("#")) );
            if ( targetMap.length )
            {
                e.preventDefault();
                loadMap(targetMap.children("iframe"));
                scrollToDiv(targetMap);
                $(".r34_map").not(targetMap).removeClass("active");
                targetMap.addClass("active");
            }
        });


        $("input").each(function(index, elem) {
            var eId = $(elem).attr("id");
            var label = null;
            if (eId && (label = $(elem).parents("form").find("label[for="+eId+"]")).length == 1) {
                $(elem).attr("placeholder", $(label).text().replace(/  +/g, ''));
                $(label).remove();
            }
         });
















    });
    $(document).ready(function() {
        $(".accordion-toggle").click(function() {
            $(".accordion-toggle").not($(this)).addClass('collapsed')
        });
    });
})(jQuery);
