var elSiteHeaderToggler = document.querySelector(".site-header__toggler");
var elsSiteHeaderSection = document.querySelector(".site-header");

elSiteHeaderToggler.addEventListener("click", function () {
  elsSiteHeaderSection.classList.toggle("site-header--open");
  document.body.classList.toggle("page__body--site-header--open");
})
