$(document).ready(function () {
  $.ajax({
    url: "https://api.adkey-seo.com/api/website/get-website/610",
    type: "GET",
    dataType: "json",
    success: function (response) {
      console.log("data:", response);
      const allMainLinks = $(".js-href-main");
      const allSecondLinks = $(".js-href-second");
      let j = 0;
      for (let i = 0; i < allSecondLinks.length; i++) {
        j += 1;
        if (j >= response.offers.length) {
          j = 0;
        }
        allSecondLinks[i].setAttribute("href", response.offers[j].link);

        // console.log(allSecondLinks[i]);
      }
      allMainLinks.each((index, el) => {
        const $el = $(el);
        $el.attr("href", response.offers[0].link);
      });
    },
    error: function (xhr, status, error) {
      console.error("Ошибка запроса:", error);
    },
  });
});
