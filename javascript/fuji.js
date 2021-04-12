    // Get the modal
    var modal1 = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');
    var modal3 = document.getElementById('myModal3');
    var modal4 = document.getElementById('myModal4');
    var modal5 = document.getElementById('myModal5');
    var modal6 = document.getElementById('myModal6');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = document.getElementById('myImg1');
    var modalImg1 = document.getElementById("img01");
    var captionText1 = document.getElementById("caption1");
    img1.onclick = function () {
        modal1.style.display = "block";
        modalImg1.src = this.src;
        modalImg1.alt = this.alt;
        captionText1.innerHTML = this.alt;
    }

    var img2 = document.getElementById('myImg2');
    var modalImg2 = document.getElementById("img02");
    var captionText2 = document.getElementById("caption2");
    img2.onclick = function () {
        modal2.style.display = "block";
        modalImg2.src = this.src;
        modalImg2.alt = this.alt;
        captionText2.innerHTML = this.alt;
    }

    var img3 = document.getElementById('myImg3');
    var modalImg3 = document.getElementById("img03");
    var captionText3 = document.getElementById("caption3");
    img3.onclick = function () {
        modal3.style.display = "block";
        modalImg3.src = this.src;
        modalImg3.alt = this.alt;
        captionText3.innerHTML = this.alt;
    }

    var img4 = document.getElementById('myImg4');
    var modalImg4 = document.getElementById("img04");
    var captionText4 = document.getElementById("caption4");
    img4.onclick = function () {
        modal4.style.display = "block";
        modalImg4.src = this.src;
        modalImg4.alt = this.alt;
        captionText4.innerHTML = this.alt;
    }

    var img5 = document.getElementById('myImg5');
    var modalImg5 = document.getElementById("img05");
    var captionText5 = document.getElementById("caption5");
    img5.onclick = function () {
        modal5.style.display = "block";
        modalImg5.src = this.src;
        modalImg5.alt = this.alt;
        captionText5.innerHTML = this.alt;
    }

    var img6 = document.getElementById('myImg6');
    var modalImg6 = document.getElementById("img06");
    var captionText6 = document.getElementById("caption6");
    img6.onclick = function () {
        modal6.style.display = "block";
        modalImg6.src = this.src;
        modalImg6.alt = this.alt;
        captionText6.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal1.style.display = "none";
    }
    span.onclick = function () {
        modal2.style.display = "none";
    }
    span.onclick = function () {
        modal3.style.display = "none";
    }
    span.onclick = function () {
        modal4.style.display = "none";
    }
    span.onclick = function () {
        modal5.style.display = "none";
    }
    span.onclick = function () {
        modal6.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
        if (event.target == modal5) {
            modal5.style.display = "none";
        }
        if (event.target == modal6) {
            modal6.style.display = "none";
        }
    }