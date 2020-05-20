count=0;
function changeimage(){
	var imgelement=document.getElementById("galleryimage")
	if(count%5==0)
	{
		imgelement.src="../images/image2.jpg";
		imgelement.alt="Second image";
	}
	else if(count%5==1)
	{
		imgelement.src="../images/image3.jpg";
		imgelement.alt="Third image";
	}
	else if(count%5==2)
	{
		imgelement.src="../images/image4.jpeg";
		imgelement.alt="Fourth image";
	}
	else if(count%5==3)
	{
		imgelement.src="../images/image5.jpeg";
		imgelement.alt="Fifth image";
	}
	else if(count%5==4)
	{
		imgelement.src="../images/image1.jpg";
		imgelement.alt="First image";
	}
	count++;
}