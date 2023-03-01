const fn = (elem) => {
	$(elem).click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top - 150},'slow');
});
}

fn(".nav__link1")
fn(".nav__link2")
fn(".nav__link3")

fn(".map__link1")
fn(".map__link2")
fn(".map__link3")
fn(".map__link4")
fn(".map__link5")
fn(".map__link6")
fn(".map__link7")
fn(".map__link8")
fn(".map__link9")
fn(".map__link10")
fn(".map__link11")
