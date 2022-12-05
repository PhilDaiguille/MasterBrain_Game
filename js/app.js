document.addEventListener("DOMContentLoaded", () => {
    let t = [];
    let tentative = 0;
    /*----------Commencer----------- */
    begin = document.querySelector(".begin");

    window.addEventListener("load", () => {
        begin.innerHTML += `<figure>
        <h2>Règles</h2>
        <figcaption>
            <ul>
                <li>
                    Le but du jeu est de deviner une combinaison de couleurs choisie par le programme. Vous devez deviner la combinaison et vous devez faire des propositions en sélectionnant une combinaison de couleurs. Le programme qui a choisi
                    aléatoirement la combinaison indique pour chaque couleur de la proposition si elle est :
                </li>
                <li>
                     - bien placée (c'est-à-dire si elle fait partie de la combinaison et est à la bonne position) présente dans la combinaison (mais mal placée)

                </li>
                <li>
                    Vous devez deviner la combinaison doit utiliser ces indications pour faire de nouvelles propositions et essayer de deviner la combinaison en un minimum de coups.

                </li>
                <li>
                    Le jeu se termine lorsque vous avez trouvé la combinaison correctement.

                </li>
            </ul>
        </figcaption>
        <input type="button" value="Commencez à jouer">
    </figure>`;

        btn2 = document.querySelector(".begin > figure:nth-child(1) > input:nth-child(3)");
        btn2.addEventListener("click", () => {
            begin.innerHTML = "";
            begin.style.display = "none";
        });
    });

    /*-------FORM----------*/

    let btn, R, V, B, J, appear, réponse;
    réponse = document.querySelector("main .rep");
    btn = document.querySelector("body > main > section:nth-child(2) > form > fieldset > input[type=submit]");
    appear = document.querySelector(".appear");
    btn.addEventListener("click", e => {
        e.preventDefault();
        R = document.getElementsByTagName("select")[0].value;
        B = document.getElementsByTagName("select")[1].value;
        V = document.getElementsByTagName("select")[2].value;
        J = document.getElementsByTagName("select")[3].value;
        if (R && B && V && J) {
            Formulaire();
            tentative++;
        }
    });
    let Formulaire = () => {
        let c = [];
        let m = 0,
            f = 0;
        btn = document.querySelector("body > main:nth-child(2) > section:nth-child(1) > form:nth-child(2) > fieldset:nth-child(1) > input:nth-child(5)");
        R = document.getElementsByTagName("select")[0].value;
        B = document.getElementsByTagName("select")[1].value;
        V = document.getElementsByTagName("select")[2].value;
        J = document.getElementsByTagName("select")[3].value;
        c.push(R, B, V, J);
        appear = document.querySelector(".appear");
        for (let j = 0; j < t.length; j++) {
            if (t[j] == c[j]) {
                m++;
            } else {
                f++;
            }
        }

        appear.innerHTML += `<section class="pion">
			<p style="background-color:${verif(R)}">${R}</p>
			<p style="background-color:${verif(B)}">${B}</p>
			<p style="background-color:${verif(V)}">${V}</p>
			<p style="background-color:${verif(J)}">${J}</p>
			<div>
				<p class="bon">X ${m} bon</p>
				<p class="mauvais">X ${f} mauvais </p>
			</div>
		</section>
		`;

        if (m == 4) {
            réponse.innerHTML = `<section class="gagné">
			<h2>Bien joué ! Vous avez réussi avec ${tentative} tentative(s)</h2>
            <ul>
                <li style="background-color:${verif(t[0])}">${t[0]}</li>
                <li style="background-color:${verif(t[1])}">${t[1]}</li>
                <li style="background-color:${verif(t[2])}">${t[2]}</li>
                <li style="background-color:${verif(t[3])}">${t[3]}</li>
            </ul>
            <input type="button" value="Recommencer">
			</section>
			`;
        }
    };
    let couleur = X => {
        if (X == 0) {
            t.push("rouge");
        } else if (X == 1) {
            t.push("bleu");
        } else if (X == 2) {
            t.push("jaune");
        } else if (X == 3) {
            t.push("vert");
        }
    };
    for (let i = 0; i < 4; i++) {
        chercher = Math.random() * 3;
        chercher = Intl.NumberFormat("fr-FR", {
            maximumFractionDigits: 0
        }).format(chercher);
        couleur(chercher);
    }

    let verif = X => {
        if (X === "rouge") {
            couleur = "#e74c3c";
            return couleur;
        } else if (X == "bleu") {
            couleur = "#2980b9";
            return couleur;
        } else if (X == "jaune") {
            couleur = "#f1c40f";
            return couleur;
        } else if (X == "vert") {
            couleur = "#27ae60";
            return couleur;
        }
    };
});