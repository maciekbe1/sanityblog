/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  validation: (Rule) => Rule.required(),
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "post" },
                  // other types you may want to link to
                ],
              },
            ],
          },
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      fields: [
        {
          title: "Position",
          name: "position",
          type: "string",
          options: {
            list: [
              {
                title: "Center",
                value: "center",
              },
              {
                title: "Left",
                value: "left",
              },
              {
                title: "Right",
                value: "right",
              },
            ],
            layout: "radio",
            isHighlighted: true,
          },
        },
        {
          type: "text",
          name: "alt",
          title: "Description",
          options: { isHighlighted: true },
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      type: "code",
      options: {
        withFilename: true,
      },
    },
  ],
};
