function on (h, i, j) {
    var a = document.querySelector('.'+ h);
    a.style.position='static';
    a.style.color='#0085FF';
    a.style.transition = "all 1s";


    var b = document.querySelector('.'+ i );
    b.style.color='#0085FF';
    b.style.transition = "all 1s";

    var c = document.querySelector('.'+ j );
    c.style.borderBottom= "2px solid #0085FF";
    c.style.transition = "all 1s";
}