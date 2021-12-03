import NextLink, { LinkProps as NextLinkProps } from "next/link";

const Link: React.FC<
	NextLinkProps & { className?: string; handleClick?: any; id?: any }
> = ({ href, handleClick, children, id, ...props }) => {
	return (
		<NextLink href={href}>
			<a
				{...props}
				onClick={(e: any) => {
					e.preventDefault();
					if (handleClick) {
						handleClick(id);
					}
				}}
			>
				{children}
			</a>
		</NextLink>
	);
};

export default Link;
