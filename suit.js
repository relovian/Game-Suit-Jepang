const scorePlayer = document.querySelector('.score_player');
const scoreComp = document.querySelector('.score_comp');
const submit = document.querySelector('.submit');
const inputElement = document.getElementById("input");

    function putar(){
        const imgComp = document.querySelector('.img_comp');
        const gambar = ["BATU", "KERTAS", "GUNTING"];
        let i = 0;

        const waktuMulai = new Date().getTime();


        setInterval(function() {

            if(new Date().getTime() - waktuMulai > 2500){
                clearInterval;
                return;
            }

            imgComp.setAttribute('src', 'gambar/' + gambar[i++] + '.png');

            if(i == gambar.length){
                i = 0;
            }

        }, 100)

    }


    submit.addEventListener("click", () =>{
        let imgPlayer = document.querySelector('.img_player');
        let imgComp = document.querySelector('.img_comp');
        let inputNilai = inputElement.value;
        let playerNilai = scorePlayer.textContent;
        let score_player = parseInt(playerNilai, 0);
        let compNilai = scoreComp.textContent;
        let score_comp = parseInt(compNilai, 0);
        
        if(inputNilai === ''){
            event.preventDefault();
            alert('Input tidak boleh kosong!');
            return;
        } 
        
        if(inputNilai != "BATU" && inputNilai != "KERTAS" && inputNilai != "GUNTING"){
            event.preventDefault();
            alert('Masukkan Pilihan Antara : Batu, Gunting, Dan Kertas');
            return;
        } 

        let angkaRandom = Math.floor(Math.random() * 3) + 1;
        let inputComp;
        let inputPlayer;

        
        if(angkaRandom == 1){
            inputComp = "BATU";
        } else if(angkaRandom == 2) {
            inputComp = "GUNTING";
        } else if(angkaRandom == 3){
            inputComp = "KERTAS";
        }

        if(inputNilai == "BATU"){
            inputPlayer = "BATU";
        } else if(inputNilai == "GUNTING") {
            inputPlayer = "GUNTING";
        } else if(inputNilai == "KERTAS"){
            inputPlayer = "KERTAS";
        }


        let hasil;

        
        putar();
        
        setTimeout(function(){
            
            if(inputPlayer == inputComp){
                hasilPlayer = "SERI";
                hasilComp = "SERI";
            } else if(inputPlayer == "BATU" && inputComp == "KERTAS"){
                hasilPlayer = "KALAH";
                hasilComp = "MENANG";
            } else if(inputPlayer == "KERTAS" && inputComp == "BATU"){
                hasilPlayer = "MENANG";
                hasilComp = "KALAH";
            } else if(inputPlayer == "GUNTING" && inputComp == "KERTAS"){
                hasilPlayer = "MENANG"; 
                hasilComp = "KALAH"; 
            } else if(inputPlayer == "KERTAS" && inputComp == "GUNTING"){
                hasilPlayer = "KALAH";
                hasilComp = "MENANG";
            } else if(inputPlayer == "GUNTING" && inputComp == "BATU"){
                hasilPlayer = "KALAH";
                hasilComp = "MENANG";
            } else if(inputPlayer == "BATU" && inputComp == "GUNTING"){
                hasilPlayer = "MENANG";
                hasilComp = "KALAH";
            }
            
            imgComp.src = `gambar/${inputComp}.png`;

            if(hasilPlayer == "MENANG"){
                score_player++;
                if(score_player === 3){
                    hasilPlayer = "MENANG";
                    alert('SELAMAT ANDA : ' + hasilPlayer);
                    scorePlayer.innerHTML = score_player;
                    location.reload();
                    return;
                } else {   
                    scorePlayer.innerHTML = score_player;
                }

            } else if(hasilComp == "MENANG"){
                score_comp++;
                if(score_comp === 3){
                    hasilPlayer = "KALAH";
                    alert('MAAF ANDA : ' + hasilPlayer + ' silahkan coba lagi');
                    scoreComp.innerHTML = score_comp;
                    location.reload();
                    return;
                } else {
                    scoreComp.innerHTML = score_comp;
                }
            }

            console.log(score_comp); 
            console.log(score_player); 
        }, 2500)
        
        imgPlayer.src = `gambar/${inputPlayer}.png`;

    });