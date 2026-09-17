const PLACEHOLDER =
	'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23222" width="200" height="200" rx="10"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="%23666" font-size="48">✦</text></svg>';

type SpellImageProps = {
	slug: string;
	potterDbImage: string | null;
	alt: string;
	className?: string;
};

export function SpellImage({ potterDbImage, alt, className }: SpellImageProps) {
	return (
		<img
			src={potterDbImage ?? PLACEHOLDER}
			alt={alt}
			className={className}
			onError={(e) => {
				(e.target as HTMLImageElement).src = PLACEHOLDER;
			}}
		/>
	);
}
