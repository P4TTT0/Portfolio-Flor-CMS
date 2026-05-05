import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sample',
  title: 'Sample',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Beat', value: 'beat'},
          {title: 'Melody', value: 'melody'},
          {title: 'Hook', value: 'hook'},
          {title: 'Full Track', value: 'full_track'},
          {title: 'Stem', value: 'stem'},
        ],
      },
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})