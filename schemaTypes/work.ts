import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Trabajo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Publicidad', value: 'publicidad'},
          {title: 'Doblaje', value: 'doblaje'},
          {title: 'Institucional', value: 'institucional'},
          {title: 'Promo', value: 'promo'},
          {title: 'Informativo', value: 'informativo'},
        ],
      },
    }),
    defineField({
      name: 'country',
      title: 'País',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'URL de YouTube',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'country',
    },
  },
})
