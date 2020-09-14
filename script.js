var lis=document.querySelectorAll("li");

for(var i=0; i< lis.length; i++){
	lis[i].addEventListener("mouseover",function(){
		this.classList.add("color");
	});

	lis[i].addEventListener("mouseout",function(){
		this.classList.remove("color");
	});

		lis[i].addEventListener("click",function(){
		this.classList.toggle("selected");
	});

}
<script type="text/javascript">
        


if(screen.width<=699){
    document.location="C:\\Users\\dkool\\Desktop\\IEEE\\Mobile Site\\index.html";
}
</script>