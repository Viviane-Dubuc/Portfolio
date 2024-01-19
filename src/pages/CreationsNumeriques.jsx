import { motion } from "framer-motion";
import Projet from "../components/Projet";
import Projets from "../components/Projets";

const sorcery = [
    {
        img: "/MP4/Sorcery.mp4",
        titre: "Modélisation et animation du personnage",
        competences: [
            { competence: "Projet personnel entièrement réalisé par moi-même" },
            { competence: "Défi dans le façonnage d'un visage réaliste" },
            { competence: "Création d'un modèle 3D d'un personnage à partir d'un dessin existant" }
        ],
        langages: [
            { langage: "3Ds Max et MudBox" },
            { langage: "Mixamo" },
            { langage: "After Effects" }
        ]
    },
    {
        img: "/JPG/Sorcery.jpg",
        titre: "Dessin du personnage",
        competences: [
            { competence: "Projet personnel entièrement réalisé par moi-même" },
            { competence: "Défi dans l'atteinte d'une apparence réaliste à un personnage fictif" },
            { competence: "Traçage des contours, coloration et ombrages" },
        ],
        langages: [
            { langage: "Photoshop" }
        ]
    }
];

const bow = [
    {
        img: "/JPG/Bow/3D.jpg",
        titre: "Modélisation du personnage",
        competences: [
            { competence: "Projet personnel entièrement réalisé par moi-même" },
            { competence: "Défi dans la création d'un personnage en 3D pour la première fois" },
            { competence: "Création d'un modèle 3D d'un personnage à partir d'un dessin existant" }
        ],
        langages: [
            { langage: "3Ds Max" },
            { langage: "Photoshop" }
        ]
    },
    {
        img: "/JPG/Bow/2D.jpg",
        titre: "Dessin du personnage",
        competences: [
            { competence: "Projet personnel entièrement réalisé par moi-même" },
            { competence: "Défi dans l'atteinte d'effets d'ombrage et de lumière plus convaicants" },
            { competence: "Traçage des contours, coloration et ombrages" },
        ],
        langages: [
            { langage: "Photoshop" }
        ]
    }
];

const paris = [
    {
        img: "/MP4/Paris.mp4",
        titre: "Animation du personnage",
        competences: [
            { competence: "Projet personnel entièrement réalisé par moi-même" },
            { competence: "Défi dans la création de composantes du corps avec des proportions à la fois réalistes, mais cartoonesques" },
            { competence: "Animation d'un d'un personnage à partir d'un dessin existant" }
        ],
        langages: [
            { langage: "Animate" }
        ]
    },
    {
        img: "/JPG/Paris.jpg",
        titre: "Dessin du personnage",
        competences: [
            { competence: "Projet personnel entièrement réalisé par moi-même" },
            { competence: "Défi dans le dessin d'une pose dynamique et de côté" },
            { competence: "Traçage des contours, coloration et ombrages" },
        ],
        langages: [
            { langage: "Photoshop" }
        ]
    }
];

const projets = [
    {
        video: "/MP4/Samba.mp4",
        titre: "Modélisation et animation d'un personnage",
        competences: [
            { competence: "Projet scolaire entièrement réalisé par moi-même" },
            { competence: "Défi dans lequel je devais produire un personnage low-poly en trois heures" },
            { competence: "Modélisation, texturation et courte animation du personnage pour tester ses mouvements" }
        ],
        langages: [
            { langage: "Blender" },
            { langage: "Mixamo" },
            { langage: "Unity" }
        ]
    },
    {
        video: "/MP4/Citronnade.mp4",
        titre: "Motion design",
        competences: [
            { competence: "Projet scolaire entièrement réalisé par moi-même" },
            { competence: "Fierté au niveau de l'originalité du projet et du soin de la présentation finale" },
            { competence: "Animation et création d'éléments 2D pour une publicité d'un produit fictif" }
        ],
        langages: [
            { langage: "After Effects" }
        ]
    }
];

const CreationsNumeriques = () => {
    return (
        <section id="creationsNumeriques" className="projets">
            <header>
                <h2>Créations numériques</h2>
            </header>
            <article>
                <div className="row-slide">
                    <h3>Sorcery</h3>
                    <div>
                        <Projets projets={sorcery}></Projets>
                    </div>
                </div>
                <div className="row-slide">
                    <h3>Bow</h3>
                    <div>
                        <Projets projets={bow}></Projets>
                    </div>
                </div>
                <div className="row-slide">
                    <h3>Paris</h3>
                    <div>
                        <Projets projets={paris}></Projets>
                    </div>
                </div>
                <div className="row-slide">
                    <h3>Samba</h3>
                    <div >
                        <Projet projet={projets[0]}></Projet>
                    </div>
                </div>
                <div className="row-slide">
                    <h3>Citronnade</h3>
                    <div>
                        <Projet projet={projets[1]}></Projet>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default CreationsNumeriques;