import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const APropos = () => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id="aPropos">
            <article className="content">
                <h2>À propos</h2>
                <h3>Parce que j'ai du <span>plaisir</span> à apprendre!</h3>
                <p>Je me lance dans des études en <strong>Techniques d'Intégration Multimédia</strong> au Cégep de Saint-Jérôme en 2021. Je suis rapidement devenue un atout en matière <strong>de création de sites Web et de jeux vidéo</strong>. Conception, design, intégration, programmation, gestion... J'ai beaucoup de talents et ils sont à la base de ma réussite. J'ai certainement trouvé ma place!</p>
                <a href="/PDF/CV.pdf" target="_blank">Mon CV <FaFilePdf /></a>
            </article>
            <article>
                <img src="/JPG/Viviane.jpg" alt="" />
            </article>
        </motion.section>
    );
};

export default APropos;