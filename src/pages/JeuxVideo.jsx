import { motion } from "framer-motion";
import ProjetImages from "../components/ProjetImages";

const projets = [
    {
        img: ["/JPG/Cirque/Intro.jpg", "/JPG/Cirque/Combat.jpg", "/JPG/Cirque/Reussite.jpg", "/JPG/Cirque/Defaite.jpg", "/JPG/Cirque/Femme.jpg", "/JPG/Cirque/Homme.jpg", "/JPG/Cirque/Storyboard.jpg"],
        titre: "Jeu de combat au tour par tour",
        competences: [
            { competence: "Projet personnel entièrement réalisé par moi-même" },
            { competence: "Défi dans lequel j'ai réussi à programmer l'entièreté du jeu en moins de six heures" },
            { competence: "Rédaction de scripts pour la programmation, réalisation de sons et de musiques, création des éléments 2D" }
        ],
        langages: [
            { langage: "C# dans Unity" },
            { langage: "Photoshop" },
            { langage: "BandLab" }
        ]
    }, {
        img: ["/JPG/Cryox/Menu.jpg", "/JPG/Cryox/Intro.jpg", "/JPG/Cryox/Tutoriel.jpg", "/JPG/Cryox/Jeu.jpg", "/JPG/Cryox/Defi.jpg", "/JPG/Cryox/Victoire.jpg", "/JPG/Cryox/Defaite.jpg"],
        titre: "Jeu d'émergence procédural",
        competences: [
            { competence: "Projet scolaire réalisé en équipe de 3. L'un était chargé de la modélisation 3D, l'autre, de la programmation des interactions, et moi, de l'intégration" },
            { competence: "Pour plus de précision, mon rôle était d'intégrer les éléments produits par mes collègues, de réviser les éléments de programmation et de gérer l'équipe et les échéanciers" },
            { competence: "Défi pendant lequel j'ai beaucoup grandi, car j'y ai appris à respecter les limites des autres, à gérer une équipe ayant des lacunes et à reconnaître mes faiblesses" }
        ],
        langages: [
            { langage: "C# dans Unity" }
        ]
    }, {
        img: ["/JPG/Petit/Menu.jpg", "/JPG/Petit/Cadenas.jpg", "/JPG/Petit/Marteau.jpg", "/JPG/Petit/Xylophone.jpg", "/JPG/Petit/Casse-tete.jpg"],
        titre: "Jeu d'évasion en réalité virtuelle",
        competences: [
            { competence: "Projet scolaire réalisé en équipe de 4. Deux personnes étaient chargées des éléments visuels et les deux autres des éléments de programmation" },
            { competence: "Pour plus de précision, mon rôle était d'intégrer les éléments produits par mes collègues et de programmer les différentes étapes par lesquelles le joueur devait passer pour parvenir à s'évader" },
            { competence: "Fierté d'avoir produit un jeu en réalité virtuelle comportant des interactions diverses avec l'environnement" }
        ],
        langages: [
            { langage: "C# dans Unity" }
        ]
    }
];

const JeuxVideo = () => {
    return (
        <section id="jeuxVideo" className="projets">
            <header>
                <h2>Jeux vidéo</h2>
            </header>
            <article>
                <div className="row-slide">
                    <h3>Le cirque</h3>
                    <div >
                        <ProjetImages projet={projets[0]}></ProjetImages>
                    </div>
                </div>
                <div className="row-slide">
                    <h3>Cryox</h3>
                    <div>
                        <ProjetImages projet={projets[1]}></ProjetImages>
                    </div>
                </div>
                <div className="row-slide">
                    <h3>Je suis petit maintenant!</h3>
                    <div>
                        <ProjetImages projet={projets[2]}></ProjetImages>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default JeuxVideo;