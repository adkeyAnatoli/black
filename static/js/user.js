document.addEventListener("DOMContentLoaded", function (event) {
  if ($(".js-affix-column-sidebar").length) {
    $(".js-affix-column-sidebar").affix({
      offset: {
        top: function () {
          return (this.top = $(".js-affix-column-sidebar").offset().top);
        },
        bottom: function () {
          return (this.bottom =
            $(".js-affix-stop").outerHeight(!0) +
            $(".js-affix-stop-plus").outerHeight(!0) +
            47);
        },
      },
    });

    fixHeightSideSidebar();

    function fixHeightSideSidebar() {
      var currentHeightSidebar = $(".js-affix-column-sidebar").height();

      $(".js-affix-box-sidebar").css("height", currentHeightSidebar);
    }

    function iffixRefreshSidebar() {
      fixHeightSideSidebar();
      $(".js-affix-column-sidebar").data("bs.affix").options.offset.top = $(
        ".js-affix-box-sidebar"
      ).offset().top;
      $(".js-affix-column-sidebar").data("bs.affix").options.offset.bottom =
        $(".js-affix-stop").outerHeight(true) +
        $(".js-affix-stop-plus").outerHeight(!0) +
        47;
    }

    setTimeout(function () {
      iffixRefreshSidebar();
    }, 2500);

    $(window).resize(function () {
      iffixRefreshSidebar();
    });
  }
});

jQuery(document).ready(function () {
  if (jQuery(".js-window-game").length) {
    setSizeWindow.setHeight(".js-window-game", 62);

    jQuery(window).on("resize", function () {
      setSizeWindow.setHeight(".js-window-game", 62);
    });
  }

  if (jQuery(".js-game-container").length) {
    fullScreen({ container: ".js-game-container" });

    jQuery(".js-iframe-btn").on("click", function () {
      if (
        (!navigator.plugins["Shockwave Flash"] &&
          iframes["iframe_mob"] == "") ||
        (iframes["iframe_mob"] == "" && iframes["iframe_web"] == "")
      ) {
        popupNoFlash();
        return;
      } else {
        iframeAdd(iframes);
        jQuery(".js-show-game").hide();
        setSizeWindow.setHeight(".js-window-game", 62);
        jQuery(window).on("resize", function () {
          setSizeWindow.setHeight(".js-window-game", 62);
        });
      }
    });
  }

  if (jQuery(".js-share").length) {
    jQuery(".js-share").each(function () {
      var container = jQuery(this).data("id");
      var link = jQuery(this).data("link");
      var calculateCount = jQuery(this).data("calculate");
      Share({
        container: "#" + container,
        link: link,
        calculateCount: calculateCount,
      });
    });
  }

  if ($(".js-availability").length) {
    var casino_id = $(".js-availability").data("casino-id");
    $.ajax({
      url: "/wp-admin/admin-ajax.php",
      type: "POST",
      data: {
        action: "ajax_geoloc_availability",
        casino_id: casino_id,
      },
      success: function (html) {
        $(".js-availability").html(html);
      },
    });
  }
});

function fullScreen(options) {
  var settings = jQuery.extend(
    {
      container: null,
      full: ".js-full",
      full_sc: "is-fullscreen",
      capImg: ".js-show-game",
    },
    options
  );
  jQuery(settings.container).each(function () {
    var container = jQuery(this);
    jQuery(settings.full, container).on("click", function () {
      container.toggleClass(settings.full_sc);
      if (jQuery(".js-game-container").length) {
        if (
          (!navigator.plugins["Shockwave Flash"] &&
            iframes["iframe_mob"] == "") ||
          (iframes["iframe_mob"] == "" && iframes["iframe_web"] == "")
        ) {
          popupNoFlash();
          container.toggleClass(settings.full_sc);
          return;
        } else {
          iframeAdd(iframes);
          jQuery(".js-show-game").hide();
        }
      }
    });
  });
}

function popupNoFlash() {
  jQuery("#popup-cork").modal("show");
}

function iframeAdd(options) {
  var settings = jQuery.extend(
    {
      container: ".js-iframe",
      iframe_mob: null,
      iframe_web: null,
    },
    options
  );

  jQuery(settings.container).each(function () {
    var container = jQuery(this);
    if (!navigator.plugins["Shockwave Flash"]) {
      container.html(settings.iframe_mob);
    } else {
      container.html(settings.iframe_web);
    }
  });
}

var setSizeWindow = (function (jQuery) {
  var _calcProportionFromWidth = function (width, percent) {
    return (width * percent) / 100;
  };
  var methods = {
    setHeight: function (selector, percent) {
      var width = jQuery(selector).outerWidth(),
        iframe = jQuery(selector).find("iframe");
      jQuery(selector).outerHeight(
        _calcProportionFromWidth(width, Number(percent))
      );
      iframe.on("load", function () {
        jQuery(this).css({
          width: "100%",
          height: "100%",
        });
      });
    },
  };
  return methods;
})(jQuery);

function showElements(options) {
  var settings = jQuery.extend(
    {
      container: null,
      elHide: ".is-hid",
      hide: "is-hid",
      numElements: 5,
      shower: ".js-showner-more",
    },
    options
  );

  jQuery(settings.container).each(function () {
    var container = jQuery(this);

    jQuery(document).ready(function () {
      var i = 0;
      jQuery(settings.elHide, container).each(function () {
        if (i + 1 <= settings.numElements) {
          jQuery(this).removeClass(settings.hide);
        }
        i++;
        if (!jQuery(settings.elHide, container).length) {
          jQuery(settings.shower, container).hide();
        }
      });
      return false;
    });

    jQuery(settings.shower, container).on("click", function () {
      var i = 0;
      jQuery(settings.elHide, container).each(function () {
        if (i + 1 <= settings.numElements) {
          jQuery(this).removeClass(settings.hide);
        }
        i++;
        if (!jQuery(settings.elHide, container).length) {
          jQuery(settings.shower, container).hide();
        }
      });
      return false;
    });
  });
  if (!jQuery(settings.elHide, settings.container).length) {
    jQuery(settings.shower, settings.container).hide();
  }
}

function Share(options) {
  var settings = jQuery.extend(
    {
      container: null,
      link: null,
      item: ".js-share-item",
      itemData: "share",
      calculateCount: false,
      itemCount: ".js-share-count",
    },
    options
  );

  var config = {
    fb: {
      url: function () {
        return (
          "https://www.facebook.com/sharer.php?m2w&u=" +
          encodeURIComponent(settings.link)
        );
      },
    },
    tw: {
      url: function () {
        return (
          "https://twitter.com/intent/tweet?url=" +
          encodeURIComponent(settings.link)
        );
      },
    },
  };

  var openShareWindow = function () {
    var code = jQuery(this).data(settings.itemData);

    if (config[code]) {
      var w = 600,
        h = 440,
        l = screen.width / 2 - w / 2,
        t = screen.height / 2 - h / 2;

      window.open(
        config[code].url(),
        "_blank",
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=" +
          w +
          ", height=" +
          h +
          ", top=" +
          t +
          ", left=" +
          l
      );
    }

    return false;
  };

  jQuery(settings.container).each(function () {
    var jQueryitems = jQuery(this).find(settings.item);

    jQueryitems.click(openShareWindow);

    if (settings.calculateCount) {
      jQueryitems.each(function () {
        var jQueryitem = jQuery(this),
          code = jQueryitem.data(settings.itemData);

        if (config[code] && config[code].count) {
          config[code].count(function (count) {
            jQueryitem.find(settings.itemCount).html(count);
          });
        }
      });
    }
  });
}
