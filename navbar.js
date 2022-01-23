//get header and footer in document of the HTML
const header = document.getElementById('navbar');

//set in the structure of the html-elements in header 
header.innerHTML=`
    <a href="startside.html"><img id="navbarLogo" src="/images/homebutton.png" alt="Homebutton" width="300" height="100"></a>
    <div class="navbarLinks">
        <a href="Programoversikt.html" class="navbarLink"><span class="un">Program</span></a>
        <a href="VåreSPonsorer.html" class="navbarLink"><span class="un">Sponsorer</span></a>
        <a href="startside.html#epost_container" class="navbarLink"><span class="un">Kontakt</span></a>
    </div>
`