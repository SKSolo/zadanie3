<html>
<head>
    <script>
        function sprawdz(){

            var fullName = document.getElementById("imie").value;
            if (fullName.match(/^<.+?>$/)){
                document.getElementById("imie").style.backgroundColor='red';
            }
            else
            {
                document.getElementById("imie").style.backgroundColor='green';
            }
                /////////////
            var naz = document.getElementById("nazwisko").value;
            if (naz.match(/^<a href=".+">.+<\/a>$/)){
                document.getElementById("nazwisko").style.backgroundColor='red';
            }
            else
            {
                document.getElementById("nazwisko").style.backgroundColor='green';
            }
                /////////////
            var fullName = document.getElementById("kod").value;
            if (fullName.match(/^[A-Z][a-z]+$/)){
                document.getElementById("kod").style.backgroundColor='red';
            }
            else
            {
                document.getElementById("kod").style.backgroundColor='green';
            }
                ////////////
             var pocztowy = document.getElementById("miasto").value;
			 if (pocztowy.match(/^(\+|-)[0-9]+(\.?[0-9])*$/)){
                document.getElementById("miasto").style.backgroundColor='red';
             }
             else
             {
                 document.getElementById("miasto").style.backgroundColor='green';
             }
                ////////////
     
         
        }
    </script>
</head>

<body>

    <input type="text" id="imie" placeholder="znaczniki" onkeyup="sprawdz()"></br></br>
    <input type="text" id="nazwisko" placeholder="link" onkeyup="sprawdz()"></br></br>
    <input type="text" id="kod" placeholder="liczba calkowita ze znakiem" onkeyup="sprawdz()"></br></br>
    <input type="text" id="miasto" placeholder="liczba calkowita bez e" onkeyup="sprawdz()"></br></br>

  
    

</body>

</html>
