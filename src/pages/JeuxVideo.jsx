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
        img: ["/JPG/Labo/Intro.jpg", "/JPG/Labo/Carte1.jpg", "/JPG/Labo/Carte2.jpg", "/JPG/Labo/Tutoriel.jpg", "/JPG/Labo/Instructions.jpg", "/JPG/Labo/Generique.jpg"],
        titre: "Jeu compétitif à deux",
        competences: [
            { competence: "Projet scolaire réalisé en équipe de 2. L'un était chargé de la modélisation 3D, et moi, de la programmation de l'interactivité" },
            { competence: "Travail produit en moins d'une semaine pour un total de 80 heures de travail" },
            { competence: "Rédaction de scripts pour la programmation, réalisation de la musique et des éléments de UI, intégration des éléments 3D" }
        ],
        langages: [
            { langage: "C# dans Unity" },
            { langage: "Photoshop" },
            { langage: "BandLab" }
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
            </article>
        </section>
    );
};

export default JeuxVideo;