var fired = false;
window.addEventListener("scroll", loadWithDelay, false);

function loadWithDelay() {
  if (fired === false) {
    fired = true;

    setTimeout(() => {
      findVideos();

      // zoom
      if ($(".js-fancy").length) {
        $(".js-fancy").fancybox({
          openEffect: "elastic",
          closeEffect: "elastic",
          helpers: {
            media: {},
            overlay: {
              locked: false,
            },
          },
        });
      }

      // affix
      fixHeightSide();
      $(".js-affix-column").affix({
        offset: {
          top: function () {
            this.top = $(".js-affix-column").offset().top;
            return this.top;
          },
          bottom: function () {
            this.bottom = $(".js-affix-stop").outerHeight(!0);
            return this.bottom;
          },
        },
      });

      function fixHeightSide() {
        var currentHeight = $(".js-affix-column").height();
        $(".js-affix-box").css("height", currentHeight);
      }

      function iffixRefresh() {
        if ($(".js-affix-column").length) {
          fixHeightSide();
          $(".js-affix-column").data("bs.affix").options.offset.top =
            $(".js-affix-box").offset().top;
          $(".js-affix-column").data("bs.affix").options.offset.bottom =
            $(".js-affix-stop").outerHeight(true);
        }
      }

      var delayProcess = debounce(iffixRefresh, 100);
      $(window).resize(delayProcess);
      $(window).scroll(delayProcess);

      // affix2
      fixHeightSideSecond();
      $(".js-affix-column-second").affix({
        offset: {
          top: function () {
            this.top = $(".js-affix-column-second").offset().top;
            return this.top;
          },
          bottom: function () {
            this.bottom = $(".js-affix-stop-second").outerHeight(!0);
            return this.bottom;
          },
        },
      });

      function fixHeightSideSecond() {
        var currentHeightSecond = $(".js-affix-column-second").height();
        $(".js-affix-box-second").css("height", currentHeightSecond);
      }

      function iffixRefreshSecond() {
        if ($(".js-affix-column-second").length) {
          fixHeightSideSecond();
          $(".js-affix-column-second").data("bs.affix").options.offset.top = $(
            ".js-affix-box-second"
          ).offset().top;
          $(".js-affix-column-second").data("bs.affix").options.offset.bottom =
            $(".js-affix-stop-second").outerHeight(true);
        }
      }

      var delayProcessSecond = debounce(iffixRefreshSecond, 100);
      $(window).resize(delayProcessSecond);
      $(window).scroll(delayProcessSecond);
    }, 100);
  }
}

$(document).ready(function () {
  setTimeout(function () {
    if ($(".js-demo-slider").length) {
      $(".js-demo-slider").slick({
        lazyLoad: "ondemand",
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        mobileFirst: true,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: false,
        appendArrows: ".js-demo-slider-arrows",
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1365,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1624,
            settings: {
              slidesToShow: 3,
              adaptiveHeight: true,
              vertical: true,
            },
          },
        ],
      });
    }

    if ($(".js-slots-slider").length) {
      $(".js-slots-slider").slick({
        lazyLoad: "ondemand",
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        mobileFirst: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              centerMode: false,
            },
          },
          {
            breakpoint: 1624,
            settings: {
              slidesToShow: 4,
              variableWidth: false,
              centerMode: false,
            },
          },
        ],
      });
    }

    if ($(".js-slots-slider-alt").length) {
      $(".js-slots-slider-alt").slick({
        lazyLoad: "ondemand",
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        mobileFirst: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              centerMode: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              centerMode: false,
            },
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              centerMode: false,
            },
          },
          {
            breakpoint: 1365,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              centerMode: false,
            },
          },
          {
            breakpoint: 1599,
            settings: {
              slidesToShow: 4,
              variableWidth: false,
              centerMode: false,
            },
          },
        ],
      });
    }

    if ($(".js-last-news-slider").length) {
      $(".js-last-news-slider").slick({
        lazyLoad: "ondemand",
        dots: true,
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        mobileFirst: true,
        adaptiveHeight: true,
        appendDots: $(".js-slick-dots"),
      });
    }

    if ($(".js-last-news-slider-alt").length) {
      $(".js-last-news-slider-alt").slick({
        lazyLoad: "ondemand",
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        mobileFirst: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              variableWidth: false,
            },
          },
          {
            breakpoint: 1365,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
            },
          },
          {
            breakpoint: 1624,
            settings: {
              slidesToShow: 2,
              variableWidth: false,
            },
          },
        ],
      });
    }

    if ($(".js-screen-slider").length) {
      $(".js-screen-slider").slick({
        lazyLoad: "ondemand",
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        mobileFirst: true,
        variableWidth: false,
        centerMode: false,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 567,
            settings: {
              vertical: false,
              verticalSwiping: false,
            },
          },
          {
            breakpoint: 1624,
            settings: {
              vertical: true,
              slidesToShow: 3,
            },
          },
        ],
      });
    }

    if ($(".js-screen-slider-alt").length) {
      $(".js-screen-slider-alt").slick({
        lazyLoad: "ondemand",
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        mobileFirst: true,
        variableWidth: true,
        centerMode: false,
        appendArrows: ".js-casino-details-arrows",
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 2,
              variableWidth: true,
              arrows: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              variableWidth: false,
              arrows: true,
            },
          },
          {
            breakpoint: 1624,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              arrows: true,
            },
          },
        ],
      });
    }

    if (
      $(".js-winners-slider").length &&
      $(".js-winners-slider").is(":visible")
    ) {
      $(".js-winners-slider").slick({
        lazyLoad: "ondemand",
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        mobileFirst: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
      });
    }

    if ($(".js-info-slider-alt").length) {
      $(".js-info-slider-alt").slick({
        lazyLoad: "ondemand",
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        mobileFirst: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: false,
        appendArrows: ".js-cards-arrows",
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
              arrows: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              arrows: false,
            },
          },
          {
            breakpoint: 1365,
            settings: {
              slidesToShow: 3,
              variableWidth: false,
              arrows: true,
            },
          },
          {
            breakpoint: 1624,
            settings: {
              slidesToShow: 4,
              variableWidth: false,
              arrows: true,
            },
          },
        ],
      });
    }

    // info cards
    addClassForCard(
      ".js-card-odd",
      "is-active-odd",
      ".js-card-even",
      "is-active-even"
    );
    addClassForCard(
      ".js-card-even",
      "is-active-even",
      ".js-card-odd",
      "is-active-odd"
    );
  }, 2000);

  // Form validate call
  if ($(".wpcf7-form").length) {
    $(".wpcf7-form").validate(validateParams);
  }
  if ($("#commentform").length) {
    $("#commentform").validate(validateParams);
  }

  $("body").AddClassAnimation();
  $(".js-rating").starRating();

  // for menu modal
  $(document).on("show.bs.modal", ".js-modal-main", function () {
    $("html").addClass("modal-noscroll");
  });
  $(document).on("hide.bs.modal", ".js-modal-main", function () {
    $(".js-menu").removeClass("is-active");
  });
  $(document).on("hidden.bs.modal", ".js-modal-main", function () {
    $("html").removeClass("modal-noscroll");
  });
  $(document).on("show.bs.modal", ".js-modal-full", function () {
    $("html").addClass("modal-noscroll-full");
  });
  $(document).on("hidden.bs.modal", ".js-modal-full", function () {
    $("html").removeClass("modal-noscroll-full");
  });

  $(".modal").on("show.bs.modal", function () {
    var docHeight = $(document).height(),
      windowHeight = $(window).height(),
      docWidth = $(document).outerWidth(),
      windowWidth = $(window).outerWidth(),
      widthScroll = windowWidth - docWidth;

    if (docHeight > windowHeight) {
      // fix-scroll
      $("body").css("paddingRight", widthScroll);
    } else {
      $("body").css("paddingRight", "0");
    }
  });

  $(".modal").on("hidden.bs.modal", function () {
    $("body").css("paddingRight", "0");
  });

  // slider
  if ($(".js-breadcrumbs-slider").length) {
    $(window).on("load resize orientationchange", function () {
      var $carousel = $(".js-breadcrumbs-slider");
      if (
        $(window).innerWidth() >= 768 &&
        $carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick("unslick");
      } else if (
        $(window).innerWidth() < 768 &&
        !$carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick({
          lazyLoad: "ondemand",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          mobileFirst: true,
          variableWidth: true,
          infinite: false,
        });
      }
    });
  }

  if ($(".js-sidebar-games-slider").length) {
    $(window).on("load resize orientationchange", function () {
      var $carousel = $(".js-sidebar-games-slider");
      if (
        $(window).innerWidth() >= 1366 &&
        $carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick("unslick");
      } else if (
        $(window).innerWidth() < 1366 &&
        !$carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick({
          lazyLoad: "ondemand",
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    });
  }

  if ($(".js-sidebar-casino-slider").length) {
    $(window).on("load resize orientationchange", function () {
      var $carousel = $(".js-sidebar-casino-slider");
      if (
        $(window).innerWidth() >= 1366 &&
        $carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick("unslick");
      } else if (
        $(window).innerWidth() < 1366 &&
        !$carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick({
          lazyLoad: "ondemand",
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    });
  }

  if ($(".js-sidebar-casino-slider-alt").length) {
    $(window).on("load resize orientationchange", function () {
      var $carousel = $(".js-sidebar-casino-slider-alt");
      if (
        $(window).innerWidth() >= 1366 &&
        $carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick("unslick");
      } else if (
        $(window).innerWidth() < 1366 &&
        !$carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick({
          lazyLoad: "ondemand",
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        });
      }
    });
  }

  if ($(".js-sidebar-slider").length) {
    $(window).on("load resize orientationchange", function () {
      var $carousel = $(".js-sidebar-slider");
      if (
        $(window).innerWidth() >= 1366 &&
        $carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick("unslick");
      } else if (
        $(window).innerWidth() < 1366 &&
        !$carousel.hasClass("slick-initialized")
      ) {
        $carousel.slick({
          lazyLoad: "ondemand",
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1000,
          mobileFirst: true,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 5000,
          centerMode: true,
          responsive: [
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 3,
                variableWidth: false,
                centerMode: false,
              },
            },
          ],
        });
      }
    });
  }

  if ($(".js-info-slider").length) {
    $(".js-info-slider").slick({
      lazyLoad: "ondemand",
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      mobileFirst: true,
      variableWidth: false,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: false,
      verticalSwiping: true,
      vertical: true,
      appendDots: $(".js-info-slider-dots"),
      responsive: [
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
          },
        },
      ],
    });
  }

  $(window).on("load resize", function () {
    changeImgHeight();
    changeSliderHeight();
    infoCardHeight();
  });

  // ol
  $("ol[start]").each(function () {
    var val = parseFloat($(this).attr("start")) - 1;
    $(this).css("counter-increment", "list " + val);
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".js-sticky-btn").addClass("show");
    } else {
      $(".js-sticky-btn").removeClass("show");
    }
  });

  $('.c-rating-S-1 label').on('click', function () {
    let ratingValue = $(this).data('value');

    $('.vpcft7', $('#commentform')).text(ratingValue);
  });

  $('.js-rating-block .mTWBB3Hz').on('click', function () {
    let ratingValue = $(this).data('value');
    
    $('.vpcft7', $('#commentform')).text(ratingValue);
  });
});

$(window).on("load resize", function () {
  if ($(".js-table-scroll").length) {
    if (window.matchMedia("(max-width: 1679px)").matches) {
      $(".js-table-scroll").mCustomScrollbar({
        axis: "x",
        passive: true,
        mouseWheel: {
          enable: false,
        },
      });
    } else {
      $(".js-table-scroll").mCustomScrollbar("destroy");
    }
  }

  if ($(".js-menu-scroll").length) {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      $(".js-menu-scroll").mCustomScrollbar({
        axis: "y",
        passive: true,
      });
    } else {
      $(".js-menu-scroll").mCustomScrollbar("destroy");
    }

    if ($(window).height() <= 765) {
      $(".js-menu-scroll").css("height", 285);
    } else {
      $(".js-menu-scroll").css("height", 600);
    }
  }

  if ($(".js-scroll-bar-vertical").length) {
    $(".js-scroll-bar-vertical").mCustomScrollbar({
      axis: "y",
      passive: true,
    });
  }
});

// change size
function changeImgHeight() {
  var sidebarHeight = $(".js-height").outerHeight();
  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".js-side-height").css("max-height", 200);
  } else if (window.matchMedia("(max-width: 1623px)").matches) {
    $(".js-side-height").css("max-height", 365);
  } else {
    $(".js-side-height").css("max-height", sidebarHeight);
  }
}

function changeSliderHeight() {
  var infoHeight = $(".js-info-height").outerHeight();
  if (window.matchMedia("(min-width: 1625px)").matches) {
    $(".js-slider-height").css("height", infoHeight);
  } else if (window.matchMedia("(max-width: 567px)").matches) {
    $(".js-slider-height").css("height", "296px");
  } else {
    $(".js-slider-height").css("height", "auto");
  }
}

function infoCardHeight() {
  var cardInfoColumn = $(".js-info-slider-height").outerHeight();
  if (window.matchMedia("(min-width: 1625px)").matches) {
    $(".js-info-slide").css("min-height", cardInfoColumn + 10);
  } else {
    $(".js-info-slide").css("min-height", cardInfoColumn);
  }
}

// for info_card component
function addClassForCard(card1, hoverStyle1, card2, hoverStyle2) {
  $(card1).hover(
    function () {
      $(card2).removeClass(hoverStyle2);
      $(card1).removeClass(hoverStyle1);
    },
    function () {
      $(this).addClass(hoverStyle1);
    }
  );
}

// call function with delay
function debounce(fn, interval) {
  let timer;

  return function () {
    clearTimeout(timer);
    const args = arguments;
    const self = this;

    timer = setTimeout(function () {
      fn.apply(self, args);
    }, interval);
  };
}

// Add animation
(function ($) {
  var addClassAnimation = {
    elementAnim: ".js-animate",
    classAnim: "is-animated",
  };

  addClassAnimation.add = function (element) {
    var $self = this;
    var element = this.elementAnim;
    var addClass = this.classAnim;

    $(element).each(function () {
      var $this = $(this);

      var offsetEl = $this.offset();

      if (offsetEl.top <= $(document).scrollTop() + $(window).height() / 1) {
        $this.addClass(addClass);
      }
    });
  };

  $.fn.AddClassAnimation = function (options) {
    if (options && typeof options === "object") {
      $.extend(addClassAnimation, options);
    }

    var $this = $(this);

    addClassAnimation.add($this);

    $(window).on("scroll", function () {
      addClassAnimation.add($this);
    });

    return this;
  };
})(jQuery);

// validate contacts
var validateParams = {
  rules: {
    author: "required",
    subject: "required",
    comment: {
      required: true,
      minlength: 10,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    author: $('[for="author"]').data("error"),
    comment: $('[for="comment"]').data("error"),
    email: $('[for="email"]').data("error"),
    subject: $('[for="subject"]').data("error"),
  },
  submitHandler: function submitHandler(form) {
    console.log(form)
    var loader =
      '<div class="c-loader" style="margin: 20px auto auto auto"></div>';
    $("#form-message").remove();
    $(".wpcf7-form").append(loader);
    $("#commentform").append(loader);

    setTimeout(function () {
      $(".c-loader").remove();
      $(".wpcf7-form [name]").val("");
      $("#commentform [name]").val("");

      var message =
        '<div id="form-message" style="display: block; text-align: center; margin-top: 15px">' +
        $("#submit_button").data("send") +
        "</div>";

      if ($("#form-message").length === 0) {
        $(".wpcf7-form").append(message);
        $("#commentform").append(message);
        $('.vpcft7', form).html('5');
        $('#comment-star-5', form).prop('checked', true)
      }
    }, 1000);
  },
};

// for youtube video
function findVideos() {
  var videos = document.querySelectorAll(".js-video");

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  var link = video.querySelector(".js-video-link");
  var media = video.querySelector(".js-video-media");
  var button = video.querySelector(".js-video-button");
  var name = video.querySelector(".js-video-name");
  var id = media.getAttribute("data-yid");

  video.addEventListener("click", () => {
    var iframe = createIframe(id);

    // link.remove();
    button.remove();
    name.remove();
    video.appendChild(iframe);
  });

  // link.removeAttribute("href");
  video.classList.add("is-enabled");
}

function createIframe(id) {
  var iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("iframe-video");

  return iframe;
}

function generateURL(id) {
  var query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}

// rating
(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // Node/CommonJS для Browserify
    module.exports = factory;
  } else {
    // Используя глобальные переменные браузера
    factory(jQuery);
  }
})(function ($) {
  "use script";

  var StarRating = function (elm, option) {
    var elRat = $(elm),
      elRatRange = elRat.find(".js-rating__range"),
      valMaxRat = Number(elRat.attr("data-max-rat")),
      valRat = Number(elRat.attr("data-rat"));

    var self,
      calculatingVal = function (maxRat, Rat) {
        if (Rat > maxRat) Rat = maxRat;
        return (Rat / maxRat) * 100;
      },
      setRat = function () {
        elRatRange.css("width", calculatingVal(valMaxRat, valRat) + "%");
      },
      init = function () {
        setRat();
      };
    self = {
      init: init,
    };
    return self;
  };

  $.fn.starRating = function (opt) {
    return this.each(function () {
      var starRating;
      if (!$(this).data("starRating")) {
        starRating = new StarRating(this, $.extend(true, {}, opt));
        starRating.init();
        $(this).data("starRating", starRating);
      }
    });
  };
});
