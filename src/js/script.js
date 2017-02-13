let iCurrentFigure = 0,
	iFigureAmount,
	aFigures;
const fChangeFigure = function(){
	aFigures[ iCurrentFigure ].classList.add("hide");
	if ( ++iCurrentFigure === iFigureAmount){
		iCurrentFigure = 0;
	}
	aFigures[ iCurrentFigure ].classList.remove("hide");
}

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
	//3. trombinoscope
	aFigures = Array.from(document.querySelectorAll("#trombino figure"));
	aFigures.forEach(function($elt, iIndex){
		if (iIndex>0){
			$elt.classList.add("hide")
		}
	});
	iFigureAmount=aFigures.length;
	setInterval( fChangeFigure, 1000);
});