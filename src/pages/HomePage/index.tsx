import { Container } from "../../components/Container";
import { useNavigate } from "react-router-dom";
import { FaFilm, FaUserFriends, FaBook } from "react-icons/fa";
import { GiMagicSwirl } from "react-icons/gi";
import styles from "./styles.module.css";

export function HomePage() {
	const navigate = useNavigate();

	return (
		<Container>
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<h1>Bem-vindo à Harry Potter Wiki</h1>
					<p>
						Explore o mundo mágico de Harry Potter com informações
						detalhadas sobre filmes, personagens e feitiços
					</p>
				</div>
			</section>

			<section className={styles.cardsSection}>
				<div
					className={styles.card}
					onClick={() => navigate("/movies")}
				>
					<div className={styles.cardIcon}>
						<FaFilm />
					</div>
					<h2>Filmes</h2>
					<p>
						Descubra detalhes sobre todos os filmes da saga Harry
						Potter
					</p>
					<button className={styles.cardButton}>Explorar</button>
				</div>

				<div
					className={styles.card}
					onClick={() => navigate("/characters")}
				>
					<div className={styles.cardIcon}>
						<FaUserFriends />
					</div>
					<h2>Personagens</h2>
					<p>Conheça os personagens icônicos do universo mágico</p>
					<button className={styles.cardButton}>Explorar</button>
				</div>

				<div
					className={styles.card}
					onClick={() => navigate("/spells")}
				>
					<div className={styles.cardIcon}>
						<GiMagicSwirl />
					</div>
					<h2>Feitiços</h2>
					<p>Aprenda sobre os feitiços mais poderosos da magia</p>
					<button className={styles.cardButton}>Explorar</button>
				</div>

				<div className={styles.card} onClick={() => navigate("/books")}>
					<div className={styles.cardIcon}>
						<FaBook />
					</div>
					<h2>Livros</h2>
					<p>Explore todos os livros oficiais da saga Harry Potter</p>
					<button className={styles.cardButton}>Explorar</button>
				</div>
			</section>

			<section className={styles.aboutSection}>
				<h2>Sobre este site</h2>
				<p>
					Esta é uma aplicação educacional criada para explorar e
					praticar conceitos modernos de desenvolvimento web,
					utilizando dados reais do universo de Harry Potter.
				</p>
			</section>
		</Container>
	);
}
