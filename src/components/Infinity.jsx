import './css/Infinity.scss';

function Infinity() {
    return (
        <div className="infinity-container">
            {/* SVG qui contient le symbole infini et le cercle */}
            <svg
                viewBox="-140 -60 280 120" // Vue du SVG : coordonne le système de coordonnées du tracé
                xmlns="http://www.w3.org/2000/svg" // Namespace SVG obligatoire
                className="infinity" // Classe CSS pour styliser le SVG
            >
                <path
                    id="infinity-path" // ID nécessaire pour que le cercle suive ce chemin
                    // M -100 0 // Déplace le point de départ à (-100,0)
                    // C -100 -40,  -50 -40,   0 0  // Première courbe de Bézier (boucle gauche haut)
                    // C 50 40,    100 40,    100 0 // Deuxième courbe (boucle droite bas)
                    //  C 100 -40,   50 -40,    0 0  // Troisième courbe (boucle droite haut)
                    // C -50 40,  -100 40,  -100 0  // Quatrième courbe (boucle gauche bas)
                    // Z                              // Ferme le chemin pour le rendre continu
                    d="
                        M -100 0
                        C -100 -40,  -50 -40,   0 0
                        C 50 40,    100 40,    100 0
                        C 100 -40,   50 -40,    0 0
                        C -50 40,  -100 40,  -100 0
                        Z
                    "
                    fill="none" // Pas de remplissage à l'intérieur du chemin
                    stroke="white" // Couleur du symbole infini
                    strokeWidth="10" // Épaisseur des contours du symbole infini
                    strokeLinecap="round" // Extrémités du trait arrondies
                    strokeLinejoin="round" // Jonctions entre segments arrondies
                />
                {/* 
                Cercle jaune qui suit le tracé du symbole infini 
                r = rayon du cercle
                animateMotion: animation pour suivre le chemin
                dur : durée d'une boucle entière
                repeatCount="indefinite": le cercle boucle à l'infini dans le symbole
                rotate="auto": fait tourner le cercle en fonction de la tangente du chemin
                */}
                <circle r="5" className="infinity-dot">
                    <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                        <mpath xlinkHref="#infinity-path" /> {/* Lien vers le path à suivre (ici le cercle suit le "path": symbole infini) */}
                    </animateMotion>
                </circle>
            </svg>
        </div>
    );
}

export default Infinity;