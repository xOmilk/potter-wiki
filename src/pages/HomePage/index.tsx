import { useNavigate } from "react-router-dom";
import { Clapperboard, Users, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { Container } from "../../components/Container";
import styles from "./styles.module.css";

const sections = [
	{
		route: "/movies",
		icon: Clapperboard,
		title: "Filmes",
		description: "Todos os filmes da saga, com trailers e detalhes de cada produção.",
	},
	{
		route: "/characters",
		icon: Users,
		title: "Personagens",
		description: "Conheça os personagens icônicos e os atores que os viveram.",
	},
	{
		route: "/spells",
		icon: Sparkles,
		title: "Feitiços",
		description: "Do Expecto Patronum ao Avada Kedavra — todos os encantamentos.",
	},
	{
		route: "/books",
		icon: BookOpen,
		title: "Livros",
		description: "Os sete volumes que deram origem ao universo mágico.",
	},
];

export function HomePage() {
	const navigate = useNavigate();

	return (
		<Container>
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<h1>Bem-vindo à Harry Potter Wiki</h1>
					<p>
						Explore o mundo mágico com informações sobre filmes,
						personagens, feitiços e livros da saga.
					</p>
				</div>
				<div className={styles.heroDivider} />
			</section>

			<section className={styles.cardsSection}>
				{sections.map(({ route, icon: Icon, title, description }) => (
					<div
						key={route}
						className={styles.card}
						onClick={() => navigate(route)}
					>
						<div className={styles.cardIcon}>
							<Icon size={28} strokeWidth={1.5} />
						</div>
						<h2>{title}</h2>
						<p>{description}</p>
						<span className={styles.cardLink}>
							Explorar <ArrowRight size={13} strokeWidth={2} />
						</span>
					</div>
				))}
			</section>

			<div className={styles.aboutDivider} />
			<section className={styles.aboutSection}>
				<h2>Sobre este site</h2>
				<p>
					Uma aplicação educacional criada para explorar conceitos modernos
					de desenvolvimento web, usando dados reais do universo de Harry Potter.
				</p>
			</section>
		</Container>
	);
}
