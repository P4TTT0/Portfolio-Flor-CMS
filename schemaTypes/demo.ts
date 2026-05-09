import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'demo',
  title: 'Demo',
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
          {title: 'Recording', value: 'recording'},
          {title: 'Live Performance', value: 'live_performance'},
          {title: 'Music Video', value: 'music_video'},
          {title: 'Tutorial', value: 'tutorial'},
          {title: 'Behind The Scenes', value: 'behind_the_scenes'},
        ],
      },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({scheme: ['http', 'https']}),
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