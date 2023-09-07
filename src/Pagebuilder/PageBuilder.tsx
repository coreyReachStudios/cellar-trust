import { Page_Pagebuilder_PageBlocks } from "@/utils/_generated/graphql";
import dynamic from "next/dynamic";

interface IPageBuilder {
	blocks: any & {}[];
}

const Components: { [name: string]: React.ComponentType<any> | null } = {
	Hero: dynamic(() => import("@/PageBuilder/Blocks/Hero")),
};

export default function Pagebuilder({ blocks }: IPageBuilder) {
	const blockToComponent = (block: Page_Pagebuilder_PageBlocks, index: number) => {
		const name = block.fieldGroupName?.split("_")[3];

		if (!name) return null;

		const Component = Components[name];

		if (!Component) {
			throw new Error(`Component is undefined or null, ${name}`);
		}

		return <Component key={index} {...block} />;
	};

	return <>{blocks.map(blockToComponent)}</>;
}
