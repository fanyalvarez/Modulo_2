document.getAnimations("save-user").addEventListener("clik", () => {
	console.log("guardar")
})

$(#"save-user").click(()=>{
	console.log("click desde jq")
	//ocualtar con vanilla y clases
	
})

$("#toogel-text").click (()=> {

	document.getElementById("text").classList.add("d-none")
})


$("body").fedeOut()

$(".card").slideDown()
$(".card").slideUp()

$(".card:eq(3)".slideUp()  //eq equal-index