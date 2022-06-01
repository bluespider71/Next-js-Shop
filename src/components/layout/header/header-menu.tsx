import Link from "@components/ui/link";
import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "@components/ui/mega-menu";
import classNames from "classnames";
import ListMenu from "@components/ui/list-menu";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";

interface MenuProps {
	data: any;
	className?: string;
}
type MenuLinks = { [key: string]: boolean };

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
	const { t } = useTranslation("menu");
	const [menuLinks, setMenuLinks] = useState<MenuLinks>({});

	useEffect(() => {
		let temp: MenuLinks = {};
		data.map((item: any) => {
			let newId: string = `${item.id}`;
			temp[newId] = false;
		});
		setMenuLinks(temp);
	}, [data]);
	return (
		<nav className={classNames(`headerMenu flex w-full relative`, className)}>
			{data?.map((item: any) => (
				<div
					className={`cursor-pointer menuItem group py-7 ${
						item.subMenu ? "relative" : ""
					}`}
					key={item.id}
				>
					<Link
						id={item.id}
						handleClick={(id: any) => {
							let tempMenuLinks: MenuLinks = { ...menuLinks };
							let keys = Object.keys(tempMenuLinks);
							keys.map((key: string) => {
								if (key !== `${id}`) {
									tempMenuLinks[key] = false;
								}
								if (key == `${id}`) {
									tempMenuLinks[key] = !tempMenuLinks[key];
								}
							});
							setMenuLinks(tempMenuLinks);
						}}
						//href={item.path}
						href={`${item?.columns ? "" : item.path === "/" ? "" : item.path}`}
						className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
					>
						{t(item.label)}
						{(item?.columns || item.subMenu) && (
							<span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
								<FaChevronDown
									className={`transition duration-300 ease-in-out transform ${
										menuLinks[`${item.id}`] ? "-rotate-180" : ""
									}`}
								/>
							</span>
						)}
					</Link>

					{item?.columns && Array.isArray(item.columns) && (
						<MegaMenu
							columns={item.columns}
							shouldShow={menuLinks[`${item.id}`]}
						/>
					)}

					{item?.subMenu && Array.isArray(item.subMenu) && (
						<div
							className={`subMenu shadow-header bg-gray-200 absolute start-0 opacity-0 ${
								menuLinks[`${item.id}`] ? "opacity-100" : ""
							}`}
						>
							<ul className="text-body text-sm py-5">
								{item.subMenu.map((menu: any, index: number) => {
									const dept: number = 1;
									const menuName: string = `sidebar-menu-${dept}-${index}`;

									return (
										<ListMenu
											dept={dept}
											data={menu}
											hasSubMenu={menu.subMenu}
											menuName={menuName}
											key={menuName}
											menuIndex={index}
										/>
									);
								})}
							</ul>
						</div>
					)}
				</div>
			))}
		</nav>
	);
};

export default HeaderMenu;
