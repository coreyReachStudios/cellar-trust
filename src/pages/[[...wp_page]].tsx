import Pagebuilder from "@/Pagebuilder/PageBuilder";
import { getPageData } from "@/utils/graphql/queries/getPageData";
import { GetStaticProps } from "next";

export default function WP_Page(props: { pageData: any; pageSlug: string; seoData: any; themeSettings: any }) {
	const { pageData } = props;
	return (
		<>
			<Pagebuilder blocks={pageData?.page.pageBuilder} />
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.wp_page as string[];

	let pageData;
	let pageRoute;
	let seoData;

	// No route, the user is most likely on '/'
	if (!slug) {
		pageData = getPageData("/");
		// seoData = getPageSeo("/");
	} else {
		const pageRoute = slug[0] ?? "";
		pageData = getPageData(pageRoute);
		// seoData = getPageSeo(pageRoute);
	}

	await Promise.all([pageData, seoData]);

	return {
		props: {
			pageData: (await pageData).page,
			pageSlug: "/" + pageRoute,
			// seoData: (await seoData).data.pageBy,
			// themeSettings: (await seoData).data.themeGeneralSettings,
		},
	};
};
