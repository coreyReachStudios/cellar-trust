import { Page_Pagebuilder_PageBlocks } from "@/utils/_generated/graphql";
import gqlFetch from "../fetchGraphql";

export async function getPageData(slug: string) {
	const data = await gqlFetch({
		next: { tags: [`/${slug}`] },
		variables: { uri: slug, id: slug },
		query: `
        page(id: "/home", idType: URI) {
    id
    pageBuilder {
      fieldGroupName
      pageBlocks {
        ... on Page_Pagebuilder_PageBlocks_HeroBlock {
          fieldGroupName
          subtitle
          title
          heroImage {
            cta
            description
            imageUrl {
              sourceUrl
            }
          }
        }
        ... on Page_Pagebuilder_PageBlocks_HeadingDividerBlock {
          fieldGroupName
        }
        ... on Page_Pagebuilder_PageBlocks_PlainCtaBlock {
          description
          fieldGroupName
          title
          position
        }
        ... on Page_Pagebuilder_PageBlocks_VideoBlock {
          fieldGroupName
          videoUrl
        }
        ... on Page_Pagebuilder_PageBlocks_HeroWCardsBlock {
          fieldGroupName
          textContent
          ctaCards {
            leftCard {
              title
              icon
              link {
                ... on Page {
                  id
                  uri
                }
              }
            }
          }
          heroImage {
            sourceUrl
          }
        }
        ... on Page_Pagebuilder_PageBlocks_CtaBannerBlock {
          description
          fieldGroupName
          title
          position
          ctaLink {
            title
            url
            target
          }
        }
        ... on Page_Pagebuilder_PageBlocks_CardGridBlock {
          fieldGroupName
          heading
        }
        ... on Page_Pagebuilder_PageBlocks_CarouselBlock {
          fieldGroupName
          heading
          items {
            item {
              text
              author {
                name
                avatar {
                  sourceUrl
                }
              }
            }
          }
        }
        ... on Page_Pagebuilder_PageBlocks_StatisticsBannerBlock {
          fieldGroupName
          statistic {
            title
            value
          }
        }
        ... on Page_Pagebuilder_PageBlocks_DownloadCtaBlock {
          fieldGroupName
          title
          file {
            sourceUrl
          }
        }
        ... on Page_Pagebuilder_PageBlocks_CtaWImageBlock {
          fieldGroupName
          text
          link {
            url
            title
            target
          }
          title
        }
        ... on Page_Pagebuilder_PageBlocks_CardRowBlock {
          fieldGroupName
          card {
            title
            text
            image
          }
        }
        ... on Page_Pagebuilder_PageBlocks_TestimonialsBlock {
          fieldGroupName
          slideshow {
            testimonial {
              text
              name
              image {
                sourceUrl
              }
            }
            image {
              sourceUrl
            }
          }
        }
        ... on Page_Pagebuilder_PageBlocks_HeroDonateBlock {
          fieldGroupName
          text
          title
          donationAmount {
            amount
          }
        }
        ... on Page_Pagebuilder_PageBlocks_TimelineBlock {
          description
          fieldGroupName
          title
          event {
            section {
              year
              title
              text
              image {
                sourceUrl
              }
            }
          }
        }
        ... on Page_Pagebuilder_PageBlocks_NewsletterCtaBlock {
          fieldGroupName
          title
        }
      }
    }
  }
        `,
	});

	return {
		page: {
			components: data?.page?.pageBuilder?.pageBlocks as Page_Pagebuilder_PageBlocks[],
		},
	};
}
