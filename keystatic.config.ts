import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: {
      name: "2fastmedia",
    },
    navigation: {
      Content: ["posts"],
    },
  },
  collections: {
    posts: collection({
      label: "Blog",
      path: "content/blog/*",
      slugField: "slug",
      entryLayout: "content",
      format: {
        contentField: "content",
      },
      columns: ["title", "category", "publishDate"],
      schema: {
        title: fields.text({
          label: "Title",
          validation: { isRequired: true },
        }),
        slug: fields.text({
          label: "Slug",
          validation: {
            isRequired: true,
            pattern: {
              regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
              message: "Use lowercase letters, numbers and hyphens only.",
            },
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/blog",
          publicPath: "/blog",
          validation: { isRequired: true },
        }),
        category: fields.text({
          label: "Category",
          validation: { isRequired: true },
        }),
        publishDate: fields.date({
          label: "Publish Date",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: "Author",
          defaultValue: "2fastmedia",
          validation: { isRequired: true },
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "public/blog",
              publicPath: "/blog",
            },
          },
        }),
      },
    }),
  },
});
