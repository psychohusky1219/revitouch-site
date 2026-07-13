import {defineArrayMember, defineField, defineType} from 'sanity'

// Sanity supplies the correctly typed rule object for each field type.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const required = (rule: any) => rule.required()

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Website Content',
  type: 'document',
  groups: [
    {name: 'general', title: 'General'},
    {name: 'home', title: 'Homepage'},
    {name: 'treatments', title: 'Treatments'},
    {name: 'appointments', title: 'Appointments & Pricing'},
    {name: 'laser', title: 'Laser'},
    {name: 'reviews', title: 'Reviews'},
    {name: 'gifts', title: 'Gift Cards'},
  ],
  fields: [
    defineField({
      name: 'general',
      title: 'Business details',
      type: 'object',
      group: 'general',
      fields: [
        defineField({name: 'phoneDisplay', title: 'Phone number shown on the site', type: 'string', validation: required}),
        defineField({name: 'phoneLink', title: 'Phone number for links', description: 'Use country code and numbers only, for example +19178913456.', type: 'string', validation: required}),
        defineField({name: 'announcement', title: 'Footer announcement', type: 'string', validation: required}),
        defineField({name: 'footerDescription', title: 'Footer description', type: 'string', validation: required}),
        defineField({name: 'copyright', title: 'Copyright line', type: 'string', validation: required}),
        defineField({name: 'instagramUrl', title: 'Instagram URL', type: 'url'}),
        defineField({name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url'}),
      ],
    }),
    defineField({
      name: 'home',
      title: 'Homepage hero',
      type: 'object',
      group: 'home',
      fields: [
        defineField({name: 'heroEyebrow', title: 'Small heading', type: 'string', validation: required}),
        defineField({name: 'heroTitle', title: 'Main heading', type: 'string', validation: required}),
        defineField({name: 'heroAccent', title: 'Colored heading line', type: 'string', validation: required}),
        defineField({name: 'heroDescription', title: 'Intro paragraph', type: 'text', rows: 3, validation: required}),
        defineField({name: 'heroImage', title: 'Hero image', type: 'image', options: {hotspot: true}}),
        defineField({name: 'reviewQuote', title: 'Featured review', type: 'text', rows: 3}),
      ],
    }),
    defineField({
      name: 'treatments',
      title: 'Massage treatments',
      type: 'array',
      group: 'treatments',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'treatment',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: required}),
            defineField({name: 'summary', title: 'Short description', type: 'text', rows: 2, validation: required}),
            defineField({name: 'detail', title: 'Full description', type: 'text', rows: 4, validation: required}),
            defineField({name: 'image', title: 'Photo', type: 'image', options: {hotspot: true}}),
            defineField({name: 'fallbackImage', title: 'Current website image path', type: 'string', readOnly: true}),
          ],
          preview: {select: {title: 'name', media: 'image', subtitle: 'summary'}},
        }),
      ],
    }),
    defineField({
      name: 'appointments',
      title: 'Appointments and massage pricing',
      type: 'array',
      group: 'appointments',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'appointment',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: required}),
            defineField({name: 'slug', title: 'Booking slug', type: 'slug', options: {source: 'name'}, validation: required}),
            defineField({name: 'duration', title: 'Duration', type: 'string', validation: required}),
            defineField({name: 'price', title: 'Price', type: 'string', validation: required}),
            defineField({name: 'note', title: 'Description', type: 'text', rows: 2}),
            defineField({name: 'calendarUrl', title: 'Booking calendar URL', type: 'url'}),
            defineField({name: 'popular', title: 'Show as most popular', type: 'boolean', initialValue: false}),
            defineField({name: 'showOnBookingPage', title: 'Show on booking page', type: 'boolean', initialValue: true}),
          ],
          preview: {select: {title: 'name', subtitle: 'price'}},
        }),
      ],
    }),
    defineField({
      name: 'laserPricing',
      title: 'Laser hair-removal pricing',
      type: 'array',
      group: 'laser',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'laserPrice',
          fields: [
            defineField({name: 'size', title: 'Area size', type: 'string', validation: required}),
            defineField({name: 'price', title: 'Single-session price', type: 'string', validation: required}),
            defineField({name: 'packagePrice', title: 'Package price', type: 'string'}),
            defineField({name: 'areas', title: 'Included areas', type: 'array', of: [{type: 'string'}]}),
          ],
          preview: {select: {title: 'size', subtitle: 'price'}},
        }),
      ],
    }),
    defineField({
      name: 'reviews',
      title: 'Client reviews',
      type: 'array',
      group: 'reviews',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'review',
          fields: [
            defineField({name: 'quote', title: 'Review', type: 'text', rows: 4, validation: required}),
            defineField({name: 'author', title: 'Attribution', type: 'string', initialValue: 'ReviTouch client'}),
          ],
          preview: {select: {title: 'quote', subtitle: 'author'}},
        }),
      ],
    }),
    defineField({
      name: 'giftCards',
      title: 'Gift-card options',
      type: 'array',
      group: 'gifts',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'giftCard',
          fields: [
            defineField({name: 'amount', title: 'Amount', type: 'string', validation: required}),
            defineField({name: 'note', title: 'Description', type: 'string', validation: required}),
            defineField({name: 'featured', title: 'Show as most popular', type: 'boolean', initialValue: false}),
          ],
          preview: {select: {title: 'amount', subtitle: 'note'}},
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'ReviTouch Website Content'}),
  },
})
