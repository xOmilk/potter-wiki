import { useState } from "react";

const PLACEHOLDER =
	'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23222" width="200" height="200" rx="10"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="%23666" font-size="48">✦</text></svg>';

type SpellImageProps = {
	slug: string;
	potterDbImage: string | null;
	alt: string;
	className?: string;
};

export function SpellImage({ slug, potterDbImage, alt, className }: SpellImageProps) {
	const fextralifeUrl = `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/${slug}-hogwarts-legacy-wiki-guide.png`;

	const sources = [fextralifeUrl, potterDbImage, PLACEHOLDER].filter(
		(s): s is string => Boolean(s)
	);

	const [index, setIndex] = useState(0);

	return (
		<img
			src={sources[index]}
			alt={alt}
			className={className}
			onError={() => {
				if (index < sources.length - 1) setIndex((i) => i + 1);
			}}
		/>
	);
}
