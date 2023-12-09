var myDiv=document.getElementsByTagName("div");

for(let i=0;i<3;i++)
{
    for(let a=0;a<5;a++)
    {
        var myRandom=Math.floor(Math.random()*100)+1;

        let newImage=document.createElement("img");

        myDiv[0].appendChild(newImage);

        newImage.setAttribute('id',`${i} ${a}`);

        newImage.setAttribute('alt','Missing!')

        newImage.setAttribute('style','margin:auto;width:330px; margin-bottom:20px;');

        newImage.setAttribute('class','img-thumbnail');

        newImage.setAttribute('src',`https://source.unsplash.com/random/300x300?random=${myRandom}`);
    }
}