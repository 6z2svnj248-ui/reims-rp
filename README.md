# reims-rp
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Reims RP 🇫🇷</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, sans-serif;
            background: #0b0b12;
            color: white;
        }

        /* NAVBAR */

        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 18px 7%;
            background: rgba(10, 10, 17, 0.95);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            border-bottom: 1px solid #242438;
        }

        .logo {
            font-size: 23px;
            font-weight: bold;
            color: #a970ff;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        nav a:hover {
            color: #a970ff;
        }

        /* HERO */

        .hero {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 100px 20px 50px;
            background:
                radial-gradient(circle at center, #24153d 0%, #0b0b12 55%);
        }

        .hero h1 {
            font-size: 65px;
            margin-bottom: 15px;
        }

        .hero h1 span {
            color: #a970ff;
        }

        .hero p {
            color: #bdbdcc;
            font-size: 19px;
            max-width: 650px;
            margin: auto;
            line-height: 1.6;
        }

        .buttons {
            margin-top: 30px;
        }

        .btn {
            display: inline-block;
            padding: 14px 25px;
            margin: 7px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        .primary {
            background: #8d4cff;
            color: white;
        }

        .primary:hover {
            background: #7135d8;
            transform: translateY(-3px);
        }

        .secondary {
            border: 1px solid #8d4cff;
            color: white;
        }

        .secondary:hover {
            background: #8d4cff;
        }

        /* SECTIONS */

        section {
            padding: 90px 7%;
        }

        .title {
            text-align: center;
            margin-bottom: 45px;
        }

        .title h2 {
            font-size: 35px;
            margin-bottom: 10px;
        }

        .title p {
            color: #9999aa;
        }

        /* CARDS */

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: auto;
        }

        .card {
            background: #13131d;
            border: 1px solid #252538;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: #8d4cff;
        }

        .card .icon {
            font-size: 40px;
            margin-bottom: 15px;
        }

        .card h3 {
            margin-bottom: 10px;
        }

        .card p {
            color: #a6a6b5;
            line-height: 1.5;
        }

        /* VIP */

        .vip {
            max-width: 450px;
            margin: auto;
            background: linear-gradient(145deg, #181323, #101016);
            border: 2px solid #8d4cff;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 0 35px rgba(141, 76, 255, 0.15);
        }

        .vip h3 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        .price {
            font-size: 45px;
            font-weight: bold;
            color: #a970ff;
            margin: 15px 0 25px;
        }

        .vip ul {
            list-style: none;
            text-align: left;
            margin-bottom: 25px;
        }

        .vip li {
            margin: 12px 0;
            color: #d0d0dc;
        }

        /* REGLEMENT */

        .rules {
            max-width: 850px;
            margin: auto;
        }

        .rule {
            background: #13131d;
            border: 1px solid #252538;
            padding: 20px;
            margin-bottom: 12px;
            border-radius: 10px;
        }

        .rule strong {
            color: #a970ff;
        }

        /* FOOTER */

        footer {
            text-align: center;
            padding: 35px 20px;
            background: #08080d;
            border-top: 1px solid #242438;
            color: #777787;
        }

        footer strong {
            color: #a970ff;
        }

        /* MOBILE */

        @media (max-width: 700px) {

            nav {
                padding: 15px 20px;
            }

            nav ul {
                display: none;
            }

            .hero h1 {
                font-size: 45px;
            }

            .hero p {
                font-size: 16px;
            }

            section {
                padding: 70px 20px;
            }

            .title h2 {
                font-size: 29px;
            }
        }
    </style>
</head>

<body>

    <!-- NAVIGATION -->

    <nav>
        <div class="logo">🇫🇷 REIMS RP</div>

        <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#boutique">Boutique</a></li>
            <li><a href="#reglement">Règlement</a></li>
            <li><a href="#support">Support</a></li>
        </ul>
    </nav>


    <!-- ACCUEIL -->

    <section class="hero" id="accueil">

        <div>

            <h1>REIMS <span>RP</span> 🇫🇷</h1>

            <p>
                Bienvenue sur Reims RP, un serveur français
                basé sur un RP sérieux, réaliste et immersif.
            </p>

            <div class="buttons">

                <a
                    class="btn primary"
                    href="https://discord.gg/xKsJAY4xr"
                    target="_blank">
                    💬 Rejoindre Discord
                </a>

                <a
                    class="btn secondary"
                    href="#boutique">
                    👑 Voir la boutique
                </a>

            </div>

        </div>

    </section>


    <!-- PRESENTATION -->

    <section>

        <div class="title">
            <h2>Pourquoi Reims RP ?</h2>
            <p>Une communauté qui évolue avec ses joueurs.</p>
        </div>

        <div class="cards">

            <div class="card">
                <div class="icon">🚓</div>
                <h3>RP immersif</h3>
                <p>
                    Des scènes RP basées sur le sérieux,
                    le respect et l'immersion.
                </p>
            </div>

            <div class="card">
                <div class="icon">👥</div>
                <h3>Communauté</h3>
                <p>
                    Rejoins une communauté française
                    et participe à la vie du serveur.
                </p>
            </div>

            <div class="card">
                <div class="icon">🛡️</div>
                <h3>Staff actif</h3>
                <p>
                    Une équipe disponible pour accompagner
                    les joueurs et gérer le serveur.
                </p>
            </div>

        </div>

    </section>


    <!-- BOUTIQUE -->

    <section id="boutique">

        <div class="title">
            <h2>👑 Boutique</h2>
            <p>Découvrez nos avantages exclusifs.</p>
        </div>

        <div class="vip">

            <h3>VIP Permanent</h3>

            <div class="price">5€</div>

            <ul>
                <li>✅ Rôle VIP Discord</li>
                <li>✅ Accès aux salons VIP</li>
                <li>✅ Avantages exclusifs</li>
                <li>✅ Événements VIP</li>
                <li>✅ Badge VIP</li>
            </ul>

            <!-- À remplacer par ton système de paiement -->

            <a
                class="btn primary"
                href="https://discord.gg/xKsJAY4xr"
                target="_blank">
                🛒 Acheter le VIP
            </a>

            <p style="margin-top:15px;color:#777;">
                Le paiement sera effectué via le support Discord.
            </p>

        </div>

    </section>


    <!-- REGLEMENT -->

    <section id="reglement">

        <div class="title">
            <h2>📜 Règlement</h2>
            <p>Quelques règles essentielles de Reims RP.</p>
        </div>

        <div class="rules">

            <div class="rule">
                <strong>01 — Respect</strong>
                <p>
                    Respect obligatoire envers les joueurs et le staff.
                </p>
            </div>

            <div class="rule">
                <strong>02 — FreeKill / FreeShoot</strong>
                <p>
                    Les actions sans raison RP valable sont interdites.
                </p>
            </div>

            <div class="rule">
                <strong>03 — MetaGaming</strong>
                <p>
                    L'utilisation d'informations obtenues hors RP
                    est interdite.
                </p>
            </div>

            <div class="rule">
                <strong>04 — PowerGaming</strong>
                <p>
                    Les actions irréalistes ou impossibles
                    dans le cadre du RP sont interdites.
                </p>
            </div>

            <div class="rule">
                <strong>05 — Staff</strong>
                <p>
                    Les décisions du staff doivent être respectées.
                </p>
            </div>

        </div>

    </section>


    <!-- SUPPORT -->

    <section id="support">

        <div class="title">

            <h2>🎫 Support</h2>

            <p>
                Une question, un problème ou une demande ?
                Notre équipe est disponible sur Discord.
            </p>

            <div class="buttons">

                <a
                    class="btn primary"
                    href="https://discord.gg/xKsJAY4xr"
                    target="_blank">
                    🎫 Ouvrir un ticket
                </a>

            </div>

        </div>

    </section>


    <!-- FOOTER -->

    <footer>

        <p>
            © 2026 <strong>Reims RP</strong> — Tous droits réservés.
        </p>

        <p style="margin-top:8px;">
            Serveur communautaire indépendant.
        </p>

    </footer>

</body>
</html>