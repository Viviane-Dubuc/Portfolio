import { motion } from "framer-motion";

const Accueil = () => {
    return (
        <section id="accueil">
            <article className="content">
                <p>Je suis une</p>
                <p className="sliding-title">intégratrice multimédia</p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}>
                    collaborative</motion.p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 2 } }}>
                    persévérante</motion.p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 3 } }}>
                    productive</motion.p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 4 } }}>
                    respectueuse</motion.p>
            </article>
            <article className="cvvideo">
                <p>Découvrez mon <span>Demo reel</span></p>
                <video src="/MP4/CV-VIDÉO.mp4" controls></video>
            </article>
        </section >
    );
};

export default Accueil;