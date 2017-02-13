let $tabs;

const fHandleTab = function(oEvent){
	oEvent.preventDefault();
	let $elt= oEvent.currentTarget;

	if ($elt.parentNode.classList.contains("active")){
		return;
	}
	document.querySelector("ul.nav.nav-tabs .active").classList.remove("active");
	$elt.parentNode.classList.add("active");
	document.querySelector(".tab-pane.active").classList.remove("active");
	document.getElementById($elt.getAttribute("data-tab-target")).classList.add("active");
	//check if current link is active
	//remove active class from old active
	//add active class to current
	//remove active class from old tab content
	//add active class to current's tab target
};

window.addEventListener( "load", function(){
	//1. a with rel=external opens in new window
	Array.from(document.querySelectorAll('a[rel*="external"]')).forEach(function($elt){
		$elt.setAttribute("target","_new");
	});
	//2. handle tab
	Array.from(document.querySelectorAll( "ul.nav.nav-tabs a")).forEach(function($elt){
		$elt.addEventListener("click",fHandleTab);
	});
	
});